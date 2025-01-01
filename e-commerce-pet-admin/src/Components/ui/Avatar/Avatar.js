import { useState } from 'react'
import { Icon } from '@iconify/react'
import { APP_ICON } from '../../../Utils/Constants'
import { CustomAvatar } from './style.js'

const Avatar = (props) => {
    const { src, size = 'sm', className = '', upload } = props

    const [avatarSrc, setAvatarSrc] = useState(src)

    const handleImageUpload = (event, setAvatarSrc) => {
        let file = event.target.files[0]
        let reader = new FileReader()
        reader.onloadend = () => {
            setAvatarSrc(reader.result)
        }
        if (file) {
            reader.readAsDataURL(file)
        }
    }

    return (
        <CustomAvatar className={` avt-${size} relative  ${className}  `}>
            {avatarSrc ? (
                <img
                    className={`h-full w-full rounded-full border-[3px] border-white object-cover`}
                    src={avatarSrc}
                    alt="Avatar"
                />
            ) : (
                <Icon
                    icon={APP_ICON.i_avatar}
                    className={`h-full w-full  rounded-full border-[3px] border-white bg-slate-400 object-cover p-1 text-gray-200`}
                />
            )}

            {upload && (
                <label className="absolute bottom-0 right-0">
                    <Icon
                        icon={APP_ICON.i_camera}
                        className="h-4 w-4 cursor-pointer text-gray-500 transition duration-300 hover:text-gray-700"
                    />
                    <input
                        type="file"
                        className="hidden"
                        onChange={(event) => handleImageUpload(event, setAvatarSrc)}
                    />
                </label>
            )}
        </CustomAvatar>
    )
}

export default Avatar
