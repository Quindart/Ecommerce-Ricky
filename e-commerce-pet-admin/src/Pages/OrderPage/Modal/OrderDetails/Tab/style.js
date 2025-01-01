import styled from '@emotion/styled'
import { Box } from '@mui/material'

export const CustomListOrder = styled(Box)`
    & .contain {
        width: 100%;
        &__left,
        &__right {
            width: 100%;
            @media (min-width: 1024px) {
                width: 50%;
            }
        }
        &__right {
            margin: 1rem 0;
            @media (min-width: 1024px) {
                margin: 0;
            }
        }
    }
`
export const Card = {
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '1rem',
}

export const Col = {
    gridColumn: 'span 1',
}
export const Cols = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1rem',
}
export const Row = {
    gridRow: 'span 1',
}
export const Rows = {
    display: 'grid',
    gridTemplateRows: 'repeat(3, 1fr)',
    gap: '1rem',
}

export const us4jxz = {
    fontSize: '13px',
    fontWeight: 600,
    marginTop: '15px',
}
export const divider = {
    gridRow: 'span 1',
}
export const modalDivider = {
    with: '100%',
}
export const qdmdb7 = {
    fontSize: '13px',
    fontWeight: 500,
    color: 'rgb(140, 163, 186)',
}
export const flexCenter = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '8px',
    marginBottom: '18px',
}
export const sb77p4 = {
    width: '230px',
    marginLeft: 'auto',
    paddingTop: '12px',
    paddingBottom: '12px',
}
export const flexAlign = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
}

export const itemDetails = {
    fontSize: '13px',
    fontWeight: 500,
    color: 'rgb(140, 163, 186)',
}

export const total = {
    fontSize: '14px',
    fontWeight: 600,
    marginBottom: '28px',
}

export const imageBox = {
    color: 'rgb(18, 31, 67)',
    // boxShadow:
    //     'rgba(95, 116, 141, 0.03) 0px 2px 1px -1px, rgba(95, 116, 141, 0.04) 0px 1px 1px 0px, rgba(95, 116, 141, 0.08) 0px 1px 3px 0px',
    borderRadius: '8px',
    width: '142px',
    height: '142px',
    overflow: 'hidden',
    // objectFit: 'cover',
}

export const marginLeft = {
    marginLeft: '16px',
}

export const itemName = {
    fontSize: '14px',
    lineHeight: '1.8',
    fontWeight: 600,
}
export const orderInfoContainer = {
    overflow: 'auto',
}

export const orderInfoHeader = {
    display: 'flex',
    alignItems: 'center',
}

export const orderInfoTitle = {
    fontSize: '18px',
    fontWeight: 600,
    marginRight: '0.5rem',
    marginTop: '1.2rem',
}

export const orderInfoButton = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    backgroundColor: 'transparent',
    outline: 0,
    border: 0,
    margin: 0,
    cursor: 'pointer',
    userSelect: 'none',
    verticalAlign: 'middle',
    appearance: 'none',
    textDecoration: 'none',
    fontFamily: 'Montserrat, sans-serif',
    textAlign: 'center',
    flex: '0 0 auto',
    fontSize: '1.5rem',
    padding: '8px',
    borderRadius: '50%',
    overflow: 'visible',
    color: 'rgba(18, 31, 67, 0.54)',
    transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
}

export const orderInfoButtonHover = {
    backgroundColor: 'rgba(18, 31, 67, 0.04)',
}

export const orderInfoGridContainer = {
    boxSizing: 'border-box',
    display: 'flex',
    flexFlow: 'wrap',
    marginTop: '-24px',
    width: 'fit-content',
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'center',
}

export const orderInfoGridItem = {
    boxSizing: 'border-box',
    margin: 0,
    flexDirection: 'row',
    flexBasis: '33.3333%',
    flexGrow: 0,
    maxWidth: '33.3333%',
}

export const orderInfoGridItemPadding = {
    paddingTop: '24px',
    paddingLeft: '24px',
}

export const orderInfoSectionTitle = {
    fontSize: '14px',
    lineHeight: 1,
    fontWeight: 600,
}

export const orderInfoSectionContent = {
    marginTop: '12px',
}

export const orderInfoSectionItemBold = {
    fontSize: '13px',
    fontWeight: 600,
    lineHeight: '1.8',
}
export const orderInfoSectionItem = {
    fontSize: '13px',
    fontWeight: 500,
    lineHeight: '1.8',
}
export const orderInfoAvatarContainer = {
    display: 'flex',
    alignItems: 'center',
    marginTop: '24px',
}

export const orderInfoAvatar = {
    width: '50px',
    height: '50px',
    overflow: 'hidden',
    borderRadius: '50%',
    backgroundColor: 'rgba(36, 153, 239, 0.08)',
}

export const orderInfoAvatarTextContainer = {
    marginLeft: '8px',
}

export const orderInfoAvatarText = {
    fontSize: '13px',
    fontWeight: 600,
}
export const orderInfoCode = {
    fontSize: '13px',
    fontWeight: 600,
    color: 'rgb(140, 163, 186)',
    marginTop: '1.2rem',
}

export const orderInfoAvatarSubText = {
    fontSize: '13px',
    fontWeight: 500,
    lineHeight: '1.6',
}
