import { Icon } from '@iconify/react'
import AvatarGroup from '../Components/ui/Avatar/AvatarGroup.js'
import Button from '../Components/ui/Button/Button.js'
import { APP_ICON, APP_ROUTER } from '../Utils/Constants.js'
import Textfield from '../Components/ui/Textfield/Textfield.js'
import PopupUser from '../Components/ui/Popup/PopupUser.js'
import StatusBar from '../Components/ui/StatusBar/StatusBar.js'
import { useState } from 'react'
import Dropdown from '../Components/ui/Dropdown/Dropdown.js'
import Modal from '../Components/ui/Modal/Modal.js'
import InputUpload from '../Components/ui/InputUpload/InputUpload.js'
import PopupServ from '../Components/ui/Popup/PopupServ.js'
import { useTranslation } from 'react-i18next'
import i18n from '../translation/i18n.js'
import PopupLang from '../Components/ui/Popup/PopupLang.js'
import { Avatar, Box, Table, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { BadgeWrapper } from '../Components/ui/Badge/Badge.js'
import Menu from '../Components/ui/Menu/Menu.js'
import APIKeys from '../Components/ui/Menu/Details/APIKeys.js'
import DeleteAcc from '../Components/ui/Menu/Details/DeleteAcc.js'
import Referrals from '../Components/ui/Menu/Details/Referrals.js'
import Statement from '../Components/ui/Menu/Details/Statements.js'
import Billing from '../Components/ui/Menu/Details/Billing.js'
import SocialAcc from '../Components/ui/Menu/Details/SocialAcc.js'
import ConnectedAcc from '../Components/ui/Menu/Details/ConnectedAcc.js'
import Verification from '../Components/ui/Menu/Details/Verification.js'
import Preferences from '../Components/ui/Menu/Details/Preferences.js'
import Password from '../Components/ui/Menu/Details/Password.js'
import BasicInfo from '../Components/ui/Menu/Details/BasicInfo.js'
import Device from '../Components/ui/Menu/Details/Devices.js'
import Notification from '../Components/ui/Menu/Details/Notifications.js'
import Tabs from '../Components/ui/Tabs/Tabs.js'
import Calendar from '../Components/ui/Calendar/index.js'
const avatars = [
    {
        src: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
    },
    {
        src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
    },
    {
        src: 'https://media.istockphoto.com/id/1247693979/photo/close-up-portrait-of-young-smiling-handsome-man-wearing-blue-shirt-and-glasses-feeling.jpg?s=612x612&w=0&k=20&c=PgpEGomO4XLVvRHlFxuqneqm0E68_zYkXVqzr5WN_eo=',
    },
    { src: '' },
]
const names = [
    {
        name: 'Bob',
    },
    {
        name: 'Bill',
    },
    {
        name: 'Ben',
    },
    { name: '' },
]
const warehouseItem = [
    'https://attribute.hstatic.net/200000312481/attribute/olc31003_b15f9f049c014a9d9c709cf0aa6ab353_master.jpg',
    'https://attribute.hstatic.net/200000312481/attribute/olc31002_1_c01afc3a5c614cb2880b3740179ed447_master.jpg',
    'https://attribute.hstatic.net/200000312481/attribute/aho2002_1_4c1c4e1db1ed4450b31da91840bf92d7_master.jpg',
]
const user = {
    firstName: 'Than Nguyen Thanh',
    lastName: 'Thien',
    avt: 'https://img.freepik.com/premium-vector/avatar-icon-smiley-face-man_1692-130.jpg',
    email: 'tntt@gmail.com',
}
const listLanguage = [
    { title: 'Vietnamese', value: 'vi' },
    { title: 'English', value: 'en' },
]

function ComponentPage() {
    const navigate = useNavigate()
    const tabs = [
        {
            label: 'Overview',
            component: <div>Content for Tab 1</div>,
        },
        {
            label: 'Projects',
            component: <div>Content for Tab 2</div>,
        },
        {
            label: 'Campaigns',
            component: <div>Content for Tab 3</div>,
        },
        {
            label: 'Documents',
            component: <div>Content for Tab 3</div>,
        },
        {
            label: 'Connections',
            component: <div>Content for Tab 3</div>,
        },
        {
            label: 'Activity',
            component: <div>Content for Tab 3</div>,
        },
    ]
    const demo = 50
    const [status, setStatus] = useState(demo)
    const handleCompleteClick = () => {
        if (status < 100) {
            setStatus(status + 10)
        }
    }
    const handleResetClick = () => {
        setStatus(0)
    }
    const [valueDrop, setValueDrop] = useState('')
    const listDrop = [
        { title: 'quang', value: 10 },
        { title: 'long', value: 20 },
        { title: 'phuc', value: 30 },
    ]

    const [openModal, setOpenModal] = useState({ isOpen: false, size: 'sm' })

    const handleOpenModal = (option) => {
        setOpenModal({ isOpen: true, size: option })
    }

    const handleClose = () => {
        setOpenModal({ ...openModal, isOpen: false })
    }
    const handleChangeLanguage = (value) => {
        i18n.changeLanguage(value)
    }
    const { t } = useTranslation()

    const [page, setPage] = useState(1)
    const handleChangePanigation = (event, value) => {
        setPage(value)
    }
    const rows = [
        {
            id: '1',
            date: 'Jan 10, 2024',
            code: 'HLNBCKHJ',
            detail: {
                name: 'Beef',
                img: 'https://uko-react.vercel.app/static/attributes/shoe-3.png',
                desc: 'Amazon lins',
            },
            value: 60000,
            brand: 'Jolly Pet',
            category: 'Food',
            status: <BadgeWrapper badgeContent={'Available'} shape="square" type="green_text"></BadgeWrapper>,
        },
        {
            id: '2',
            date: 'Jan 10, 2024',
            code: 'HLNBCKHJ',
            detail: {
                name: ' Dog Food',
                img: 'https://uko-react.vercel.app/static/attributes/shoe-3.png',
                desc: 'Amazon lins',
            },
            value: 60000,
            brand: 'Jolly Pet',
            category: 'Food',
            status: <BadgeWrapper badgeContent={'Available'} shape="square" type="green_text"></BadgeWrapper>,
        },
        {
            id: '3',
            date: 'Jan 10, 2024',
            code: 'HLNBCKHJ',
            detail: {
                name: 'Beef Dog',
                img: 'https://uko-react.vercel.app/static/attributes/shoe-3.png',
                desc: 'Amazon lins',
            },
            value: 60000,
            brand: 'Jolly Pet',
            category: 'Food',
            status: <BadgeWrapper badgeContent={'Available'} shape="square" type="green_text"></BadgeWrapper>,
        },
        {
            id: '4',
            date: 'Jan 10, 2024',
            code: 'HLNBCKHJ',
            detail: {
                name: ' Dog ',
                img: 'https://uko-react.vercel.app/static/attributes/shoe-3.png',
                desc: 'Amazon lins',
            },
            value: 70000,
            brand: 'Jolly',
            category: 'Food',
            status: <BadgeWrapper badgeContent={'Out of Stock'} shape="square" type="red_text"></BadgeWrapper>,
        },
        {
            id: '5',
            date: 'Jan 10, 2024',
            code: 'HLNBCKHJ',
            detail: {
                name: ' Food',
                img: 'https://uko-react.vercel.app/static/attributes/shoe-3.png',
                desc: 'Amazon lins',
            },
            value: 60000,
            brand: 'Jolly Pet',
            category: 'Food',
            status: <BadgeWrapper badgeContent={'Out of Stock'} shape="square" type="red_text"></BadgeWrapper>,
        },
        {
            id: '6',
            date: 'Jan 10, 2024',
            code: 'HLNBCKHJ',
            detail: {
                name: 'Beef Dog Food',
                img: 'https://uko-react.vercel.app/static/attributes/shoe-3.png',
                desc: 'Amazon lins',
            },
            value: 50000,
            brand: ' Pet',
            category: 'Food',
            status: <BadgeWrapper badgeContent={'Out of Stock'} shape="square" type="red_text"></BadgeWrapper>,
        },
    ]
    const columns = [
        {
            field: 'detail',
            headerName: 'attribute',
            flex: 2,
            renderCell: (params) => (
                <Box className="flex gap-3">
                    <img className="h-[50px] w-[50px]" src={params.formattedValue.img} alt="" />
                    <Box>
                        <Typography className="text-[14px] font-bold text-gray-600">
                            {params.formattedValue.name}
                        </Typography>
                        <Typography variant="h10" className="font-500 text-gray-[#5f748d]">
                            {params.formattedValue.desc}
                        </Typography>
                    </Box>
                </Box>
            ),
        },
        {
            field: 'date',
            headerName: 'Date',
            flex: 1,
        },
        {
            field: 'category',
            headerName: 'Category',
            flex: 1,

            renderCell: (params) => (
                <Box className="font-500 rounded-3xl bg-[#f6f6f8] px-5 py-1">{params.formattedValue}</Box>
            ),
        },
        {
            field: 'brand',
            headerName: 'Brand',
            flex: 1,
        },

        {
            field: 'value',
            headerName: 'value',
            flex: 1,
        },
        {
            field: 'status',
            headerName: 'Status',

            flex: 1,
            renderCell: (params) => <Box className="font-500 px-7 py-1">{params.row.status}</Box>,
        },
    ]

    const data = [
        {
            attribute: 'Light Airpod',
            Producer: 'Apple',
            ID: 'PD0001',
            Category: 'Air Pod',
            Cost: '$432',
            Extra: 'Yes',
            Priority: 'High',
            Edit: 'Edit',
        },
        {
            attribute: 'Air Pod 2',
            Producer: 'Apple',
            ID: 'PD0002',
            Category: 'Air Pod',
            Cost: '$432',
            Extra: 'No',
            Priority: 'Medium',
            Edit: 'Edit',
        },
        {
            attribute: 'Nike Shoe',
            Producer: 'Nike',
            ID: 'PD0003',
            Category: 'Shoe',
            Cost: '$123',
            Extra: 'No',
            Priority: 'Low',
            Edit: 'Edit',
        },
        {
            attribute: 'Light Airpod',
            Producer: 'Apple',
            ID: 'PD0004',
            Category: 'Air Pod',
            Cost: '$432',
            Extra: 'Yes',
            Priority: 'High',
            Edit: 'Edit',
        },
    ]
    const menuItems = [
        { label: 'Basic Information', icon: APP_ICON.i_avatar_outline, details: <BasicInfo /> },
        { label: 'Password', icon: APP_ICON.i_lock, details: <Password /> },
        { label: 'Preferences', icon: APP_ICON.i_gear, details: <Preferences /> },
        { label: 'Recent Devices', icon: APP_ICON.i_device, details: <Device /> },
        { label: 'Notifications', icon: APP_ICON.i_bell, details: <Notification /> },
        { label: 'Two-step verification', icon: APP_ICON.i_finger_print, details: <Verification /> },
        { label: 'Connected accounts', icon: APP_ICON.i_chain, details: <ConnectedAcc /> },
        { label: 'Social Account', icon: APP_ICON.i_instagram_outline, details: <SocialAcc /> },
        { label: 'Billing', icon: APP_ICON.i_dollar, details: <Billing /> },
        { label: 'Statement', icon: APP_ICON.i_paper, details: <Statement /> },
        { label: 'Referrals', icon: APP_ICON.i_diamond, details: <Referrals /> },
        { label: 'API Keys', icon: APP_ICON.i_key, details: <APIKeys /> },
        { label: 'Delete account', icon: APP_ICON.i_trash_outline, details: <DeleteAcc /> },
    ]
    return (
        <Box className="component_page">
            ComponentPage
            <p>Viết các Components chung tại đây</p>
            <div>
                <Button onClick={() => navigate(APP_ROUTER.ATTRIBUTE)}>To Attribute Page</Button>
            </div>
            <h1 className="my-3 font-[800]">Avatar</h1>
            <Box className="flex gap-5">
                <Box>
                    <h1 className="mt-3 font-bold">Avatar sm</h1>
                    <AvatarGroup avatars={avatars} maxVisible={2} className="mt-3" size="sm" />
                </Box>
                <Box>
                    <h1 className="mt-3 font-bold">Avatar md</h1>
                    <AvatarGroup avatars={avatars} maxVisible={3} className="mt-3" size="md" upload badge={true} />
                </Box>
                <Box>
                    <h1 className="mt-3 font-bold">Avatar lg</h1>
                    <AvatarGroup avatars={avatars} maxVisible={4} className="mt-3" size="lg" upload />
                </Box>
            </Box>
            <h1 className="my-3 font-[800]">Button</h1>
            <Box>
                <Button className="m-1" size="lg" color="primary">
                    btn-primary-lg
                </Button>
                <Button className="m-1" size="md" color="primary">
                    btn-primary-md
                </Button>
                <Button className="m-1" size="sm" variant="outline" color="primary">
                    btn-outline-primary
                </Button>
                <Button className="m-1 font-bold" color="red" size="sm">
                    btn-red
                </Button>
                <Button disableRipple className="m-1" color="red" variant="outline" size="sm">
                    btn-outline-red
                </Button>
                <Button className="m-1" size="sm">
                    btn-basic-sm
                </Button>
                <Button className="m-1" color="grey" size="sm">
                    btn-grey
                </Button>
                <Button className="m-1 p-0 font-bold" color="grey" variant="outline" size="sm">
                    btn-outline-grey
                </Button>
                <Button className="m-1 p-1 text-xs" variant="none" color="priamry">
                    btn-none
                    <Icon className="ml-1 " icon={APP_ICON.i_penModal} />
                </Button>
                <h1 className="my-3 font-[800]">Button icon</h1>
                <Button className="m-1" size="lg" color="grey" icon>
                    <Icon icon={APP_ICON.i_penModal} />
                </Button>
                <Button className="m-1" size="md" variant="outline" color="grey" icon>
                    <Icon icon={APP_ICON.i_cake} />
                </Button>
                <Button className="m-1" color="grey" icon>
                    <Icon icon={APP_ICON.i_ecommerce} />
                </Button>
                <Button className="m-1" color="primary" icon>
                    <Icon icon={APP_ICON.i_arrow_down_box_1} />
                </Button>
                <Button className="m-1" color="grey" icon variant="outline">
                    <Icon icon={APP_ICON.i_invoice} />
                </Button>
            </Box>
            <h1 className="my-3 font-[800]">Menu</h1>
            <Menu className="ml-5" menuItems={menuItems} />
            <h1 className="my-3 font-[800]">Status Bar</h1>
            <Box>
                <StatusBar
                    className="bg-orange-100"
                    variant="blue"
                    handleCompleteClick={handleCompleteClick}
                    handleResetClick={handleResetClick}
                    status={status}
                ></StatusBar>
                <Box> {status} %</Box>
            </Box>
            <Button onClick={handleCompleteClick}>Complete</Button>
            <Button onClick={handleResetClick}>Rest</Button>
            <h1 className="mt-3 font-bold">PopupUser</h1>
            <Box>{/* <PopupUser user={user} /> */}</Box>
            <h1 className="mt-3 font-bold">PopupServ</h1>
            <Box>
                <PopupServ avatars={avatars} names={names} />
            </Box>
            <h1 className="mt-3 font-bold">Accordin</h1>
            <h1 className="mt-3 font-bold">Snackbar</h1>
            <h1 className="mt-3 font-bold">Modal</h1>
            <Box className="flex flex-wrap gap-3">
                <Button variant="contained" onClick={() => handleOpenModal('xs')}>
                    Modal xs
                </Button>
                <Button variant="contained" onClick={() => handleOpenModal('sm')}>
                    Modal sm
                </Button>
                <Button variant="contained" onClick={() => handleOpenModal('md')}>
                    Modal md
                </Button>
                <Button variant="contained" onClick={() => handleOpenModal('lg')}>
                    Modal lg
                </Button>
                <Button variant="contained" onClick={() => handleOpenModal('xl')}>
                    Modal xl
                </Button>
            </Box>
            <h1 className="my-3 font-[800]">Menu</h1>
            <Menu className="ml-5" menuItems={menuItems} />
            <h1 className="mt-3 font-bold">Select language</h1>
            <h1>{t('content.text')}</h1>
            <Box>
                <PopupLang list={listLanguage} handleChangeLanguage={handleChangeLanguage} />
            </Box>
            <Typography className="mt-3 font-bold">Badge</Typography>
            <Box>
                <Avatar
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                    size="sm"
                    badge={{ status: 'online', color: 'green', position: 'top-left', animation: 'blink-badge' }}
                />
                <Avatar
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                    size="md"
                    badge={{ status: 'offline', position: 'top-right' }}
                />
                <Avatar
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                    size="lg"
                    badge={{ status: 'private', position: 'bottom-right' }}
                />
            </Box>
            <Box className="my-3">
                Trang hiện tại: {page}
                <Table
                    hasCheckbox
                    hasPanigation
                    label="Popular attributes"
                    className=" w-full"
                    columns={columns}
                    rows={rows}
                    totalPage={3}
                    pageSize={3}
                    currentPage={page}
                    handleChangePanigation={handleChangePanigation}
                />
            </Box>
            <Box>
                <Link to={APP_ROUTER.LOGIN}>
                    <button>Go to Login Page</button>
                </Link>
            </Box>
            <Typography className="mt-3 font-bold">U pload image</Typography>
            <Box>
                <InputUpload listUpload={warehouseItem} />
            </Box>
            <h1 className="mt-3 font-bold">Dropdown</h1>
            <Box>
                <Dropdown list={listDrop} label="labelDropdown" onChange={(e) => setValueDrop(e.target.value)} />
                <h1>value:{valueDrop} </h1>
            </Box>
            <h1 className="mt-3 font-bold">Texfield</h1>
            <Box>
                <Box className="flex w-full gap-[2rem]">
                    <Textfield className="my-3 w-1/2" label="Username" type="text" />
                    <Textfield className="my-3 w-1/2" label="Password" type="password" />
                </Box>
            </Box>
            <Modal fullwidth={false} maxWidth={openModal.size} open={openModal.isOpen} onClose={handleClose}>
                <Box>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas
                    eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus
                    magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras
                    justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                    vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis
                    consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                    Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel
                    scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at
                    eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
                    purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                    risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
                    nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                    facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus
                    sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
                    porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                    facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus
                    sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
                    porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                    facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus
                    sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
                    porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                    facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus
                    sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
                    porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                    facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus
                    sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
                    porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                    facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus
                    sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
                    porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                    facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus
                    sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
                    porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                    facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus
                    sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
                    porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                    facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus
                    sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
                    porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                    facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus
                    sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
                    porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                    facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus
                    sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
                    porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                    facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus
                    sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
                    porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                    facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus
                    sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
                    porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                    facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus
                    sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
                    porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                    facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus
                    sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
                    porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                    facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus
                    sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
                    porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                    facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus
                    sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
                    porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                    facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus
                    sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
                    porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                    facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus
                    sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
                    porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                    facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus
                    sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
                    porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                    facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus
                    sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
                    porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                    facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus
                    sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
                    porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                    facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et.{' '}
                </Box>
            </Modal>
            <Typography>Accordion</Typography>
            <Typography>Tabs</Typography>
            <Tabs tabs={tabs} className="ml-5" />
            <Typography>Calendar</Typography>
            <Calendar showDaysOutsideCurrentMonth={true} />
        </Box>
    )
}

export default ComponentPage
