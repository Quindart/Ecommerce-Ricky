import React from 'react'

const Badge = (props) => {
    const { badges, className, children, classBadge, message, ...rest } = props

    return (
        <div className={className} {...rest}>
            <span className={`badge badge__${badges}`}>
                {message}
                {children}
            </span>

            {/* {badges &&
                    badges.map((badge, index) => (
                        <span
                            key={index}
                            className={`badge badge__${badge.status}`}
                        >
                            {badge.message}
                            {children}
                        </span>
                    ))} */}
        </div>
    )
}

export default Badge
