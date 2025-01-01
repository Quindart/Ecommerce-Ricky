import React from 'react'
import Avatar from './Avatar.js'
import { CustomAvatarGroup } from './style.js'
const AvatarGroup = (props) => {
    const { avatars, maxVisible, handleAvatar, size = 'md', className = '', upload, setAvatarSrc, ...rest } = props
    return (
        <CustomAvatarGroup className={`flex -space-x-2 ${className}`}>
            {avatars.map(
                (avatar, index) =>
                    index < maxVisible && (
                        <Avatar
                            key={index}
                            {...avatar}
                            {...rest}
                            size={size}
                            className={`relative z-[2] rounded-full`}
                            handleAvatar={handleAvatar}
                            upload={upload}
                        />
                    ),
            )}
            {avatars.length > maxVisible && (
                <span
                    className={`inline-flex items-center justify-center rounded-full bg-gray-500 avt-${size} font-medium text-white `}
                >
                    {Math.min(avatars.length - maxVisible, 100) > 100
                        ? '100+'
                        : `+${Math.min(avatars.length - maxVisible, 100)}`}
                </span>
            )}
        </CustomAvatarGroup>
    )
}

export default AvatarGroup
