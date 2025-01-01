import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Form, Formik } from 'formik'
import Textfield from '../../../Components/ui/Textfield/Textfield'
import Button from '../../../Components/ui/Button/Button'
import { APP_ICON } from '../../../Utils/Constants'
import { Icon } from '@iconify/react'
import * as yup from 'yup'
import Dropdown from '../../../Components/ui/Dropdown/Dropdown'
import { enqueueSnackbar } from 'notistack'
import client from '../../../services/api-context'
import { Fragment } from 'react'
import { CircularProgress } from '@mui/material'
import Calendar from '../../../Components/ui/Calendar'
import dayjs from 'dayjs'

const GENDER_ENUM = {
    MALE: 'MALE',
    FEMALE: 'FEMALE',
    OTHER: 'OTHER',
    UNKNOWN: 'UNKNOWN',
}

const genderList = [
    { title: 'Male', value: GENDER_ENUM.MALE },
    { title: 'Female', value: GENDER_ENUM.FEMALE },
    { title: 'Other', value: GENDER_ENUM.OTHER },
    { title: 'Unknown', value: GENDER_ENUM.UNKNOWN },
]

export const SEARCH_ENUM = {
    ADMIN: 'admin',
    USER: 'user',
    WAREHOUSE: 'warehouse',
    OWNER: 'owner',
}
const minDate = dayjs().subtract(60, 'year')
const maxDate = dayjs().subtract(18, 'year')
const list = [
    { title: 'User', value: SEARCH_ENUM.USER },
    { title: 'Admin', value: SEARCH_ENUM.ADMIN },
    { title: 'Warehouse', value: SEARCH_ENUM.WAREHOUSE },
    { title: 'Owner', value: SEARCH_ENUM.OWNER },
]
const validationSchema = yup.object({
    firstName: yup
        .string()
        .required('First name is required')
        .matches(
            /^[a-zA-ZàáãạảăắằẳẵặâấầẩẫậèéẹẻẽêềếểễệđìíĩỉịòóõọỏôốồổỗộơớờởỡợùúũụủưứừửữựỳỵỷỹýÀÁÃẠẢĂẮẰẲẴẶÂẤẦẨẪẬÈÉẸẺẼÊỀẾỂỄỆĐÌÍĨỈỊÒÓÕỌỎÔỐỒỔỖỘƠỚỜỞỠỢÙÚŨỤỦƯỨỪỬỮỰỲỴỶỸÝ\s]+$/,
            'First name should only contain alphabets',
        ),

    lastName: yup
        .string()
        .required('Last name is required')
        .matches(
            /^[a-zA-ZàáãạảăắằẳẵặâấầẩẫậèéẹẻẽêềếểễệđìíĩỉịòóõọỏôốồổỗộơớờởỡợùúũụủưứừửữựỳỵỷỹýÀÁÃẠẢĂẮẰẲẴẶÂẤẦẨẪẬÈÉẸẺẼÊỀẾỂỄỆĐÌÍĨỈỊÒÓÕỌỎÔỐỒỔỖỘƠỚỜỞỠỢÙÚŨỤỦƯỨỪỬỮỰỲỴỶỸÝ\s]+$/,
            'Last name should only contain alphabets',
        ),
    email: yup.string().required('Email is required').email('Email is invalid'),
    ward: yup
        .string()
        .required('Ward is required')
        .matches(
            /^[a-zA-ZàáãạảăắằẳẵặâấầẩẫậèéẹẻẽêềếểễệđìíĩỉịòóõọỏôốồổỗộơớờởỡợùúũụủưứừửữựỳỵỷỹýÀÁÃẠẢĂẮẰẲẴẶÂẤẦẨẪẬÈÉẸẺẼÊỀẾỂỄỆĐÌÍĨỈỊÒÓÕỌỎÔỐỒỔỖỘƠỚỜỞỠỢÙÚŨỤỦƯỨỪỬỮỰỲỴỶỸÝ\s]+$/,
            'Ward should only contain alphabets',
        ),
    district: yup
        .string()
        .required('District is required')
        .matches(
            /^[a-zA-ZàáãạảăắằẳẵặâấầẩẫậèéẹẻẽêềếểễệđìíĩỉịòóõọỏôốồổỗộơớờởỡợùúũụủưứừửữựỳỵỷỹýÀÁÃẠẢĂẮẰẲẴẶÂẤẦẨẪẬÈÉẸẺẼÊỀẾỂỄỆĐÌÍĨỈỊÒÓÕỌỎÔỐỒỔỖỘƠỚỜỞỠỢÙÚŨỤỦƯỨỪỬỮỰỲỴỶỸÝ\s0-9]+$/,
            'District should only contain alphabets',
        ),

    detail: yup
        .string()
        .required('Address detail is required')
        .matches(
            /^[a-zA-ZàáãạảăắằẳẵặâấầẩẫậèéẹẻẽêềếểễệđìíĩỉịòóõọỏôốồổỗộơớờởỡợùúũụủưứừửữựỳỵỷỹýÀÁÃẠẢĂẮẰẲẴẶÂẤẦẨẪẬÈÉẸẺẼÊỀẾỂỄỆĐÌÍĨỈỊÒÓÕỌỎÔỐỒỔỖỘƠỚỜỞỠỢÙÚŨỤỦƯỨỪỬỮỰỲỴỶỸÝ\s0-9/,]+$/,
            'Detail should only contain alphabets',
        ),
    phone: yup
        .string()
        .matches(/^0\d{9}$/, 'Must be 10 digits and start with 0')
        .required('Phone number is required'),
    province: yup
        .string()
        .required('Province is required')
        .matches(
            /^[a-zA-ZàáãạảăắằẳẵặâấầẩẫậèéẹẻẽêềếểễệđìíĩỉịòóõọỏôốồổỗộơớờởỡợùúũụủưứừửữựỳỵỷỹýÀÁÃẠẢĂẮẰẲẴẶÂẤẦẨẪẬÈÉẸẺẼÊỀẾỂỄỆĐÌÍĨỈỊÒÓÕỌỎÔỐỒỔỖỘƠỚỜỞỠỢÙÚŨỤỦƯỨỪỬỮỰỲỴỶỸÝ\s]+$/,
            'Province should only contain alphabets',
        ),
    birthday: yup.date().required('Required'),
    gender: yup.string().required('Gender is required'),
})

