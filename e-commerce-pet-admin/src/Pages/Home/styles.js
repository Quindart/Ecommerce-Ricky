export const Card = {
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '1rem',
}
// styles.js
export const gridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '2px',
    '@media (min-width: 0px)': {
        gridTemplateColumns: 'repeat(4, 1fr)',
    },
    '@media (min-width: 510px)': {
        gridTemplateColumns: 'repeat(4, 1fr)',
        fontSize: '0.75rem',
    },
    '@media (min-width: 660px)': {
        gridTemplateColumns: 'repeat(10, 1fr)',
    },
    '@media (min-width: 960px)': {
        gridTemplateColumns: 'repeat(5, 1fr)',
    },
    '@media (min-width: 1260px)': {
        gridTemplateColumns: 'repeat(5, 1fr)',
    },
}

export const imageStyles = {
    height: '100%',
    width: '100%',
    borderRadius: '50%',
    objectFit: 'cover',
}

export const gridColumnStyles = {
    gridColumn: 'span 2',
    '@media (min-width: 0px)': {
        gridColumn: 'span 2',
    },
    '@media (min-width: 510px)': {
        gridColumn: 'span 2',
        fontSize: '0.75rem',
    },
    '@media (min-width: 660px)': {
        gridColumn: 'span 8',
    },
    '@media (min-width: 960px)': {
        gridColumn: 'span 3',
    },
    '@media (min-width: 1260px)': {
        gridColumn: 'span 3',
    },
}

export const cardStyles = {
    maxHeight: '296px',
    '@media (min-width: 0px)': {
        gridColumn: 'span 4',
        gridRow: 'span 2',
    },
    '@media (min-width: 510px)': {
        gridColumn: 'span 4',
        gridRow: 'span 2',
    },
    '@media (min-width: 660px)': {
        gridColumn: 'span 4',
    },
    '@media (min-width: 960px)': {
        gridColumn: 'span 4',
        gridRow: 'span 4',
    },
    '@media (min-width: 1260px)': {
        gridColumn: 'span 2',
        gridRow: 'span 1',
    },
}
