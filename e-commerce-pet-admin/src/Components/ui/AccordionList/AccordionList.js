import { Box } from '@mui/material'
import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Button from '../Button/Button'
import { APP_ICON } from '../../../Utils/Constants'
import { Icon } from '@iconify/react'

function AccordionList(props) {
    const { handleOpenModalAdd, list } = props
    const [isActive, setActive] = useState(false)
    return (
        <Box className="mt-4">
            {list.map((item, key) => (
                <Accordion
                    key={key}
                    onChange={(e) => {
                        setActive(!isActive)
                    }}
                    className="my-3 text-slate-600"
                    disableSpacing
                >
                    <AccordionSummary
                        expandIcon={
                            <Box>
                                <Button
                                    onClick={() => handleOpenModalAdd(`,${item.name},`)}
                                    className="m-1 w-5 p-0"
                                    variant="container"
                                    color="green"
                                >
                                    <Icon icon={APP_ICON.i_plus} width={18} />
                                </Button>
                            </Box>
                        }
                        className={`font-bold uppercase text-sky-600`}
                    >
                        <Icon className="mx-3" icon="flat-color-icons:folder" width={20} />
                        {item.name}
                    </AccordionSummary>
                    <AccordionDetails>
                        {item.child.map((mini, key) => (
                            <Accordion key={key} className="my-2">
                                <AccordionSummary aria-controls="panel1-content" id="panel1-header">
                                    <Icon className="mx-3" icon="flat-color-icons:file" width={20} />
                                    {mini.name}
                                </AccordionSummary>
                            </Accordion>
                        ))}
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    )
}

export default AccordionList
