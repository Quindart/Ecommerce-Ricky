import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import { Box, Typography } from '@mui/material'
import Button from '../../../Components/ui/Button/Button.js'
import { Card } from '../styles.js'
import Textfield from '../../../Components/ui/Textfield/Textfield.js'
import InputUpload from '../../../Components/ui/InputUpload/InputUpload.js'
import { APP_ICON, APP_ROUTER } from '../../../Utils/Constants.js'
import { useNavigate } from 'react-router-dom'
import Dropdown from '../../../Components/ui/Dropdown/Dropdown.js'
import Modal from '../../../Components/ui/Modal/Modal.js'
import { Icon } from '@iconify/react'

const AddProduct = () => {
    const navigate = useNavigate()
    const [brand, setBrand] = useState([
        { title: 'Brand 1', value: '1' },
        { title: 'Brand 2', value: '2' },
    ])

    const [category, setCategory] = useState([
        { title: 'Category 1', value: '1' },
        { title: 'Category 2', value: '2' },
    ])

    const [attributeList, setAttributeList] = useState([
        { title: 'Select Attribute', value: 'placeholder' },
        { title: 'Create new Attribute', value: 'create_new_attribute' },
    ])
    const [providerList, setProviderList] = useState([
        { title: 'Select Provider', value: 'placeholder' },
        { title: 'Create new Provider', value: 'create_new_provider' },
    ])
    const [providers, setProviders] = useState([{ name: '', address: '', phoneNumber: '', email: '' }])

    const addProvider = () => {
        setProviders([...providers, { name: '', value: '' }])
    }
    const [newProviderName, setNewProviderName] = useState('')

    const handleProviderChange = (event, index) => {
        const selectedValue = event.target.value
        if (selectedValue === 'placeholder') {
            const newProviders = [...providers]
            newProviders[index].name = ''
            newProviders[index].value = ''
            setProviders(newProviders)
        } else if (selectedValue === 'create_new_provider') {
            setProviderModalOpen(true)
        } else {
            const selectedProvider = providerList.find((attr) => attr.value === selectedValue)
            if (selectedProvider) {
                const newProviders = [...providers]
                newProviders[index].name = selectedProvider.title
                newProviders[index].value = selectedProvider.value
                setProviders(newProviders)
            }
        }
    }
    const handleProviderValueChange = (event, index, field) => {
        const newProviders = [...providers]
        newProviders[index][field] = event.target.value
        setProviders(newProviders)
    }

    const handleNewProviderNameChange = (event) => {
        setNewProviderName(event.target.value)
    }

    const removeProvider = (index) => {
        setProviders(providers.filter((_, i) => i !== index))
    }

    const cancelNewProvider = () => {
        setProviderModalOpen(false)
    }
    const saveNewProvider = () => {
        setProviderList([...providerList, { title: newProviderName, value: newProviderName }])
        setProviderModalOpen(false)
    }

    const [attributes, setAttributes] = useState([])
    const addAttribute = () => {
        setAttributes([...attributes, { name: '', value: '' }])
    }
    const [attributeModalOpen, setAttributeModalOpen] = useState(false)
    const [providerModalOpen, setProviderModalOpen] = useState(false)

    const [newAttributeName, setNewAttributeName] = useState('')
    const handleAttributeChange = (event, index) => {
        const selectedValue = event.target.value
        if (selectedValue === 'placeholder') {
            const newAttributes = [...attributes]
            newAttributes[index].name = ''
            newAttributes[index].value = ''
            setAttributes(newAttributes)
        } else if (selectedValue === 'create_new_attribute') {
            setAttributeModalOpen(true)
        } else {
            const selectedAttribute = attributeList.find((attr) => attr.value === selectedValue)
            if (selectedAttribute) {
                const newAttributes = [...attributes]
                newAttributes[index].name = selectedAttribute.title
                newAttributes[index].value = selectedAttribute.value
                setAttributes(newAttributes)
            }
        }
    }

    const handleAttributeValueChange = (event, index) => {
        const newAttributes = [...attributes]
        newAttributes[index].value = event.target.value
        setAttributes(newAttributes)
    }

    const handleNewAttributeNameChange = (event) => {
        setNewAttributeName(event.target.value)
    }

    const removeAttribute = (index) => {
        setAttributes(attributes.filter((_, i) => i !== index))
    }

    const cancelNewAttribute = () => {
        setAttributeModalOpen(false)
    }
    const handleModalClose = () => {
        setProviderModalOpen(false)
    }
    const saveNewAttribute = () => {
        setAttributeList([...attributeList, { title: newAttributeName, value: newAttributeName }])
        setAttributeModalOpen(false)
    }

    return (
        <Box className="grid w-full grid-cols-8 gap-7 ">
            <Box sx={Card} className="col-span-4 grid grid-cols-4 gap-5">
                <Textfield placeholder="Name" id="name" type="text" label="Name" className=" col-span-4"></Textfield>
                <Dropdown className=" col-span-4" list={brand} size="xl" />
                <Dropdown className="col-span-4" list={category} size="xl" />

                <Dropdown className="col-span-4" list={attributeList} />
                <Textfield
                    placeholder="Bought Price"
                    id="bought"
                    type="number"
                    label="Bought Price"
                    className=" col-span-4"
                ></Textfield>
                <Textfield
                    placeholder="Sell Price"
                    id="sell"
                    type="number"
                    label="Sell Price"
                    className=" col-span-4"
                ></Textfield>
            </Box>
            <Box sx={Card} className=" col-span-4 grid grid-cols-4 gap-5">
                <Textfield
                    placeholder="Stock"
                    id="stock"
                    type="number"
                    label="Stock"
                    className=" col-span-4"
                ></Textfield>
                <Textfield
                    placeholder="... cm"
                    id="Height"
                    type="number"
                    label="Height"
                    className=" col-span-2"
                ></Textfield>{' '}
                <Textfield
                    placeholder="... cm"
                    id="Length"
                    type="number"
                    label="Length"
                    className=" col-span-2"
                ></Textfield>{' '}
                <Textfield
                    placeholder="... cm"
                    id="Width"
                    type="number"
                    label="Width"
                    className=" col-span-2"
                ></Textfield>
                <Textfield
                    placeholder="... gram"
                    id="Weight"
                    type="number"
                    label="Weight"
                    className=" col-span-2"
                ></Textfield>
                <Textfield
                    placeholder="Description"
                    id="description"
                    type="text"
                    label="Description"
                    className=" col-span-4 "
                ></Textfield>
            </Box>
            <Box className="col-span-8">
                <InputUpload className=" h-1 "></InputUpload>
            </Box>
            <Box className="col-span-8">
                <Accordion>
                    <AccordionSummary
                        className="text-md mx-4 py-2 font-semibold"
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        Search engine optimize
                    </AccordionSummary>
                    <AccordionDetails>
                        <h3>Url key</h3>
                        <Textfield className="mb-4" label="Enter value here" />
                        <h3>Meta title</h3>
                        <Textfield className="mb-4" label="Enter value here" /> <h3>Meta keywords</h3>
                        <Textfield className="mb-4" label="Enter value here"></Textfield>
                        <h3>Meta description</h3>
                        <Textfield className="mb-4" label="Enter value here" />
                    </AccordionDetails>
                </Accordion>{' '}
            </Box>
            <Box className="col-span-8">
                <Accordion>
                    <AccordionSummary
                        className="text-md mx-4 py-2 font-semibold"
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        Provider
                    </AccordionSummary>
                    <AccordionDetails>
                        {providers.map((provider, index) => (
                            <Box key={index}>
                                <Dropdown
                                    className="mb-2"
                                    list={[...providerList]}
                                    onChange={(event) => handleProviderChange(event, index)}
                                />
                                <Textfield
                                    className="mb-4"
                                    label="Address"
                                    type="text"
                                    value={provider.address}
                                    onChange={(event) => handleProviderValueChange(event, index)}
                                />
                                <Textfield
                                    className="mb-4"
                                    label="Phone number"
                                    type="number"
                                    value={provider.phoneNumber}
                                    onChange={(event) => handleProviderValueChange(event, index)}
                                />
                                <Textfield
                                    className="mb-4"
                                    label="Provider email"
                                    type="text"
                                    value={provider.email}
                                    onChange={(event) => handleProviderValueChange(event, index)}
                                />
                                <Button className="mb-10" color="red" onClick={() => removeProvider(index)}>
                                    Delete
                                </Button>
                            </Box>
                        ))}
                        <Button color="primary" onClick={addProvider}>
                            Add Provider
                        </Button>
                        <Modal open={providerModalOpen} onClose={() => setProviderModalOpen(false)}>
                            <h2>Add Provider</h2>
                            <Textfield
                                label="Provider name"
                                value={newProviderName}
                                onChange={handleNewProviderNameChange}
                            />
                            <Button onClick={saveNewProvider}>Save</Button>
                            <Button onClick={cancelNewProvider}>Cancel</Button>
                        </Modal>
                    </AccordionDetails>
                </Accordion>
            </Box>
            <Box className="cols-span-8 flex" gap="2rem">
                <Button onClick={() => navigate(APP_ROUTER.PRODUCT)} className="px-0" size="lg" color="primary">
                    Create New Product
                </Button>
                <Button className=" px-0" size="md" color="red">
                    Cancel
                </Button>
            </Box>
        </Box>
    )
}

export default AddProduct
