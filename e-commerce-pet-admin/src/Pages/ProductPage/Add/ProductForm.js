import { Box, CircularProgress, Icon } from '@mui/material'
import React, { useEffect, useState, useRef } from 'react'
import { Form, Formik, useFormikContext } from 'formik'
import Textfield from '../../../Components/ui/Textfield/Textfield'
import Dropdown from '../../../Components/ui/Dropdown/Dropdown'
import * as yup from 'yup'
import client from '../../../services/api-context'
import { enqueueSnackbar } from 'notistack'
import Title from '../../../Components/ui/Title/Title'
import { Card } from '../styles'
import { Fragment } from 'react'
import TagsInput from '../../../Components/ui/TagsInput/TagsInput'
import Autocomplete from '../../../Components/ui/Autocomplete/Autocomplete'
import InputUpload from '../../../Components/ui/InputUpload/InputUpload'
import { useImageUpload } from '../../../hook/ui/useImageUpload'
import Button from '../../../Components/ui/Button/Button'
import { APP_ICON } from '../../../Utils/Constants'
import axios from 'axios'

const initialValues = {
    name: '',
    images: [
        {
            url: '',
        },
    ],
    attribute_product: [],
    brand: '',
    price: '',
    avaiable: '',
    description: '',
    tags: [],
    length: '',
    width: '',
    weight: '',
    height: '',
    category: '',
}

const validationSchema = yup.object().shape({
    name: yup.string().required('Required'),
    tags: yup.array().of(yup.string()).required('At least one tag is required'),
    attribute_product: yup.array().of(yup.string()).required('At least one attribute is required'),
    brand: yup.string().required('Required'),
    price: yup.number().required('Required').positive('Must be positive').integer('Must be an integer'),
    avaiable: yup.number().required('Required').positive('Must be positive').integer('Must be an integer'),
    description: yup.string().required('Required'),
    length: yup.number().required('Required').positive('Must be positive').integer('Must be an integer'),
    width: yup.number().required('Required').positive('Must be positive').integer('Must be an integer'),
    weight: yup.number().required('Required').positive('Must be positive').integer('Must be an integer'),
    height: yup.number().required('Required').positive('Must be positive').integer('Must be an integer'),
    category: yup.string().required('Required'),
})

const axiosUpload = axios.create()

const createProduct = async () => {
    axiosUpload.post()
}

