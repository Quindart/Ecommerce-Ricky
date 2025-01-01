import { Box, Typography } from '@mui/material'
import Dropdown from '../../../Components/ui/Dropdown/Dropdown'
import Button from '../../../Components/ui/Button/Button'
import { ROLE } from '../../../Utils/Constants'
import { Icon } from '@iconify/react'
import React, { useEffect, useState } from 'react'
import { Fragment } from 'react'
import { CircularProgress } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUserById } from '../../../services/api-User'

function EditRole(props) {
    const { handleCloseEditRoleModal, role } = props
    const [loading, setLoading] = useState(false)
    const ROLE_DROP_VALUE = [
        {
            title: 'User',
            value: ROLE.USER,
        },
        {
            title: 'Warehouse',
            value: ROLE.WAREHOUSE,
        },
        {
            title: 'Owner',
            value: ROLE.OWNER,
        },
        {
            title: 'Admin',
            value: ROLE.ADMIN,
        },
    ]

    const [sortedRoles, setSortedRoles] = useState(ROLE_DROP_VALUE)
    useEffect(() => {
        if (role) {
            console.log(role)
            const RoleItem = ROLE_DROP_VALUE.find((item) => item.value === role)
            if (RoleItem) {
                const otherRoles = ROLE_DROP_VALUE.filter((item) => item.value !== role)
                setSortedRoles([RoleItem, ...otherRoles])
            }
        }
    }, [])
    return (
        <Fragment>
            {role ? (
                <Box mx={2} mb={2} mt={1}>
                    <Typography
                        style={{ fontWeight: 'bold', fontSize: '20px', color: '#374151 ' }}
                        mb={20}
                        variant="h7"
                    >
                        Change role
                    </Typography>
                    <Dropdown
                        key={sortedRoles.map((role) => role.value).join(',')}
                        style={{ marginTop: '1rem' }}
                        sx={{
                            pointerEvents: sortedRoles[0]?.value === 'owner' ? 'none' : 'auto',
                        }}
                        list={sortedRoles}
                        size="xl"
                    />
                    <Box mt={3} sx={{ display: 'flex', gap: 3 }}>
                        <Button
                            onClick={handleCloseEditRoleModal}
                            sx={{ width: '50%' }}
                            color="primary"
                            variant="outline"
                        >
                            <Icon width={20} style={{ marginRight: 4 }} icon="mdi:cancel-outline" />
                            Cancel
                        </Button>
                        <Button type="submit" sx={{ width: '50%' }} color="green">
                            <Icon width={20} style={{ marginRight: 4 }} icon="dashicons:update-alt" />
                            Update Role
                        </Button>
                    </Box>
                </Box>
            ) : (
                <Box display="flex" alignItems="center" justifyContent="center" height={300}>
                    <CircularProgress />
                </Box>
            )}
        </Fragment>
    )
}

export default EditRole
