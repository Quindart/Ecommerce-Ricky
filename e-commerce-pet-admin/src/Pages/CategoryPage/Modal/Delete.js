import { Icon } from '@iconify/react'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Button from '../../../Components/ui/Button/Button'
import { useSnackbar } from 'notistack'
import useCategory from '../../../hook/api/category'
import { apiDeleteCategory } from '../../../services/api-category'

function ModalDelete(props) {
    const { handleCloseDeleteModal, category_id } = props
    const { enqueueSnackbar } = useSnackbar()
    const { handleGetAllCategoryByParams, currentPage, limit } = useCategory()

    const handleSubmitDelete = async () => {
        const data = await apiDeleteCategory(category_id)

        if (data.success && data.status === 200) {
            enqueueSnackbar(data.message, { variant: 'success' })
            handleGetAllCategoryByParams(limit, currentPage)
        } else {
            enqueueSnackbar(data.message, { variant: 'error' })
        }
    }
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
            <Typography marginTop={2}>Are you delete this category ?</Typography>
            <Box width="100%" display="flex" gap={3} marginTop={5}>
                <Button onClick={handleCloseDeleteModal} sx={{ width: '50%' }} color="primary" variant="outline">
                    <Icon width={20} style={{ marginRight: 4 }} icon="mdi:cancel-outline" />
                    Cancel
                </Button>
                <Button onClick={handleSubmitDelete} type="submit" sx={{ width: '50%' }} color="red">
                    <Icon width={20} style={{ marginRight: 4 }} icon="material-symbols:auto-delete-outline" />
                    Delete
                </Button>
            </Box>
        </Box>
    )
}

export default ModalDelete