export const ProductForm = (props) => {
    const [categories, setCategories] = useState([])
    const [categoriesList, setCategoriesList] = useState([])
    const [loading, setLoading] = useState(false)
    const [attributes, setAttributes] = useState([])
    const [selectedAttributeIds, setSelectedAttributeIds] = useState([])
    const [tags, setTags] = useState([])
    const [selectedCategoryId, setSelectedCategoryId] = useState('')
    const [images, setImages] = useState([])
    const { listImg, setBase64Image, handleRemoveUploadImage, handleRemoveAllImage } = useImageUpload()

    const handleSelectAttribute = (event, newValue) => {
        const ids = newValue.map((option) => option._id)
        setSelectedAttributeIds(ids)
        console.log('Selected Attribute IDs:', ids)
    }
    const handleTagsUpdate = (updatedTags) => {
        setTags(updatedTags)
    }
    const handleTakeImages = (images) => {
        setImages(images)
    }

    const fetchAttributes = async () => {
        setLoading(true)
        try {
            const response = await fetch(
                'https://e-commerce-pet-server-quindarts.vercel.app/attributeProducts?limit=100&offset=1',
            )
            const json = await response.json()
            setAttributes(json.list.map((attribute) => ({ ...attribute, id: attribute._id })))
        } catch (error) {
            console.error('Failed to fetch attributes:', error)
        } finally {
            setLoading(false)
        }
    }

    const handleGetCategoryByParams = () => {
        setLoading(true)
        client
            .get(`/categorys?limit=60&offset=1`)
            .then((response) => {
                return response.listCategory
            })
            .then((categories) => {
                setCategories(categories)

                setCategoriesList(
                    categories.map((item) => ({
                        title: item.name,
                        value: item._id,
                    })),
                )
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
    const autocompleteRef = useRef(null)
    const tagsInputRef = useRef(null)
    const handleReset = () => {
        handleTagsUpdate([])
        setTags([])
        setSelectedAttributeIds([])
        if (tagsInputRef.current) {
            tagsInputRef.current.handleTagsUpdate([])
        }
        if (tagsInputRef.current) {
            tagsInputRef.current.setTags([])
        }
        setSelectedCategoryId('')
        if (autocompleteRef.current) {
            autocompleteRef.current.setValue([])
        }
        handleRemoveAllImage()
        if (autocompleteRef.current) {
            const clearButton = autocompleteRef.current.querySelector('button[aria-label="Clear"]')
            if (clearButton) {
                clearButton.click()
            }
        }
    }
    useEffect(() => {
        fetchAttributes()
        handleGetCategoryByParams()
    }, [])
    useEffect(() => {
        if (categories.length > 0) {
            setCategoriesList(
                categories.map((item) => ({
                    title: item.name,
                    value: item._id,
                })),
            )
        }
    }, [categories])

    // const handleAddProduct = (values, actions) => {
    //     const formattedValues = {
    //         name: values.name,
    //         images: [
    //             {
    //                 url: listImg[0],
    //             },
    //         ],
    //         attribute_product: selectedAttributeIds,
    //         brand: values.brand,
    //         price: values.price,
    //         avaiable: values.avaiable,
    //         description: values.description,
    //         tags: tags,
    //         dimensions: {
    //             length: values.length,
    //             width: values.width,
    //             weight: values.weight,
    //             height: values.height,
    //         },
    //         category: selectedCategoryId,
    //     }

    //     client
    //         .post(`/products`, formattedValues)
    //         .then((response) => {
    //             console.log(response)
    //             enqueueSnackbar('Product added successfully', { variant: 'success' })
    //             handleReset()
    //         })
    //         .catch((error) => {
    //             console.log(formattedValues)
    //             console.log(images)
    //             console.error('Failed to add product:', error)
    //             enqueueSnackbar('Fail to add product', { variant: 'error' })
    //         })
    //         .finally(() => {
    //             setLoading(false)
    //         })
    // }
    const handleAddProduct = (values, actions) => {
        console.log('Submitted values:', values)
        // Gửi dữ liệu lên server...
    }

    return (
        <Fragment>
            {!loading ? (
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values, actions) => {
                        alert('hello')
                        handleAddProduct(values, actions)
                    }}
                >
                    {({
                        handleReset,
                        handleSubmit,
                        onSubmit,
                        handleBlur,
                        handleChange,
                        values,
                        errors,
                        touched,
                        resetForm,
                    }) => (
                        <Form handleSubmit={handleSubmit} className=" grid grid-cols-4 items-start gap-7">
                            <Box sx={Card} className="col-span-2 grid grid-cols-8 gap-5">
                                <Box className=" col-span-8">
                                    <Title icon={'noto-v1:information'} className="mb-5">
                                        Basic infomation
                                    </Title>
                                </Box>
                                <Textfield
                                    placeholder="Name"
                                    id="name"
                                    type="text"
                                    label="Name"
                                    name="name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                    helperText={touched.name && errors.name ? errors.name : ''}
                                    error={touched.name && errors.name ? true : false}
                                    className="col-span-4"
                                />
                                <Textfield
                                    placeholder="Brand"
                                    id="brand"
                                    type="text"
                                    label="Brand"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.brand}
                                    helperText={touched.brand && errors.brand ? errors.brand : ''}
                                    error={touched.brand && errors.brand ? true : false}
                                    className="col-span-4"
                                />
                                <TagsInput
                                    className="col-span-4"
                                    id="tags"
                                    value={tags}
                                    helperText={touched.tags && errors.tags ? errors.tags : ''}
                                    error={touched.tags && errors.tags ? true : false}
                                    onTagsRemove={(tags) => console.log(`Removed tags: ${tags}`)}
                                    onTagsChange={handleTagsUpdate}
                                    ref={tagsInputRef}
                                />
                                {!loading && categoriesList.length > 0 && (
                                    <Dropdown
                                        className="col-span-4"
                                        list={categoriesList}
                                        size="xl"
                                        value={selectedCategoryId}
                                        onChange={(e) => setSelectedCategoryId(e.target.value)}
                                    />
                                )}

                                <Textfield
                                    placeholder="Price"
                                    id="price"
                                    type="number"
                                    label="Price"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.price}
                                    helperText={touched.price && errors.price ? errors.price : ''}
                                    error={touched.price && errors.price ? true : false}
                                    className="col-span-4"
                                />

                                <Box className="col-span-4" gap="2rem">
                                    <Autocomplete
                                        multiple
                                        value={attributes.filter((attr) => selectedAttributeIds.includes(attr.id))}
                                        options={attributes}
                                        getOptionLabel={(option) => option.name}
                                        onChange={handleSelectAttribute}
                                        renderInput={(params) => <Textfield {...params} label="Attributes" />}
                                        ref={autocompleteRef}
                                    />
                                </Box>
                            </Box>

                            <Box sx={Card} className="col-span-2 grid grid-cols-4 gap-5">
                                <Box className=" col-span-4">
                                    <Title icon={'fxemoji:deliverytruck'} className=" mb-5">
                                        Details
                                    </Title>
                                </Box>

                                <Textfield
                                    placeholder="... cm"
                                    id="height"
                                    type="number"
                                    label="Height"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.height}
                                    helperText={touched.height && errors.height ? errors.height : ''}
                                    error={touched.height && errors.height ? true : false}
                                    className="col-span-2"
                                />
                                <Textfield
                                    placeholder="... cm"
                                    id="length"
                                    type="number"
                                    label="Length"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.length}
                                    helperText={touched.length && errors.length ? errors.length : ''}
                                    error={touched.length && errors.length ? true : false}
                                    className="col-span-2"
                                />
                                <Textfield
                                    placeholder="... cm"
                                    id="width"
                                    type="number"
                                    label="Width"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.width}
                                    helperText={touched.width && errors.width ? errors.width : ''}
                                    error={touched.width && errors.width ? true : false}
                                    className="col-span-2"
                                />
                                <Textfield
                                    placeholder="... gram"
                                    id="weight"
                                    type="number"
                                    label="Weight"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.weight}
                                    helperText={touched.weight && errors.weight ? errors.weight : ''}
                                    error={touched.weight && errors.weight ? true : false}
                                    className="col-span-2"
                                />
                                <Textfield
                                    placeholder="Stock"
                                    id="avaiable"
                                    type="number"
                                    label="Stock"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.avaiable}
                                    helperText={touched.avaiable && errors.avaiable ? errors.avaiable : ''}
                                    error={touched.avaiable && errors.avaiable ? true : false}
                                    className="col-span-2"
                                />
                                <Textfield
                                    placeholder="Description"
                                    id="description"
                                    type="text"
                                    label="Description"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.description}
                                    helperText={touched.description && errors.description ? errors.description : ''}
                                    error={touched.description && errors.description ? true : false}
                                    className="col-span-2"
                                />
                            </Box>
                            <Box className="col-span-4 gap-5">
                                <InputUpload
                                    listImg={listImg}
                                    setBase64Image={setBase64Image}
                                    handleRemoveUploadImage={handleRemoveUploadImage}
                                    handleRemoveAllImage={handleRemoveAllImage}
                                    handleTakeImages={handleTakeImages}
                                />
                            </Box>
                            <Box className="flex gap-7" gap="2rem">
                                <Button type="submit" size="sm" color="green">
                                    Create Product
                                </Button>
                                <Button onClick={() => handleReset(resetForm)} type="reset" size="sm" color="yellow">
                                    Clear form
                                </Button>
                            </Box>
                        </Form>
                    )}
                </Formik>
            ) : (
                <Box display="flex" alignItems="center" justifyContent="center" height={500}>
                    <CircularProgress />
                </Box>
            )}
        </Fragment>
    )
}
