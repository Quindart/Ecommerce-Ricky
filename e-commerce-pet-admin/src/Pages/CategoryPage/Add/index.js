import React, { Fragment, useState, useLayoutEffect, useEffect } from 'react'
import Title from '../../../Components/ui/Title/Title'
import { Box, CircularProgress } from '@mui/material'
import Button from '../../../Components/ui/Button/Button'
import Modal from '../../../Components/ui/Modal/Modal'
import ModalAdd from '../Modal/Add'
import AccordionList from '../../../Components/ui/AccordionList/AccordionList'
import { apiGetTreeCategory } from '../../../services/api-category'

function CategoryAddPage() {
    const [isOpenModalAdd, setIsOpenModalAdd] = useState(false)
    const [pathCurrent, setPathCurrent] = useState('')
    const [loading, setLoading] = useState(false)
    const [tree, setTree] = useState([])

    useLayoutEffect(() => {
        setLoading(true)
        apiGetTreeCategory().then((res) => {
            if (res.status === 200) {
                setTree(res.tree)
                setLoading(false)
            }
        })
    }, [])

    const handleOpenModalAdd = (path) => {
        setIsOpenModalAdd(true)
        setPathCurrent(path)
    }

    const handleCloseModalAdd = () => {
        setIsOpenModalAdd(false)
    }

    return (
        <Fragment>
            <Box>
                <Box className="flex justify-between">
                    <Title icon="system-uicons:box-add">Add new category</Title>
                    <Button onClick={() => handleOpenModalAdd(',index,')} color="red">
                        New root category
                    </Button>
                </Box>
                <Box>
                    {loading ? (
                        <Box display="flex" alignItems="center" justifyContent="center" height={500}>
                            <CircularProgress />
                        </Box>
                    ) : (
                        <AccordionList
                            list={tree}
                            handleOpenModalAdd={handleOpenModalAdd}
                            handleCloseModalAdd={handleCloseModalAdd}
                        />
                    )}
                </Box>
            </Box>
            <Modal size="sm" open={isOpenModalAdd} onClose={handleCloseModalAdd}>
                <ModalAdd path={pathCurrent} handleCloseModalAdd={handleCloseModalAdd} />
            </Modal>
        </Fragment>
    )
}

export default CategoryAddPage
