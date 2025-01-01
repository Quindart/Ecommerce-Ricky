import React, { useState } from 'react'
import TextField from '../../components/TextField'
import { useForm } from 'react-hook-form'
import { useHandleCreateOrder } from '../../hooks/useCreateOrder'
import { useSelector } from 'react-redux'
import Loading from '../../components/Loading'

import Dropdown from '../../components/Dropdown'
import {
  useFetchCommunes,
  useFetchDistrict,
  useFetchProvince,
} from '../../hooks/useFetchProvince'
import Button from '../../components/Button'

const CheckoutField = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm()

  const { handleCreateOrder, loading } = useHandleCreateOrder()

  const provinces = useFetchProvince()
  const [selectedProvince, setSelectedProvince] = useState('01')
  const [selectedDistrict, setSelectedDistrict] = useState('001')
  const [selectedCommune, setSelectedCommune] = useState('0001')

  const districts = useFetchDistrict(selectedProvince)
  const communes = useFetchCommunes(selectedDistrict)
  const user_id = useSelector((state) => state?.auth?.user?.user?.id)

  const onSubmit = ({ coupon, street, ...shipping_detail }) => {
    const data = {
      shipping_detail: {
        ...shipping_detail,
        address: {
          provinceName: selectedProvince,
          districtName: selectedDistrict,
          wardName: selectedCommune,
          detail: street,
          zipCode: '530000',
          country: 'VietNam',
        },
      },
      user_id: user_id,
    }
    console.log(data)
    handleCreateOrder(data)
    setSelectedCommune('')
    setSelectedDistrict('')
    setSelectedProvince('')
    reset()
  }

  const handleChangeProvince = (e) => {
    setSelectedProvince(e.target.value)
  }

  const handleChangeDistrict = (e) => {
    setSelectedDistrict(e.target.value)
  }

  const handleChangeCommune = (e) => {
    setSelectedCommune(e.target.value)
  }

  if (loading) {
    return <Loading />
  }

  return (
    <form
      className="checkout__billing-fields"
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        className="checkout__billing-fields-left form-row"
        label="Full name *"
        type="text"
        disabled={false}
        color="blue"
        id="fullName"
        name="fullName"
        register={register}
        validate={{
          required: 'This field cannot be empty.',
        }}
        errors={errors}
      />
      <TextField
        className="checkout__billing-fields-right form-row"
        label="Email address *"
        type="email"
        disabled={false}
        color="blue"
        id="email"
        name="email"
        register={register}
        validate={{
          required: 'This field cannot be empty.',
        }}
        errors={errors}
      />
      <TextField
        className="form-row"
        label="Your phone number *"
        type="text"
        disabled={false}
        color="blue"
        id="phone"
        name="phone"
        register={register}
        validate={{
          required: 'This field cannot be empty.',
          pattern: {
            value: /(0[3|5|7|8|9])+([0-9]{8})\b/,
            message: 'Phone number is valid',
          },
        }}
        errors={errors}
      />

      <Dropdown
        options={provinces?.map((province) => ({
          value: province?.idProvince,
          label: province?.name,
        }))}
        onChange={handleChangeProvince}
        className="form-row"
        id="provinceDropdown"
        label="Province"
      />
      <Dropdown
        options={districts?.map((district) => ({
          value: district?.idDistrict,
          label: district?.name,
        }))}
        onChange={handleChangeDistrict}
        className="form-row"
        id="districtDropdown"
        label="District"
      />
      <Dropdown
        options={communes?.map((commune) => ({
          value: commune?.idCommune,
          label: commune?.name,
        }))}
        onChange={handleChangeCommune}
        className="form-row"
        id="communeDropdown"
        label="Commune"
      />
      <TextField
        className="form-row"
        label="Your Street *"
        type="text"
        disabled={false}
        color="blue"
        id="street"
        name="street"
        register={register}
        validate={{
          required: 'This field cannot be empty.',
        }}
        errors={errors}
      />
      <Button
        htmlType="submit"
        type="primary"
        className="w-100 text-center mt-2"
        onClick={handleSubmit(onSubmit)}
      >
        Create Order
      </Button>
    </form>
  )
}

export default CheckoutField
