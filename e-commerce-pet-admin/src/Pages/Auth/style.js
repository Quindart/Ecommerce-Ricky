import styled from '@emotion/styled'
import { Formik, Form, Field } from 'formik'

export const Grid = styled.div`
    display: grid;
    grid-template-areas: 'image' 'form';

    @media (max-width: 767px) {
        grid-template-areas: 'form' 'image';
        grid-template-rows: 1fr;
    }

    @media (min-width: 767px) and (max-width: 900px) {
        grid-template-areas: 'form' 'image';
        grid-template-rows: 1fr;
    }

    @media (min-width: 900px) and (max-width: 1200px) {
        grid-template-areas: 'image form' 'image form';
        grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 1200px) {
        grid-template-areas: 'image form' 'image form';
        grid-template-columns: 1fr 1fr;
    }
`

export const Image = styled.img`
    grid-area: image;
`

export const FormContainer = styled(Formik)`
    grid-area: form;
`

export const Box = styled(Form)`
    max-width: 575px;
`

export const Checkbox = styled.input`
    transform: scale(1.5);
`
