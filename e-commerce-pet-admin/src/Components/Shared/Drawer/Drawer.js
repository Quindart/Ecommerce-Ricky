import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import { CustomDrawer } from './style'
import { Typography } from '@mui/material'
import logo from '../../../assets/img/logo.svg'
import Button from '../../ui/Button/Button'
import { Icon } from '@iconify/react'
import { APP_ICON } from '../../../Utils/Constants'
import ListMenu from './ListMenu/ListMenu'

export default function TemporaryDrawer(props) {
    const { className, handleOpenNav, openNav } = props
    const hoverRef = React.useRef(null)
    const [isHovered, setIsHovered] = React.useState(false)
    const handleMouseEnter = () => {
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
    }
    return (
        <CustomDrawer className={`${className}`}>
            <Box
                ref={hoverRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`drawer__menu h-full text-center ${openNav ? 'drawer__menu--open' : 'drawer__menu--hover'}`}
            >
                <Box className="flex h-[70px] items-center justify-between gap-2 pb-[8px] pl-[32px] pr-[16px] pt-[31px] text-[1.6rem] font-[800]">
                    <Box className="group__title flex gap-2">
                        <img src={logo} width={20} alt="" />
                        <Typography
                            className="title text-[24px] font-[700] leading-normal drop-shadow-md"
                            sx={{ color: 'rgb(18, 31, 67)' }}
                        >
                            UKO
                        </Typography>
                    </Box>
                    <Button
                        onClick={handleOpenNav}
                        className="btn__openNav m-1 "
                        size="lg"
                        variant="outline"
                        color="grey"
                        icon
                    >
                        <Icon icon="mingcute:arow-to-left-line" width={24} />
                    </Button>
                </Box>
                <Box className="p-[12px]">
                    <ListMenu handleOpenNav={handleOpenNav} openNav={openNav} isHovered={isHovered} />
                </Box>
            </Box>
        </CustomDrawer>
    )
}
