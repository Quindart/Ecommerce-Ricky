import React from 'react'
import {Autocomplete as CustomAutocomplete } from '@mui/material'


function Autocomplete(props) {
    const { ...rest } = props
    return <CustomAutocomplete {...rest}></CustomAutocomplete>
}

export default Autocomplete