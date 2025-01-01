import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import { Box, Typography } from '@mui/material'
import Button from '../../../Components/ui/Button/Button.js'
import { Card } from '../../ProductPage/styles.js'
import Textfield from '../../../Components/ui/Textfield/Textfield.js'
import InputUpload from '../../../Components/ui/InputUpload/InputUpload.js'
import { APP_ICON, APP_ROUTER, COLOR } from '../../../Utils/Constants.js'
import { useNavigate } from 'react-router-dom'
import Dropdown from '../../../Components/ui/Dropdown/Dropdown.js'
import Modal from '../../../Components/ui/Modal/Modal.js'
import { Icon } from '@iconify/react'
import { Form, Formik } from 'formik'
import { useSnackbar } from 'notistack'
import * as Yup from 'yup'
import client from '../../../services/api-context.js'
import Autocomplete from '../../../Components/ui/Autocomplete/Autocomplete.js'
import { AttributeList } from '../List/index.js'

const AttributeAddPage = () => {
    const navigate = useNavigate()
    const { enqueueSnackbar } = useSnackbar()
    const [value, setValue] = useState([
        { title: 'Select attribute value', value: '1' },
        { title: 'Blue', value: '2' },
    ])
    const AttributeSchema = Yup.object().shape({
        name: Yup.string().min(2, 'Name not found').required('Name is required'),
        avaiable: Yup.number('Avaiable must be number type').required('Avaiable is required'),
        value: Yup.string().min(2, 'Value not found').required('Value is required'),
    })
    const handleSubmitEditForm = async (values, actions) => {
     
        client
            .post(`/attributeProducts`, values)
            .then((res) => {
                if (res.success && res.status === 201) {
                    enqueueSnackbar(res.message, { variant: 'success' })
                }
            })
            .catch((err) => {
                enqueueSnackbar(err, { variant: 'error' })
            })
    }
    const handleClearForm = async (values, actions) => {
        // client
        //     .put(`/attributeProducts/${attribute_id}`, values)
        //     .then((res) => {
        //         if (res.success && res.status === 201) {
        //             enqueueSnackbar(res.message, { variant: 'success' })
        //             fetchAttributes()
        //         }
        //     })
        //     .catch((err) => {
        //         enqueueSnackbar(err, { variant: 'error' })
        //     })
    }
    return (
        <Formik
            initialValues={{
                name: ``,
                avaiable: ``,
                value: ``,
            }}
            validationSchema={AttributeSchema}
            onSubmit={handleSubmitEditForm}
        >
            {({ handleBlur, handleChange, values, errors, touched }) => (
                <Form style={{ display: 'flex', gap: 2, flexDirection: 'column', margin: '15px' }}>
                    <Typography
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            fontSize: '1.25rem',
                            fontWeight: 'bold',
                            color: COLOR.black,
                        }}
                    >
                        Add Attribute
                    </Typography>
                    <Box
                        style={{
                            margin: '1.75rem',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Box
                            style={{
                                marginTop: '1.75rem',
                                marginBottom: '1.75rem',
                                display: 'flex',
                                alignItems: 'start',
                                gap: '1.75rem',
                                flex: 1, // This ensures that the Box takes up equal space on both sides
                            }}
                        >
                            <Box
                                style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    alignItems: 'center',
                                    gap: '1.25rem',
                                }}
                            >
                                <Box style={{ width: 'calc(100% - 1.25rem)' }}>
                                    <Autocomplete></Autocomplete>
                                </Box>
                                <Box style={{ width: 'calc(100% - 1.25rem)' }}>
                                    <Textfield
                                        label="Value"
                                        name="value"
                                        id="value"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.value}
                                        error={touched.value && errors.value}
                                        helperText={errors.value}
                                    />
                                </Box>{' '}
                                <Button type="submit" size="sm" color="green">
                                    <Icon className="mx-[2px]" width={22} icon={APP_ICON.i_plus} />
                                    Add Attribute
                                </Button>
                                <Button type="reset" onClick={() => handleClearForm()} size="sm" color="red">
                                    <Icon className="mx-1" width={22} icon="ant-design:clear-outlined" />
                                    Clear Form
                                </Button>
                            </Box>
                        </Box>

                        <Box
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                alignItems: 'center',
                                gap: '1.25rem',
                                width: 'calc(50% - 1.25rem)',
                                flex: 1,
                            }}
                        >
                            <AttributeList></AttributeList>
                        </Box>
                    </Box>
                </Form>
            )}
        </Formik>
    )
}

export default AttributeAddPage
