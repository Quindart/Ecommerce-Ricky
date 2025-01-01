import React, { useState } from 'react'
import Textfield from '../../../src/Components/ui/Textfield/Textfield.js'
import Button from '../../../src/Components/ui/Button/Button.js'
import { APP_ICON } from '../../Utils/Constants.js'
import { Icon } from '@iconify/react'
import Dropdown from '../../Components/ui/Dropdown/Dropdown.js'
import Switch from '@mui/material/Switch'
const ARRAY_LIST_CURRENCY = [
    {
        title: 'USA',
        value: 10,
    },
    { title: 'EURO', value: 20 },
    { title: 'TAKA', value: 30 },
]
const label = { inputProps: { 'aria-label': 'Switch demo' } }
const CreateInvoice = () => {
    return (
        <div className="py-6">
            <div className="mx-auto my-0 flex w-[90%] max-lg:w-full max-lg:flex-col">
                <div className="mr-6 w-4/6 overflow-hidden rounded-lg bg-white p-6 max-lg:w-full">
                    <div className="flex">
                        <div className="mr-1 text-2xl font-semibold text-[#121f43]">Invoice #</div>
                        <span className="mt-auto text-sm font-semibold  leading-6 text-[#8CA3BA]">12345678</span>
                    </div>
                    <hr className="col-start-1 col-end-4 my-2 border-t border-[#D3E6F3]" />
                    <div className="mt-4 grid grid-cols-2 max-sm:grid-cols-1">
                        <div className="pr-3 max-sm:pr-0">
                            <div className="mb-3 text-sm font-semibold text-[#121f43]">Bill From:</div>
                            <Textfield type="text" placeholder="Name" label="Name" className="my-6" />
                            <Textfield type="text" placeholder="Email" label="Email" className="my-6" />
                            <label className="relative">
                                <textarea
                                    type="text"
                                    name=""
                                    required
                                    rows="3"
                                    placeholder="Who is this invoice from?"
                                    className="text-wrap peer h-[100px] w-full resize-none rounded-lg border border-[#B1C9DC] px-3.5 py-4 font-medium leading-5 text-[#121F43] outline-none duration-200 placeholder:text-base placeholder:text-[#90a6bc] hover:border-[#121F43] focus:border-[#2499ef] focus:ring-1 focus:ring-[#2499ef]"
                                ></textarea>
                                <span className="pointer-events-none absolute left-[15px] top-[-70px] bg-white text-base font-medium text-[#B1C9DC] duration-200 peer-valid:-translate-y-6 peer-valid:text-xs peer-valid:font-semibold peer-focus:left-[12px] peer-focus:-translate-y-6 peer-focus:px-1 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-[#2499ef]">
                                    Who is this invoice from?
                                </span>
                            </label>
                        </div>
                        <div className="pl-3 max-sm:pl-0">
                            <div className="mb-3 text-sm font-semibold text-[#121f43]">Bill To:</div>
                            <Textfield type="text" placeholder="Name" label="Name" className="my-6" />
                            <Textfield type="text" placeholder="Email" label="Email" className="my-6" />
                            <label className="relative">
                                <textarea
                                    type="text"
                                    name=""
                                    required
                                    rows="3"
                                    placeholder="Who is this invoice for?"
                                    className="text-wrap peer h-[100px] w-full resize-none rounded-lg border border-[#B1C9DC] px-3.5 py-4 font-medium leading-5 text-[#121F43] outline-none duration-200 placeholder:text-base placeholder:text-[#90a6bc] hover:border-[#121F43] focus:border-[#2499ef] focus:ring-1 focus:ring-[#2499ef]"
                                ></textarea>
                                <span className="pointer-events-none absolute left-[15px] top-[-70px] bg-white text-base font-medium text-[#B1C9DC] duration-200 peer-valid:-translate-y-6 peer-valid:text-xs peer-valid:font-semibold peer-focus:left-[12px] peer-focus:-translate-y-6 peer-focus:px-1 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-[#2499ef]">
                                    Who is this invoice for?
                                </span>
                            </label>
                        </div>
                    </div>
                    <div className="scroll mt-7 block w-full overflow-x-auto">
                        <div className="db-lg:w-full box-border grid h-auto w-[700px] grid-cols-12 gap-5">
                            <div className="col-span-3 p-4 pl-0 text-left text-xs font-semibold text-[#121F43]">
                                Item
                            </div>
                            <div className="col-span-3 p-4 pl-0 text-left text-xs font-semibold text-[#121F43]">
                                Qty
                            </div>
                            <div className="col-span-3 p-4 pl-0 text-left text-xs font-semibold text-[#121F43]">
                                Price
                            </div>
                            <div className="col-span-3 grid grid-cols-2">
                                <div className="ml-7 p-4 text-left text-xs font-semibold text-[#121F43]">Total</div>
                                <div className="right-0 ml-7 p-4 text-left text-xs font-semibold text-[#121F43]">
                                    Action
                                </div>
                            </div>
                            <div className="col-span-3">
                                <Textfield
                                    type="text"
                                    placeholder="Name"
                                    label="Name"
                                    className="w-full min-w-0"
                                ></Textfield>
                            </div>
                            <div className="col-span-3">
                                <Textfield
                                    type="text"
                                    placeholder="Qty"
                                    label="Qty"
                                    className="w-full min-w-0"
                                ></Textfield>
                            </div>
                            <div className="col-span-3">
                                <Textfield
                                    type="text"
                                    placeholder="Price"
                                    label="Price"
                                    className="w-full min-w-0"
                                ></Textfield>
                            </div>
                            <div className="col-span-3 grid grid-cols-2">
                                <div className="my-auto ml-7 text-xs font-semibold text-[#121F43]">$ 50.00</div>
                                <div className="my-auto ml-9">
                                    <Button icon size="md" variant="outline" color="grey">
                                        <Icon icon={APP_ICON.i_trash} />
                                    </Button>
                                </div>
                            </div>
                            <div className="col-span-3 mb-2">
                                <Textfield
                                    type="text"
                                    placeholder="Name"
                                    label="Name"
                                    className="w-full min-w-0"
                                ></Textfield>
                            </div>
                            <div className="col-span-3 mb-2">
                                <Textfield
                                    type="text"
                                    placeholder="Qty"
                                    label="Qty"
                                    className="w-full min-w-0"
                                ></Textfield>
                            </div>
                            <div className="col-span-3 mb-2">
                                <Textfield
                                    type="text"
                                    placeholder="Price"
                                    label="Price"
                                    className="w-full min-w-0"
                                ></Textfield>
                            </div>
                            <div className="col-span-3 mb-2 grid grid-cols-2">
                                <div className="my-auto ml-7 text-xs font-semibold text-[#121F43]">$ 50.00</div>
                                <div className="my-auto ml-9">
                                    <Button icon size="md" variant="outline" color="grey">
                                        <Icon icon={APP_ICON.i_trash} />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="col-start-1 col-end-4 mb-2 mt-4 border-t border-[#D3E6F3]" />
                    <div className="flex max-sm:flex-col">
                        <div className="w-2/3 max-sm:w-full">
                            <button className="text-sm font-semibold text-[#2499ef]">Add Item</button>
                        </div>
                        <div className="mr-0 w-1/3 pl-6 max-sm:w-full max-sm:pl-0">
                            <div className="my-2 flex justify-between text-sm font-semibold text-[#121f43]">
                                <div>Subtotal</div>
                                <div>$ 50</div>
                            </div>

                            <div className="mb-2 flex justify-between text-sm font-semibold text-[#121f43]">
                                <div>VAT</div>
                                <div>$ 0.00</div>
                            </div>
                            <div className="flex justify-between text-sm font-semibold text-[#121f43]">
                                <div>Discount</div>
                                <div>$ 0.00</div>
                            </div>
                            <hr className="my-4 border-t border-[#D3E6F3]" />
                            <div className="flex justify-between text-sm font-semibold text-[#121f43]">
                                <div>Total</div>
                                <div>$ 50</div>
                            </div>
                        </div>
                    </div>
                    <div className="py-4">
                        <div className="mb-4 text-sm font-semibold text-[#121F43]">Notes</div>
                        <textarea
                            type="text"
                            name=""
                            required
                            rows="2"
                            placeholder="Thank"
                            className="text-wrap peer w-full resize-none rounded-lg border border-[#B1C9DC] px-3.5 py-4 font-medium leading-5 text-[#121F43] outline-none duration-200 placeholder:text-base placeholder:text-[#90a6bc] hover:border-[#121F43] focus:border-[#2499ef] focus:ring-1 focus:ring-[#2499ef]"
                        ></textarea>
                    </div>
                </div>
                <div className="h-full w-2/6 overflow-hidden rounded-lg bg-white p-6 max-lg:mt-6 max-lg:w-full">
                    <div>
                        <div className="mb-3 text-sm font-semibold text-[#121f43]">Currency</div>
                        <Dropdown list={ARRAY_LIST_CURRENCY} />
                    </div>
                    <hr className="col-start-1 col-end-4 my-6 border-t border-[#D3E6F3]" />
                    <div>
                        <div className="flex items-center justify-between">
                            <div className='text-[#121f43]" text-sm font-semibold'>Payment Method</div>
                            <Switch {...label} defaultChecked />
                        </div>
                        <div className="my-6 flex items-center justify-between">
                            <div className='text-[#121f43]" text-sm font-semibold'>Late Fees</div>
                            <Switch {...label} defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className='text-[#121f43]" text-sm font-semibold'>Notes</div>
                            <Switch {...label} defaultChecked />
                        </div>
                    </div>
                    <hr className="col-start-1 col-end-4 my-6 border-t border-[#D3E6F3]" />
                    <div className="w-full">
                        <div className="flex w-full flex-wrap justify-between gap-5">
                            <Button
                                className="w-full font-semibold text-[#121f43] lg:w-1/2-gap-5"
                                size="sm"
                                variant="outline"
                                color="primary"
                            >
                                Preview
                            </Button>
                            <Button
                                className=" w-full font-semibold text-[#121f43] lg:w-1/2-gap-5"
                                size="sm"
                                variant="outline"
                                color="primary"
                            >
                                Download
                            </Button>
                        </div>
                        <div className="mt-5 w-full">
                            <Button className="w-full font-semibold" size="sm" color="primary">
                                <Icon icon={APP_ICON.i_send} className="mr-1" />
                                Send voice
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateInvoice
