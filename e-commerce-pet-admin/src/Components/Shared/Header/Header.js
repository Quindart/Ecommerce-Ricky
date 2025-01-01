import React from 'react'
import PopupServ from '../../ui/Popup/PopupServ'
import PopupUser from '../../ui/Popup/PopupUser'
import Button from '../../ui/Button/Button'
import { Icon } from '@iconify/react'
import { APP_ICON } from '../../../Utils/Constants'
import { StyledBox } from '../../Shared/Header/styles'
import PopupLang from '../../ui/Popup/PopupLang'
import i18n from '../../../translation/i18n'

function Header({ user }) {
    const BaseHeader = ({ className, children }) => {
        return <nav className={className}>{children}</nav>
    }

    const withPageSpecificProps = () => {
        const avatars = [
            {
                src: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
            },
            {
                src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
            },
            {
                src: 'https://media.istockphoto.com/id/1247693979/photo/close-up-portrait-of-young-smiling-handsome-man-wearing-blue-shirt-and-glasses-feeling.jpg?s=612x612&w=0&k=20&c=PgpEGomO4XLVvRHlFxuqneqm0E68_zYkXVqzr5WN_eo=',
            },
            { src: '' },
        ]
        const listLanguage = [
            { title: 'Vietnamese', value: 'vi' },
            { title: 'English', value: 'en' },
        ]
        const handleChangeLanguage = (value) => {
            i18n.changeLanguage(value)
        }
        const names = [{ name: 'Bob' }, { name: 'Bill' }, { name: 'Ben' }, { name: '' }]

        return () => (
            <StyledBox className="pr-15 flex justify-end gap-1 py-3">
                <PopupLang list={listLanguage} handleChangeLanguage={handleChangeLanguage} />
                <Button className="bottom-[2px] m-1" size="md" variant="outline" color="grey" icon>
                    <Icon icon={APP_ICON.i_bell} />
                </Button>
                <PopupServ avatars={avatars} names={names} />
                <PopupUser className="items-end" user={user} />
            </StyledBox>
        )
    }
    const AdminHeader = withPageSpecificProps(BaseHeader)
    return (
        <header className="sticky right-0 top-0 z-30 w-full">
            <AdminHeader />
        </header>
    )
}

export default Header
