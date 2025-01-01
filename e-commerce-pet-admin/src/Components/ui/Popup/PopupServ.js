import { Icon } from '@iconify/react'

import { useRef, useLayoutEffect } from 'react'
import Button from '../Button/Button'
import { APP_ICON } from '../../../Utils/Constants'
import clsx from 'clsx'
import { Box } from '@mui/material'
import useClickOutside from '../../../hook/ui/usePopup'

const PopupServ = (props) => {
    const { className } = props
    const { handleActive, menuRef, active, handleClose } = useClickOutside()

    const classes = clsx(
        {
            'animate-showOn-popup': !active,
        },
        ' block right-[-480%] absolute z-50 w-96 rounded bg-white pb-1 pt-4 align-top shadow-lg animate-showDown-popup ',
    )

    return (
        <Box className={` relative inline-block ${className}`} ref={menuRef}>
            <Button
                color="grey"
                icon
                size="lg"
                variant="outline"
                onClick={handleActive}
                className="flex items-center rounded-full"
            >
                <Icon icon={APP_ICON.i_menu} onClick={handleActive} />
            </Button>

            {active && (
                <Box className={classes}>
                    <h2 className="border-b border-gray-200 px-5 pb-4 text-lg font-bold">Web apps & services</h2>
                    <Box className="flex h-auto flex-col space-y-3">
                        {['Slack', 'Github', 'Stack Overflow'].map((service, index) => (
                            <Box key={index} className="flex cursor-pointer items-center p-2 hover:bg-blue-200">
                                <Box className="mr-5 h-8 w-8 rounded-full bg-gray-200"></Box>
                                <Box>
                                    <h3 className="font-semibold">{service}</h3>
                                    <p className="text-sm text-gray-500">Email collaboration software</p>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
            )}
        </Box>
    )
}

export default PopupServ
