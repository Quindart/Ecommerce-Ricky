import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { useState } from 'react'
import { Icon } from '@iconify/react'
import { APP_ICON, APP_ROUTER } from '../../../../Utils/Constants'
import { CustomListMenu } from './style'
import { useNavigate } from 'react-router-dom'
function ListMenu(props) {
    const { openNav, isHovered } = props
    const [openAttribute, setOpenAttribute] = useState(false)
    const [openProduct, setOpenProduct] = useState(false)
    const [openCategory, setOpenCategory] = useState(false)
    const [openOrder, setOpenOrder] = useState(false)
    const [openUser, setOpenUser] = useState(false)
    const navigate = useNavigate()
    const checkDetailTitle = isHovered === true || openNav === true
    return (
        <CustomListMenu component="nav" aria-labelledby="nested-list-subheader">
            <ListItemButton onClick={() => navigate(APP_ROUTER.HOME)}>
                <ListItemIcon>
                    <Icon width={20} icon={APP_ICON.i_company} />
                </ListItemIcon>
                {checkDetailTitle && <ListItemText primary="Dashboard" />}
            </ListItemButton>

            {checkDetailTitle && (
                <Collapse in={openAttribute} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton
                            onClick={() => {
                                navigate(APP_ROUTER.ADD_ATTRIBUTE)
                            }}
                            sx={{ pl: 4 }}
                        >
                            <ListItemIcon>
                                <Icon width={20} icon="system-uicons:box-add" />
                            </ListItemIcon>
                            {checkDetailTitle && <ListItemText primary="Add attribute" />}
                        </ListItemButton>
                        <ListItemButton
                            onClick={() => {
                                navigate(APP_ROUTER.ATTRIBUTE_LIST)
                            }}
                            sx={{ pl: 4 }}
                        >
                            <ListItemIcon>
                                <Icon width={20} icon="quill:inbox-list" />
                            </ListItemIcon>
                            <ListItemText primary="List attribute" />
                        </ListItemButton>
                    </List>
                </Collapse>
            )}
            {/** Product  */}

            <ListItemButton
                onClick={() => {
                    navigate(APP_ROUTER.PRODUCT_LIST)
                    setOpenProduct(!openProduct)
                }}
            >
                <ListItemIcon>
                    <Icon width={20} icon={APP_ICON.product} />
                </ListItemIcon>
                {checkDetailTitle && <ListItemText primary="Manager Product" />}
                {checkDetailTitle && (
                    <div>{openProduct ? <ExpandMore /> : <Icon icon="mingcute:right-line" width={23} />}</div>
                )}
            </ListItemButton>

            {checkDetailTitle && (
                <Collapse in={openProduct} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton
                            onClick={() => {
                                navigate(APP_ROUTER.ADD_PRODUCT)
                            }}
                            sx={{ pl: 4 }}
                        >
                            <ListItemIcon>
                                <Icon width={20} icon="system-uicons:box-add" />
                            </ListItemIcon>
                            {checkDetailTitle && <ListItemText primary="Add product" />}
                        </ListItemButton>
                        <ListItemButton
                            onClick={() => {
                                navigate(APP_ROUTER.PRODUCT_LIST)
                            }}
                            sx={{ pl: 4 }}
                        >
                            <ListItemIcon>
                                <Icon width={20} icon="fluent-mdl2:product-variant" />
                            </ListItemIcon>
                            <ListItemText primary="List product" />
                        </ListItemButton>
                        <ListItemButton
                            onClick={() => {
                                navigate(APP_ROUTER.ATTRIBUTE_LIST)
                            }}
                            sx={{ pl: 4 }}
                        >
                            <ListItemIcon>
                                <Icon width={20} icon="ant-design:product-outlined" />
                            </ListItemIcon>
                            <ListItemText primary="List attribute" />
                        </ListItemButton>
                    </List>
                </Collapse>
            )}
            {/** Category */}
            <ListItemButton
                onClick={() => {
                    navigate(APP_ROUTER.CATEGORY_LIST)
                    setOpenCategory(!openCategory)
                }}
            >
                <ListItemIcon>
                    <Icon width={20} icon="maki:warehouse" />
                </ListItemIcon>
                {checkDetailTitle && <ListItemText primary="Manager Category" />}
                {checkDetailTitle && (
                    <div>{openCategory ? <ExpandMore /> : <Icon icon="mingcute:right-line" width={23} />}</div>
                )}
            </ListItemButton>

            {checkDetailTitle && (
                <Collapse in={openCategory} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton
                            onClick={() => {
                                navigate(APP_ROUTER.CATEGORY_ADD)
                            }}
                            sx={{ pl: 4 }}
                        >
                            <ListItemIcon>
                                <Icon width={20} icon="system-uicons:box-add" />
                            </ListItemIcon>
                            {checkDetailTitle && <ListItemText primary="Add category" />}
                        </ListItemButton>
                        <ListItemButton
                            onClick={() => {
                                navigate(APP_ROUTER.CATEGORY_LIST)
                            }}
                            sx={{ pl: 4 }}
                        >
                            <ListItemIcon>
                                <Icon width={20} icon="quill:inbox-list" />
                            </ListItemIcon>
                            <ListItemText primary="List category" />
                        </ListItemButton>
                    </List>
                </Collapse>
            )}

            {/** Order  */}

            <ListItemButton
                onClick={() => {
                    navigate(APP_ROUTER.ORDER_LIST)
                }}
            >
                <ListItemIcon>
                    <Icon width={20} icon="material-symbols-light:order-approve-outline" />
                </ListItemIcon>
                {checkDetailTitle && <ListItemText primary="Manager Order" />}
                {checkDetailTitle && (
                    <div>{openOrder ? <ExpandMore /> : <Icon icon="mingcute:right-line" width={23} />}</div>
                )}
            </ListItemButton>

            {checkDetailTitle && (
                <Collapse id="order_item" in={openOrder} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton
                            onClick={() => {
                                navigate(APP_ROUTER.ADD_PRODUCT)
                            }}
                            sx={{ pl: 4 }}
                        >
                            <ListItemIcon>
                                <Icon width={20} icon="system-uicons:create" />
                            </ListItemIcon>
                            <ListItemText primary="Add Order" />
                        </ListItemButton>
                    </List>

                    <List component="div" disablePadding>
                        <ListItemButton
                            sx={{ pl: 4 }}
                            onClick={() => {
                                navigate(APP_ROUTER.ORDER_LIST)
                            }}
                        >
                            <ListItemIcon>
                                <Icon icon="clarity:list-line" width={20} />
                            </ListItemIcon>
                            <ListItemText primary="List Order" />
                        </ListItemButton>
                    </List>
                </Collapse>
            )}
            {/** User */}
            <ListItemButton
                onClick={() => {
                    navigate(APP_ROUTER.USER_LIST)
                    setOpenUser(!openUser)
                }}
            >
                <ListItemIcon>
                    <Icon width={20} icon="clarity:user-line" />
                </ListItemIcon>
                {checkDetailTitle && <ListItemText primary="Manager User" />}
                {checkDetailTitle && (
                    <div> {openUser ? <ExpandMore /> : <Icon icon="mingcute:right-line" width={23} />}</div>
                )}
            </ListItemButton>

            {checkDetailTitle && (
                <Collapse in={openUser} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton
                            onClick={() => {
                                navigate(APP_ROUTER.USER_ADD)
                            }}
                            sx={{ pl: 4 }}
                        >
                            <ListItemIcon>
                                <Icon width={20} icon="streamline:user-add-plus" />
                            </ListItemIcon>
                            <ListItemText primary="Add User" />
                        </ListItemButton>
                    </List>

                    <List component="div" disablePadding>
                        <ListItemButton
                            onClick={() => {
                                navigate(APP_ROUTER.USER_LIST)
                            }}
                            sx={{ pl: 4 }}
                        >
                            <ListItemIcon>
                                <Icon width={20} icon="ph:user-list" />
                            </ListItemIcon>
                            <ListItemText primary="List User" />
                        </ListItemButton>
                    </List>
                </Collapse>
            )}
        </CustomListMenu>
    )
}

export default ListMenu
