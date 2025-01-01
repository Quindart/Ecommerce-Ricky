import React from 'react'
import { Box } from '@mui/system'
import { Card } from './style'
import { BadgeWrapper } from '../../../ui/Badge/Badge'
import Avatar from '../../../ui/Avatar/Avatar'
import Background from '../../../../assets/img/user-info-background.png'
import { CircularProgress, Typography } from '@mui/material'
import { useCurrentUser } from '../../../../hook/api/auth'
import Progress from '../../../ui/Progress/Progress'

function Profile() {
    const user = useCurrentUser()
    if (!user) {
        return (
            <>
                <Progress />
            </>
        )
    }

    return (
        <Box className="relative flex flex-col items-center " sx={Card}>
            <Box className="-z-1 absolute left-0 top-0 h-[158px] w-full rounded">
                <img src={Background} alt="Background" className=" h-full w-full rounded-t-[10px] object-cover" />
            </Box>
            {user ? (
                <Box className="mt-[55px] flex flex-col items-center p-[24px]">
                    <BadgeWrapper
                        variant="dot"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        shape="round"
                        type="dark_green"
                        border={true}
                        size="lg"
                    >
                        <Avatar  src={user?.avatar?.url} size="lg" alt="User Avatar" border="false" />
                    </BadgeWrapper>
                    <Typography className="text-[16px] font-semibold">
                        {`${user?.first_name} ${user?.last_name}`}
                    </Typography>
                    <Box className="mx-auto  flex max-w-[340px] flex-row flex-wrap items-center justify-between space-x-4 pt-[8px]">
                        <Typography className="text-xs font-[500] text-[#5f748d]">Email: {user?.email}</Typography>
                        <Typography className="text-xs font-[500] text-[#5f748d]">Role: {user?.role}</Typography>
                    </Box>
                </Box>
            ) : (
                <CircularProgress />
            )}
        </Box>
    )
}

export default Profile
