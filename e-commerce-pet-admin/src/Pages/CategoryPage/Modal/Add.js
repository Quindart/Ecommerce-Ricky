import { Form, Formik } from 'formik'
import React, { Fragment, useState } from 'react'
import Textfield from '../../../Components/ui/Textfield/Textfield'
import { Box, CircularProgress, Typography } from '@mui/material'
import Button from '../../../Components/ui/Button/Button'
import * as Yup from 'yup'
import { apiCreateCategory } from '../../../services/api-category'
import { useSnackbar } from 'notistack'
import { Icon } from '@iconify/react'

export const CategorySchema = Yup.object().shape({
    name: Yup.string().min(2, 'Name not found').required('Name is required'),
    total: Yup.number('Total must be number type').required('Total is required'),
    description: Yup.string().min(2, 'Description not found').required('Name is required'),
})
function ModalAdd(props) {
    const { handleCloseModalAdd, path } = props
    const { enqueueSnackbar } = useSnackbar()
    const [loading, setLoading] = useState(false)

    const handleSubmitAddForm = async (values, actions) => {
        alert(values)
        setLoading(true)
        apiCreateCategory(values)
            .then((res) => {
                if (res.success && res.status === 201) {
                    enqueueSnackbar(res.message, { variant: 'success' })
                    setLoading(false)
                }
            })
            .catch((err) => {
                setLoading(false)
                enqueueSnackbar(err.message, { variant: 'error' })
            })
    }

    return (
        <Fragment>
            {!loading ? (
                <Box padding={2}>
                    <Typography
                        style={{ fontWeight: 'bold', fontSize: '20px', color: '#374151 ', marginBottom: '15px' }}
                        variant="h7"
                    >
                        New category
                    </Typography>
                    <Formik
                        initialValues={{
                            name: '',
                            total: '',
                            description: '',
                            path: `${path}`,
                        }}
                        validationSchema={CategorySchema}
                        onSubmit={handleSubmitAddForm}
                    >
                        {({ handleChange, handleBlur, values, errors, touched }) => (
                            <Form style={{ marginTop: '15px' }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                                    <Box sx={{ display: 'flex', gap: 3, width: '100%' }}>
                                        <Box flex={1} className="h-[20rem]">
                                            <Textfield
                                                label="Name"
                                                name="name"
                                                id="name"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.name}
                                                error={errors.name && touched.name}
                                                helperText={errors.name}
                                            />
                                        </Box>
                                        <Box flex={1}>
                                            <Textfield
                                                label="Code"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                defaultValue={'Auto code'}
                                                disabled
                                            />
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Textfield
                                            label="Total"
                                            name="total"
                                            id="total"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.total}
                                            error={errors.total && touched.total}
                                            helperText={errors.total}
                                        />
                                    </Box>
                                    <Box>
                                        <Textfield
                                            label="Description"
                                            name="description"
                                            id="description"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.description}
                                            error={errors.description && touched.description}
                                            helperText={errors.description}
                                        />
                                    </Box>
                                    <Box>
                                        <Textfield
                                            label="Category path"
                                            name="path"
                                            id="path"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            defaultValue={path}
                                            disabled
                                        />
                                    </Box>
                                    <Box sx={{ display: 'flex', gap: 3 }}>
                                        <Button
                                            onClick={handleCloseModalAdd}
                                            sx={{ width: '50%' }}
                                            color="primary"
                                            variant="outline"
                                        >
                                            <Icon width={20} style={{ marginRight: 4 }} icon="mdi:cancel-outline" />
                                            Cancel
                                        </Button>
                                        <Button type="submit" sx={{ width: '50%' }} color="primary">
                                            <Icon width={20} style={{ marginRight: 4 }} icon="bx:save" />
                                            Save
                                        </Button>
                                    </Box>
                                </Box>
                            </Form>
                        )}
                    </Formik>
                </Box>
            ) : (
                <Box display="flex" alignItems="center" justifyContent="center" height={500}>
                    <CircularProgress />
                </Box>
            )}
        </Fragment>
    )
}

export default ModalAdd
