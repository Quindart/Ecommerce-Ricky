import React, { Fragment, useEffect, useState } from 'react'
import { Form, Formik } from 'formik'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import { Box, CircularProgress, Typography } from '@mui/material'
import Button from '../../../Components/ui/Button/Button.js'
import { Card } from './styles.js'
import Textfield from '../../../Components/ui/Textfield/Textfield.js'
import InputUpload from '../../../Components/ui/InputUpload/InputUpload.js'
import { APP_ICON, APP_ROUTER } from '../../../Utils/Constants.js'
import { useNavigate } from 'react-router-dom'
import Dropdown from '../../../Components/ui/Dropdown/Dropdown.js'
import Modal from '../../../Components/ui/Modal/Modal.js'
import { Icon } from '@iconify/react'
import Title from '../../../Components/ui/Title/Title.js'
import { COLOR } from '../../../Utils/Constants.js'
import { useSnackbar } from 'notistack'
import client from '../../../services/api-context.js'
import * as Yup from 'yup'

const Edit = (props) => {
    // const [attributeList, setAttributeList] = useState([
    //     { title: 'Select Attribute', value: 'placeholder' },
    //     { title: 'Create new Attribute', value: 'create_new_attribute' },
    // ])
    // const [providerList, setProviderList] = useState([
    //     { title: 'Select Provider', value: 'placeholder' },
    //     { title: 'Create new Provider', value: 'create_new_provider' },
    // ])
    // const [providers, setProviders] = useState([{ name: '', address: '', phoneNumber: '', email: '' }])

    // const addProvider = () => {
    //     setProviders([...providers, { name: '', value: '' }])
    // }
    // const [newProviderName, setNewProviderName] = useState('')

    // const handleProviderChange = (event, index) => {
    //     const selectedValue = event.target.value
    //     if (selectedValue === 'placeholder') {
    //         const newProviders = [...providers]
    //         newProviders[index].name = ''
    //         newProviders[index].value = ''
    //         setProviders(newProviders)
    //     } else if (selectedValue === 'create_new_provider') {
    //         setProviderModalOpen(true)
    //     } else {
    //         const selectedProvider = providerList.find((attr) => attr.value === selectedValue)
    //         if (selectedProvider) {
    //             const newProviders = [...providers]
    //             newProviders[index].name = selectedProvider.title
    //             newProviders[index].value = selectedProvider.value
    //             setProviders(newProviders)
    //         }
    //     }
    // }
    // const handleProviderValueChange = (event, index, field) => {
    //     const newProviders = [...providers]
    //     newProviders[index][field] = event.target.value
    //     setProviders(newProviders)
    // }

    // const handleNewProviderNameChange = (event) => {
    //     setNewProviderName(event.target.value)
    // }

    // const removeProvider = (index) => {
    //     setProviders(providers.filter((_, i) => i !== index))
    // }

    // const cancelNewProvider = () => {
    //     setProviderModalOpen(false)
    // }
    // const saveNewProvider = () => {
    //     setProviderList([...providerList, { title: newProviderName, value: newProviderName }])
    //     setProviderModalOpen(false)
    // }

    // const addAttribute = () => {
    //     setAttributes([...attributes, { name: '', value: '' }])
    // }
    // const [attributeModalOpen, setAttributeModalOpen] = useState(false)
    // const [providerModalOpen, setProviderModalOpen] = useState(false)

    // const [newAttributeName, setNewAttributeName] = useState('')
    // const handleAttributeChange = (event, index) => {
    //     const selectedValue = event.target.value
    //     if (selectedValue === 'placeholder') {
    //         const newAttributes = [...attributes]
    //         newAttributes[index].name = ''
    //         newAttributes[index].value = ''
    //         setAttributes(newAttributes)
    //     } else if (selectedValue === 'create_new_attribute') {
    //         setAttributeModalOpen(true)
    //     } else {
    //         const selectedAttribute = attributeList.find((attr) => attr.value === selectedValue)
    //         if (selectedAttribute) {
    //             const newAttributes = [...attributes]
    //             newAttributes[index].name = selectedAttribute.title
    //             newAttributes[index].value = selectedAttribute.value
    //             setAttributes(newAttributes)
    //         }
    //     }
    // }

    // const handleAttributeValueChange = (event, index) => {
    //     const newAttributes = [...attributes]
    //     newAttributes[index].value = event.target.value
    //     setAttributes(newAttributes)
    // }

    // const handleNewAttributeNameChange = (event) => {
    //     setNewAttributeName(event.target.value)
    // }

    // const removeAttribute = (index) => {
    //     setAttributes(attributes.filter((_, i) => i !== index))
    // }

    // const cancelNewAttribute = () => {
    //     setAttributeModalOpen(false)
    // }
    // const handleModalClose = () => {
    //     setProviderModalOpen(false)
    // }
    // const saveNewAttribute = () => {
    //     setAttributeList([...attributeList, { title: newAttributeName, value: newAttributeName }])
    //     setAttributeModalOpen(false)
    // }

    const navigate = useNavigate()
    const { attribute_id, handleCloseEditModal, fetchAttributes } = props
    const { enqueueSnackbar } = useSnackbar()
    const [loading, setLoading] = useState(false)
    const [attributeFetch, setAttributeFetch] = useState(null)
    const [attributes, setAttributes] = useState([])

    const handleGetAttributeById = () => {
        setLoading(true)
        client
            .get(`/attributeProducts/${attribute_id}`)
            .then((data) => {
                console.log('data', data.attributeProduct)
                if (data.success && data.attributeProduct) {
                    setAttributeFetch(data.attributeProduct)
                }
            })
            .catch((error) => {
                console.error('Failed to fetch category:', error)
                enqueueSnackbar('Fail to update', {
                    variant: 'error',
                })
            })
            .finally(() => {
                setLoading(false)
            })
    }
    useEffect(() => {
        handleGetAttributeById()
    }, [])
    const AttributeSchema = Yup.object().shape({
        name: Yup.string().min(2, 'Name not found').required('Name is required'),
        avaiable: Yup.number('Avaiable must be number type').required('Avaiable is required'),
        value: Yup.string().min(2, 'Value not found').required('Value is required'),
    })
    const handleSubmitEditForm = async (values, actions) => {
        client
            .put(`/attributeProducts/${attribute_id}`, values)
            .then((res) => {
                if (res.success && res.status === 201) {
                    handleCloseEditModal()
                    enqueueSnackbar(res.message, { variant: 'success' })
                    fetchAttributes()
                }
            })
            .catch((err) => {
                enqueueSnackbar(err, { variant: 'error' })
            })
    }

    return (
        <Fragment>
            {attributeFetch ? (
                <Formik
                    initialValues={{
                        name: `${attributeFetch.name}`,
                        avaiable: `${attributeFetch.avaiable}`,
                        value: `${attributeFetch.value}`,
                    }}
                    validationSchema={AttributeSchema}
                    onSubmit={handleSubmitEditForm}
                >
                    {({ handleBlur, handleChange, values, errors, touched }) => (
                        <Form style={{ display: 'flex', gap: 2, flexDirection: 'column', margin: '15px' }}>
                            <Box style={{ margin: '1.75rem 1.75rem 1.75rem 1.75rem' }}>
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
                                    Edit Attribute
                                </Typography>

                                <Box
                                    style={{
                                        marginTop: '1.75rem',
                                        marginBottom: '1.75rem',
                                        display: 'flex',
                                        alignItems: 'start',
                                        gap: '1.75rem',
                                    }}
                                >
                                    <Box>
                                        <Box
                                            style={{
                                                display: 'flex',
                                                flexWrap: 'wrap',
                                                alignItems: 'center',
                                                gap: '1.25rem',
                                            }}
                                        >
                                            <Box style={{ width: 'calc(100% - 1.25rem)' }}>
                                                <Textfield
                                                    label="Name"
                                                    name="name"
                                                    id="name"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.name}
                                                    error={touched.name && errors.name}
                                                    helperText={errors.name}
                                                />
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
                                            <Box style={{ width: 'calc(100% - 1.25rem)' }}>
                                                <Textfield
                                                    label="avaiable"
                                                    name="avaiable"
                                                    id="avaiable"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.avaiable}
                                                    error={touched.avaiable && errors.avaiable}
                                                    helperText={errors.avaiable}
                                                />
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>

                                <Box style={{ display: 'flex', gap: '1.75rem' }}>
                                    <Button type="submit" size="sm" color="green">
                                        <Icon className="mx-[2px]" width={22} icon={APP_ICON.i_plus} />
                                        Edit Attribute
                                    </Button>
                                    <Button onClick={() => handleCloseEditModal()} size="sm" color="red">
                                        {/* <Icon className="mx-1" width={22} icon="ant-design:clear-outlined" /> */}
                                        Cancel
                                    </Button>
                                </Box>
                            </Box>
                        </Form>
                    )}
                </Formik>
            ) : (
                <Box display="flex" alignItems="center" justifyContent="center" height={300}>
                    <CircularProgress />
                </Box>
            )}
        </Fragment>
    )
}

export default Edit
