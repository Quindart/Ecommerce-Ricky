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
import Title from '../../../Components/ui/Title/Title.js'
import { ProductForm } from './ProductForm.js'

const ICON_PRODVIDER_RANDOM = [
    'fluent-emoji-flat--man-pouting-light',
    'noto--man-superhero',
    'fluent-emoji--man-standing',
    'fluent-emoji--man-mechanic-light',
    'fluent-emoji--man-elf-dark',
    'fluent-emoji-flat--man-merpeople-light',
    'fluent-emoji--man-juggling',
    'fluent-emoji--old-man-medium-light',
    'openmoji--man-technologist',
    'fluent-emoji-flat--man-bald-medium',
    'streamline-emojis--man-dancing-1',
]
const AddProductPage = () => {
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
    console.log(attributes)
    return (
        <Box className="mb-7">
            <Typography className="flex items-center gap-4 text-xl font-bold text-sky-700">
                <Box className="flex h-[60px] w-[60px] items-center justify-center rounded-md bg-[#fdebe5]">
                    <Icon className="text-[#2499ef]" width={30} icon={'emojione-v1:card-file-box'} />
                </Box>
                Adding New product
            </Typography>
            <Box className="my-7">
                <ProductForm />
            </Box>
            {/* <Box className="my-7">
                <InputUpload className=" h-1 " />
            </Box> */}
            {/* <Box className="flex gap-7" gap="2rem">
                <Button onClick={() => navigate(APP_ROUTER.PRODUCT)} size="sm" color="green">
                    <Icon className="mx-[2px]" width={25} icon={APP_ICON.i_plus} />
                    Create Product
                </Button>
                <Button onClick={() => navigate(APP_ROUTER.PRODUCT)} size="sm" color="yellow">
                    <Icon className="mx-1" width={25} icon="ant-design:clear-outlined" />
                    Clear form
                </Button>
            </Box> */}
        </Box>
    )
}

export default AddProductPage
