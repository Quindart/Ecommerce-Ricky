import { Box, Typography } from '@mui/material'
import React from 'react'
import Button from '../../../Components/ui/Button/Button'
import { Icon } from '@iconify/react'

function Delete(props) {
    const { handleCloseDeleteModal, id } = props
    return (
        <Box
            height={300}
            width="100%"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            padding="0 15px"
        >
            <Box borderRadius="50%" padding={3} sx={{ background: 'rgba(255,49,111,0.2)' }}>
                <Icon width={70} height={70} color="#ff316f" icon="icon-park-outline:delete-five" />
            </Box>
            <Typography marginTop={2}>Are you delete this user ?</Typography>
            <Box width="100%" display="flex" gap={3} marginTop={5}>
                <Button onClick={handleCloseDeleteModal} sx={{ width: '50%' }} color="primary" variant="outline">
                    <Icon width={20} style={{ marginRight: 4 }} icon="mdi:cancel-outline" />
                    Cancel
                </Button>
                <Button type="submit" sx={{ width: '50%' }} color="red">
                    <Icon width={20} style={{ marginRight: 4 }} icon="material-symbols:auto-delete-outline" />
                    Delete
                </Button>
            </Box>
        </Box>
    )
}

export default Delete
