import { Box } from '@mui/material'
import { Icon } from '@iconify/react'
function ImageCard(props) {
    const { src, handleRemoveUploadImage } = props
    return (
        <Box className=" group  relative flex h-[6rem] w-[6rem] items-center justify-center rounded-md bg-slate-100 ">
            <Box
                className="relative z-20 hidden h-full w-full transition-all duration-75 group-hover:block"
                sx={{ background: 'rgba(240, 240, 240, 0.5)' }}
            >
                <Icon
                    className="absolute right-0 cursor-pointer text-red-500"
                    width={30}
                    height={30}
                    icon="typcn:delete"
                    onClick={() => handleRemoveUploadImage(src)}
                />
            </Box>
            <img crossOrigin="anonymous" className="absolute h-[5rem] w-[5rem] object-cover " src={src} alt="" />
        </Box>
    )
}

export default ImageCard
