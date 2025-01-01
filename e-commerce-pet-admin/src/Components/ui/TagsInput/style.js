import styled from '@emotion/styled'
import { theme } from '../../../Theme/theme'

export const TagInputStyled = styled.div`
    li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #f2f2f2;
        color: #333;
        border-radius: 20px;
        padding: 5px 10px;
        margin-right: 5px;
        margin-bottom: 5px;
    }

    & > input[type='text'] {
        border: none;
        outline: none;
        padding: 5px;
        font-size: 14px;
        flex-grow: 1;
        border-radius: 20px;
        margin-right: 5px;
    }

    & > input[type='text']:focus {
        outline: none;
    }

    & > .delete-button {
        background-color: transparent;
        border: none;
        color: #999;
        cursor: pointer;
        margin-left: 5px;
    }
`
