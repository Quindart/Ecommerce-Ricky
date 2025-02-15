const createError = require('http-errors')
const { HTTP_STATUS, ROLES } = require('../utils/constant')
const helper = require('../helper/index')
const jwtHelper = require('../helper/jwt.helper')
const User = require('../models/user.model')
const RefreshToken = require('../models/refreshToken.model')
const Cart = require('../models/cart.model')
const ProductLiked = require('../models/productLiked.model')

//[POST LOGIN ]
const login = async (req, res) => {
    const { userName, password, remmber } = req.body
    var refreshToken = ''
    try {
        //Checked Username
        const user = await User.findOne({
            userName: userName,
        })
        if (!user) {
            return res.status(HTTP_STATUS.NOT_FOUND).json({
                status: HTTP_STATUS.NOT_FOUND,
                message: 'Username or Password not found',
            })
        } else {
            //Checked Password
            const decPassword = helper.decryptedPassword(user.password)

            if (decPassword !== password) {
                return res.status(HTTP_STATUS.NOT_FOUND).json({
                    status: HTTP_STATUS.NOT_FOUND,
                    message: 'Password not found',
                })
            }

            //Checked Active
            if (!user.isActive) {
                return res.status(HTTP_STATUS.UNAUTHORIZED).json({
                    status: HTTP_STATUS.UNAUTHORIZED,
                    message: 'Your account has not been activated',
                })
            }

            //Checked RefreshToken
            if (refreshToken === '') {
                refreshToken = jwtHelper.generateToken(
                    'refresh',
                    { id: user._id, dateCreated: Date.now },
                    '30000h'
                )
            } else {
                refreshToken = req.headers['authorization'].replace(
                    'Bearer ',
                    ''
                )
            }

            const accessToken = jwtHelper.generateToken(
                'access',
                { id: user._id, dateCreated: Date.now },
                remmber ? '24h' : '1h'
            )
            let returnUser = {
                id: user._id,
                firstName: user.first_name,
                lastName: user.last_name,
                avatar: user.avatar,
                email: user.email,
                isActive: user.isActive,
                role: user.role,
            }
            if (user.role === ROLES.USER.name) {
                const results = await Promise.all([
                    Cart.findById(user.id).lean(),
                    ProductLiked.findOne({
                        user_id: user._id,
                    }).lean(),
                ])
                returnUser['cart'] = results[0] ? results[0] : []
                returnUser['totalItemCart'] = results[0]
                    ? results[0].cart_details.length
                    : []
                returnUser['productLiked'] = results[1]
                    ? results[1].products
                    : []
                returnUser['totalItemProductLiked'] = results[1]
                    ? results[1].products.length
                    : []
            }
            res.status(HTTP_STATUS.OK).json({
                success: true,
                status: HTTP_STATUS.OK,
                message: 'Login Success',
                user: returnUser,
                tokenList: {
                    accessToken: accessToken,
                    refreshToken: refreshToken,
                },
            })
        }
    } catch (error) {
        console.log(error)
    }
}

//[POST REGISTER]
const register = async (req, res) => {
    const { email, userName, password, first_name, last_name } = req.body

    const oldUser = await User.findOne({
        $or: [{ userName: userName }, { email: email }],
    }).lean()
    console.log('🚀 ~ register ~ oldUser:', oldUser)

    //Check isEmpty user
    if (oldUser) {
        return res.status(HTTP_STATUS.NOT_FOUND).json({
            success: false,
            status: HTTP_STATUS.NOT_FOUND,
            message: 'User Already Exist. Please Login',
        })
    }

    const encryptedPassword = helper.encryptedPassword(password)

    const newUser = await User.create({
        email,
        userName,
        password: encryptedPassword,
        first_name,
        last_name,
    })

    const accessToken = jwtHelper.generateToken(
        'access',
        { id: newUser._id, dateCreated: Date.now },
        '1h'
    )
    const refreshToken = jwtHelper.generateToken(
        'refresh',
        { id: newUser._id, dateCreated: Date.now },
        '30000h'
    )
    const signatureRefreshToken = jwtHelper.signatureToken(refreshToken)

    const oldRefreshToken = await RefreshToken.findOne({
        value: signatureRefreshToken,
    }).lean()

    //Check oldRefreshToken
    if (oldRefreshToken) {
        return res.status(HTTP_STATUS.NOT_FOUND).json({
            success: false,
            status: HTTP_STATUS.NOT_FOUND,
            message: 'Token Already Exist.Try again',
        })
    }

    const newRefreshToken = await RefreshToken.create({
        signatureRefreshToken,
    })

    res.status(HTTP_STATUS.OK).json({
        success: true,
        status: 200,
        message: 'Register Success',
        user: {
            _id: newUser._id,
            first_name: newUser.first_name,
            last_name: newUser.last_name,
            userName: newUser.userName,
            email: newUser.email,
            password: newUser.encryptedPassword,
        },
        tokenList: {
            accessToken,
            refreshToken,
        },
    })
}
//[POST GENERATE NEW ACCESSTOKEN]
const generateAccessToken = async (req, res) => {
    const refreshTokenFormClient =
        req.body.refreshToken ||
        req.headers['authorization'].replace('Bearer ', '')

    const signatureRefreshTokenClient = jwtHelper.signatureToken(
        refreshTokenFormClient
    )

    const refreshModel = RefreshToken.findOne({
        signatureRefreshToken: signatureRefreshTokenClient,
    }).lean()

    if (!refreshTokenFormClient) {
        return res.status(HTTP_STATUS.FORBIDDEN).json({
            success: false,
            status: HTTP_STATUS.FORBIDDEN,
            message: 'No RefreshToken provied',
        })
    }
    if (!refreshModel) {
        return res.status(HTTP_STATUS.NOT_FOUND).json({
            success: false,
            status: HTTP_STATUS.FORBIDDEN,
            message: 'RefreshToken is not valid',
        })
    }

    const decoded = await jwtHelper.verifyToken(
        'refresh',
        refreshTokenFormClient
    )

    const accessToken = jwtHelper.generateToken(
        'access',
        { id: decoded.payload.data.id },
        '1h'
    )
    res.status(HTTP_STATUS.CREATED).json({
        success: true,
        status: HTTP_STATUS.CREATED,
        message: 'Created AccessToken success',
        accessToken: accessToken,
    })
}
//[PUT FORGOT-PASSWORD]
const forgotPassword = async () => {}

//[PUT CHANGE-PASSWORD]
const changePassword = async () => {}

module.exports = {
    login,
    register,
    changePassword,
    generateAccessToken,
}
