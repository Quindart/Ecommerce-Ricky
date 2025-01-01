import { Fragment, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'
import Header from '../../Components/Shared/Header/Header'
import TemporaryDrawer from '../../Components/Shared/Drawer/Drawer'
import { useCurrentUser } from '../../hook/api/auth'
import Progress from '../../Components/ui/Progress/Progress'

function MainLayout() {
    const [openNav, setOpenNav] = useState(false)
    const handleOpenNav = () => {
        setOpenNav(!openNav)
    }
    const user = useCurrentUser()
    if (!user) {
        return (
            <>
                <Progress />
            </>
        )
    }

    return (
        <Fragment>
            <Box className="flex bg-[#f3f4f9] " sx={{ maxWidth: '100vw', width: '100%' }}>
                <TemporaryDrawer openNav={openNav} handleOpenNav={handleOpenNav} />
                <Box
                    className={`min-h-[100vh] px-[2rem] `}
                    sx={{
                        width: '100%',
                        maxWidth: `${openNav ? 'calc(100% - 280px)' : 'calc(100% - 86px)'}`,
                    }}
                >
                    <Header user={user} />
                    <Outlet />
                </Box>
            </Box>
        </Fragment>
    )
}

export default MainLayout