function EditUser(props) {
    const { handleCloseEditUserModal, handleGetUsersByParams, id } = props
    const [avatarSrc, setAvatarSrc] = useState('https://uko-react.vercel.app/static/avatar/001-man.svg')
    const [user, setUser] = useState(null)
    const [address, setAddress] = useState(null)
    const initialValues = {
        firstName: user?.first_name,
        lastName: user?.last_name,
        email: user?.email,
        detail: address?.detail,
        ward: address?.ward?.wardName,
        district: address?.district?.districtName,
        province: address?.province?.provinceName,
        phone: user?.phone,
        birthday: dayjs(user?.dateOfBirth),
        gender: user?.gender,
    }
    useEffect(() => {
        const getUserById = async () => {
            try {
                const response = await client.get(`/users/${id}`)
                setUser(response.user)
                const addresses = await client.get(`/addresses/${response.user?.address[0]?._id}`)
                setAddress(addresses.address)
            } catch (error) {
                console.error('Failed to fetch:', error)
            }
        }
        getUserById()
    }, [])

    const [sortedRoles, setSortedRoles] = useState(list)
    useEffect(() => {
        if (user && user.role) {
            const userRoleItem = list.find((item) => item.value === user.role)
            const otherRoles = list.filter((item) => item.value !== user.role)
            setSortedRoles([userRoleItem, ...otherRoles])
        }
    }, [user])
    const [sortedGenders, setSortedGenders] = useState(genderList)
    useEffect(() => {
        if (user) {
            let userGender = user.gender
            if (userGender === null) {
                userGender = GENDER_ENUM.UNKNOWN
            }
            const userGenderItem = genderList.find((item) => item.value === userGender)
            const otherGenders = genderList.filter((item) => item.value !== userGender)
            setSortedGenders([userGenderItem, ...otherGenders])
        }
    }, [user])

    const handleEditUser = (values, { setSubmitting }) => {
        const addressId = user.address[0]._id
        const userData = {
            _id: user._id,
            first_name: values.firstName,
            last_name: values.lastName,
            email: values.email,
            phone: values.phone,
            dateOfBirth: values.birthday,
            gender: values.gender,
        }
        const addressData = {
            detail: values.detail,
            ward: {
                wardName: values.ward,
            },
            district: {
                districtName: values.district,
            },
            province: {
                provinceName: values.province,
            },
            country: 'VietNam',
        }
        const userRequest = client.post(`/users/${id}`, userData).catch((error) => {
            console.error('User request error:', error)
            throw error
        })
        const addressRequest = client.put(`/addresses/${addressId}`, addressData).catch((error) => {
            console.error('Address request error:', error)
            throw error
        })
        Promise.all([userRequest, addressRequest])
            .then((responses) => {
                const userResponse = responses[0]
                const addressResponse = responses[1]
                setSubmitting(false)
                handleGetUsersByParams()
                handleCloseEditUserModal()
                enqueueSnackbar('Update user successful', {
                    variant: 'success',
                })
            })
            .catch((error) => {
                console.error(error)
                setSubmitting(false)
                enqueueSnackbar('Fail to update user', {
                    variant: 'error',
                })
            })
    }
    const handleImageUpload = (event) => {
        let file = event.target.files[0]
        let reader = new FileReader()
        reader.onloadend = () => {
            setAvatarSrc(reader.result)
        }

        if (file) {
            reader.readAsDataURL(file)
        }
    }

    return (
        <Fragment>
            {address ? (
                <Box mx={2} mb={3} mt={1}>
                    <Typography
                        style={{ fontWeight: 'bold', fontSize: '20px', color: '#374151 ' }}
                        marginBottom="15px"
                        variant="h7"
                    >
                        Edit User
                    </Typography>

                    <Box>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleEditUser}
                        >
                            {({ setFieldValue, handleBlur, handleChange, values, errors, touched }) => (
                                <Form>
                                    <Box width="100%" display={'flex'} gap={2}>
                                        <Box my={1} flex={1}>
                                            <Box display="flex" flexDirection={'column'} alignItems={'center'}>
                                                <Box
                                                    position={'relative'}
                                                    height={'70%'}
                                                    width={'70%'}
                                                    mb={1}
                                                    mt={2}
                                                    sx={{ borderRadius: '50%', bgcolor: '#f3f3f9' }}
                                                >
                                                    <img style={{ borderRadius: '50%' }} alt="" src={avatarSrc} />
                                                    <Box
                                                        sx={{
                                                            border: '3px solid white',
                                                            backgroundColor: '#2499ef',
                                                            cursor: 'pointer',
                                                        }}
                                                        borderRadius={'50%'}
                                                        height={32}
                                                        width={32}
                                                        position={'absolute'}
                                                        top={0}
                                                        right={'4px'}
                                                        color={'white'}
                                                        display={'flex'}
                                                        alignItems={'center'}
                                                        justifyContent={'center'}
                                                    >
                                                        <label style={{ cursor: 'pointer' }}>
                                                            <Icon width={20} height={20} icon={APP_ICON.i_camera} />
                                                            <input
                                                                type="file"
                                                                style={{ display: 'none' }}
                                                                onChange={(event) => {
                                                                    handleImageUpload(event)
                                                                }}
                                                            />
                                                        </label>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                        <Box my={1} flex={1}>
                                            <Box my={2}>
                                                <Textfield
                                                    placeholder="First Name"
                                                    id="firstName"
                                                    type="text"
                                                    label="First Name"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.firstName}
                                                    helperText={
                                                        touched.firstName && errors.firstName ? errors.firstName : ''
                                                    }
                                                    error={touched.firstName && errors.firstName ? true : false}
                                                />
                                            </Box>
                                            <Box my={2}>
                                                <Textfield
                                                    placeholder="Last Name"
                                                    id="lastName"
                                                    type="text"
                                                    label="Last Name"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.lastName}
                                                    helperText={
                                                        touched.lastName && errors.lastName ? errors.lastName : ''
                                                    }
                                                    error={touched.lastName && errors.lastName ? true : false}
                                                />
                                            </Box>
                                            <Box>
                                                <Dropdown
                                                    key={sortedGenders.map((gender) => gender?.value).join(',')}
                                                    list={sortedGenders}
                                                    onChange={(e) => setFieldValue('gender', e.target.value)}
                                                />
                                            </Box>
                                        </Box>
                                    </Box>

                                    <Box width="100%" display={'flex'} gap={2}>
                                        <Box my={1} flex={1}>
                                            <Textfield
                                                placeholder="0123456789"
                                                id="phone"
                                                type="text"
                                                label="Phone"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.phone}
                                                helperText={touched.phone && errors.phone ? errors.phone : ''}
                                                error={touched.phone && errors.phone ? true : false}
                                            />
                                        </Box>
                                        <Box my={1} flex={1}>
                                            <Calendar
                                                showDaysOutsideCurrentMonth
                                                className="hover:border-white"
                                                minDate={minDate}
                                                maxDate={maxDate}
                                                id="birthday"
                                                label="Birthday"
                                                value={values.birthday}
                                                onBlur={handleBlur}
                                                onChange={(newValue) => {
                                                    setFieldValue('birthday', newValue)
                                                }}
                                                error={touched.birthday && errors.birthday ? true : false}
                                            />
                                        </Box>
                                    </Box>
                                    <Box width="100%" display={'flex'} gap={2}>
                                        <Box my={1} flex={1}>
                                            <Textfield
                                                placeholder="example@gmail.com"
                                                id="email"
                                                type="email"
                                                label="Email"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.email}
                                                helperText={touched.email && errors.email ? errors.email : ''}
                                                error={touched.email && errors.email ? true : false}
                                            />
                                        </Box>
                                        <Box my={1} flex={1}>
                                            <Textfield
                                                placeholder="123, ABC street"
                                                id="detail"
                                                type="text"
                                                label="Address Detail"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.detail}
                                                helperText={touched.detail && errors.detail ? errors.detail : ''}
                                                error={touched.detail && errors.detail ? true : false}
                                            />
                                        </Box>
                                    </Box>
                                    <Box width="100%" display={'flex'} gap={2}>
                                        <Box my={1} flex={1}>
                                            <Textfield
                                                placeholder="Ward"
                                                id="ward"
                                                type="text"
                                                label="Ward"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.ward}
                                                helperText={touched.ward && errors.ward ? errors.ward : ''}
                                                error={touched.ward && errors.ward ? true : false}
                                            />
                                        </Box>
                                        <Box my={1} flex={1}>
                                            <Textfield
                                                placeholder="District"
                                                id="district"
                                                type="text"
                                                label="District"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.district}
                                                helperText={touched.district && errors.district ? errors.district : ''}
                                                error={touched.district && errors.district ? true : false}
                                            />
                                        </Box>
                                    </Box>
                                    <Box width="100%" display={'flex'} gap={2}>
                                        <Box my={1} flex={1}>
                                            <Textfield
                                                placeholder="Province"
                                                id="province"
                                                type="text"
                                                label="Province"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.province}
                                                helperText={touched.province && errors.province ? errors.province : ''}
                                                error={touched.province && errors.province ? true : false}
                                            />
                                        </Box>
                                        <Box my={1} flex={1}>
                                            <Dropdown
                                                key={sortedRoles.map((role) => role?.value).join(',')}
                                                list={sortedRoles}
                                                onChange={(e) => setFieldValue('gender', e.target.value)}
                                                sx={{
                                                    pointerEvents: 'none',
                                                }}
                                            />
                                        </Box>
                                    </Box>
                                    <Box mt={1} sx={{ display: 'flex', gap: 2 }}>
                                        <Button
                                            onClick={handleCloseEditUserModal}
                                            sx={{ width: '50%' }}
                                            color="primary"
                                            variant="outline"
                                        >
                                            <Icon width={20} style={{ marginRight: 4 }} icon="mdi:cancel-outline" />
                                            Cancel
                                        </Button>
                                        <Button type="submit" sx={{ width: '50%' }} color="primary">
                                            <Icon width={20} style={{ marginRight: 4 }} icon="iconamoon:edit" />
                                            Update User
                                        </Button>
                                    </Box>
                                </Form>
                            )}
                        </Formik>
                    </Box>
                </Box>
            ) : (
                <Box display="flex" alignItems="center" justifyContent="center" height={300}>
                    <CircularProgress />
                </Box>
            )}
        </Fragment>
    )
}

export default EditUser
