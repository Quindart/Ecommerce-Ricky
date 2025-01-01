import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'

export default function useClickOutside() {
    const [active, setActive] = useState(false)
    const handleActive = () => {
        setActive(!active)
    }
    const handleClose = () => {
        setActive(false)
    }
    const menuRef = useRef(null)

    useEffect(() => {
        const handleUnActive = (e) => {
            if (!menuRef.current.contains(e.target)) setActive(false)
        }

        document.addEventListener('mousedown', handleUnActive)
        return () => {
            document.removeEventListener('mousedown', handleUnActive)
        }
    }, [])

    const classes = clsx(
        { 'animate-showOn-popup ': !active },
        'block absolute z-50 rounded bg-white pb-1 pt-4 align-top shadow-lg animate-showDown-popup ',
    )
    return { handleActive, handleClose, active, menuRef, classes }
}
