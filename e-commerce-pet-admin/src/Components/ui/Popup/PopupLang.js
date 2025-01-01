import Button from '../Button/Button'
import useClickOutside from '../../../hook/ui/usePopup'
import { Icon } from '@iconify/react'
import React, { useReducer } from 'react'
import { Box } from '@mui/material'

const flagReducer = (state, action) => {
    switch (action.type) {
        case 'VI':
            return {
                ...!state.isChange,
                state,
                flag: 'emojione:flag-for-vietnam',
            }
        case 'EN':
            return {
                ...state,
                flag: 'emojione:flag-for-us-outlying-islands',
            }
        default:
            throw new Error()
    }
}
const PopupLang = (props) => {
    const { list, handleChangeLanguage } = props
    const { handleActive, menuRef, classes, active, handleClose } = useClickOutside()

    const [state, dispatch] = useReducer(flagReducer, { flag: 'emojione:flag-for-vietnam' })
    return (
        <Box ref={menuRef}>
            <Button
                color="grey"
                icon
                size="lg"
                variant="outline"
                onClick={handleActive}
                className="flex items-center rounded-full"
            >
                <Icon icon={state.flag} onClick={handleActive} width={30} />
            </Button>
            {active && (
                <Box className={classes}>
                    <Box className="flex h-auto flex-col space-y-3">
                        {list.map((lang, index) => (
                            <Box key={index} className="flex cursor-pointer items-center p-2 hover:bg-blue-200">
                                <button
                                    onClick={() => {
                                        handleChangeLanguage(lang.value)
                                        dispatch({ type: lang.value.toUpperCase() })
                                        handleClose()
                                    }}
                                >
                                    {lang.title}
                                </button>
                            </Box>
                        ))}
                    </Box>
                </Box>
            )}
        </Box>
    )
}

export default PopupLang
