import React from 'react'

const TabContent = ({ activeTabData }) => {
    return (
        <div>
            <h1 className="mt-2">{activeTabData ? activeTabData.title : ''}</h1>
        </div>
    )
}

export default TabContent
