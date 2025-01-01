import React, { useRef } from 'react'
import { Box, Typography } from '@mui/material'
import Button from '../Button/Button'
import { styled } from '@mui/material/styles'
import { Icon } from '@iconify/react'
import ImageCard from './ImageCard'
import { toast } from 'sonner'
import { getBase64Image } from '../../../hook/ui/getBase64Image'

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
})

function InputUpload(props) {
    const { listImg, setBase64Image, handleRemoveUploadImage, handleRemoveAllImage, handleTakeImages } = props
    const fileInputRef = useRef(null)
    const handleFileChange = async (event) => {
        const file = event.target.files[0]
        if (file) {
            try {
                const base64String = await getBase64Image(file)
                setBase64Image(base64String)
            } catch (error) {
                toast.error('Failed to convert image to Base64: ' + error.message)
                console.error('Failed to convert image to Base64:', error)
            }
        }
    }

    return (
        <Box className="flex w-full border-spacing-1 flex-col justify-center gap-5 rounded-2xl border-2 bg-white shadow-md">
            <Button
                className="mt-5"
                component="label"
                variant="contained"
                startIcon={<Icon icon="ic:round-cloud-upload" width={40} height={40} />}
            >
                <Typography className="font-[700] text-gray-600" variant="h6" component="h6">
                    Upload Image here
                </Typography>
                <VisuallyHiddenInput type="file" onChange={handleFileChange} ref={fileInputRef} />
            </Button>
            <Box className="flex h-[11rem] w-full border-spacing-1 flex-wrap gap-5 rounded-md px-[2rem]">
                {listImg.length > 0 &&
                    listImg.map((item, key) => (
                        <ImageCard src={item} key={key} handleRemoveUploadImage={handleRemoveUploadImage} />
                    ))}
            </Box>
            <Button className="m-4 w-[10rem]" color="primary" onClick={handleRemoveAllImage}>
                Clear all choice
            </Button>
        </Box>
    )
}

export default InputUpload
