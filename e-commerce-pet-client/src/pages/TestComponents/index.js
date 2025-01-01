import Checkbox from '../../components/CheckBox'
import ProductCard from '../../components/ProductCard'
import Button from '../../components/Button'
import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Icon } from '@iconify/react'
import InputQuantity from '../../components/InputQuantity'
import formatter from '../../utils/formatterMoney'
import UseTranslate from '../../utils/translate'
import Breadcrumb from '../../components/Breadcrumb'
import Accordin from '../../components/Accordin/Accordin'

import { useSnackbar } from 'notistack'
import QuantityTextField from '../../components/QuantityTextField'

import Tab from '../../components/Tab'

import InputText from '../../components/InputText'
import Badge from '../../components/Badge'
import TabContent from '../../components/Tab/TabContent'
import Pagination from '../../components/Pagination'
import Modal from '../../components/Modal'
import useModal from '../../hooks/useModal'
import ProductQuickview from '../../components/Product/ProductQuickview'
import demo from '../../assets/img/ricky-118-460x373.jpg'
import ProductContext from '../../components/Product/ProductContext'
import { useDispatch } from 'react-redux'
import Dropdown from '../../components/Dropdown'
import SelectFilter from '../Product/SelectFilter'
import TextField from '../../components/TextField'

const data = {
  _id: '1',
  name: 'American Journey Landmark Chicken',
  description:
    'Cats are natural carnivores, so they thrive on a diet that’s high in animal protein.',
  brand: 'Whole Hearted',
  price: 20,
  code: 2316548235,
  avaiable: 10,
  dimensions: {
    height: 8,
    weight: 8,
    length: 8,
    width: 8,
  },
}

const data1 = {
  avaiable: 8,
  brand: 'no brand',
  category: {
    _id: '658c2b67bc44f84fa60347b7',
    code: 'FS296L',
    name: 'fish aquariums & decor',
    total: 200,
  },
  code: 'AHKCFPDL',
  description:
    'Wonder and joy await you with this fin-tastic biOrb Classic LED Fish Aquarium! The natural beauty of the aquatic world is on full display with this 360-degree dish bowl. You’ll receive a low voltage pump, LED lighting, filtration, a manual and the aquarium itself.',
  dimensions: { length: 20, width: 20, weight: 900, height: 22 },
  isActive: true,
  name: 'Classic LED Fish Aquarium',
  price: 350000,
  tags: ['Fish Aquariums & Decor', 'Aquariums & Decor', 'Aquariums', 'Decor'],
  _id: '659e5172e74f7eb4d88a2a54',
}

const TestComponents = () => {
  const { enqueueSnackbar } = useSnackbar()

  const [isChecked, setChecked] = useState(false)
  const [dataCard, setDataCard] = useState(data)
  const { showProductModal, handleProductModal } = useModal()
  const refQuantity = useRef(data.quantity || 0)

  // Pagination
  const [currentPage, setCurrentPage] = useState(0)

  const handlePageChange = (newOffset) => {
    setCurrentPage(newOffset)
  }

  // Pagination

  // Tab
  const [currentTab, setCurrentTab] = useState(1)
  const handleTabChange = (tabId) => {
    setCurrentTab(tabId)
  }
  console.log(currentTab)
  // Tab

  const handleChangeQuantity = (quantity) => {
    refQuantity.current = Number(quantity)
    console.log(quantity)
  }

  const [lang, setLang] = useState('')
  useEffect(() => {
    if (localStorage.getItem('lang')) {
      setLang(localStorage.getItem('lang'))
    }
    // localStorage.setItem('lang', 'zh-CN');
  }, [])

  const handleCheckboxChange = () => {
    setChecked(!isChecked)
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
  } = useForm()

  const onSubmit = (value) => {
    console.log(value)
    reset()
  }

  // SHOW TOAST
  function showTopRightCustomSnackbar() {
    enqueueSnackbar(
      '“American Journey Landmark Chicken” has been added to your cart.',
      {
        variant: 'customVariant',
        // persist: false,
        anchorOrigin: { vertical: 'top', horizontal: 'right' },
        autoHideDuration: 3000,
        hideIconVariant: false,
        iconVariant: false,
      }
    )
  }

  const handleClickWarning = (variant) => () => {
    enqueueSnackbar('This is a custom snackbar', {
      variant,
    })
  }

  const handleClickError = (variant) => () => {
    enqueueSnackbar('This is a custom snackbar', {
      variant,
    })
  }

  const handleSnackbar = (variant) => {
    enqueueSnackbar('This is a custom snackbar', {
      variant: 'success', // You can change the variant as needed
    })
  }

  const handleClickInfo = (variant) => () => {
    enqueueSnackbar('This is a custom snackbar', {
      variant,
    })
  }

  // UPDATE INPUT QUANTITY

  const [quantity, setQuantity] = useState(1)
  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity)
  }

  // UPDATE INPUT QUANTITY

  // TAB

  const tabData = [
    {
      id: 1,
      tab: 'Dogs',
      path: 'dog',
      title: 'Anh',
    },
    {
      id: 2,
      tab: 'Cats',
      path: 'cat',
      title: 'Yêu',
    },

    {
      id: 3,
      tab: 'Fish',
      path: 'fish',
      title: 'Em',
    },

    {
      id: 4,
      tab: 'Small Pets',
      path: 'small-pet',
      title: 'Lắm',
    },
  ]

  const paginateData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

  const dispatch = useDispatch()

  return (
    <>
      <div
        style={{
          width: '200px',
          marginLeft: 'auto',
          marginRight: 'auto',
          padding: '20px',
        }}
      >
        <Checkbox label="Remember Me" color="blue" size="c-form" />
      </div>
      <div className="flex items-center gap-5 bg-gray p-20">
        <Button htmlType="submit" type="primary">
          Click me!
        </Button>
        <Button
          onClick={handleClickInfo('info')}
          htmlType="link"
          type="primary"
          ghost
          url="/"
        >
          Read more
        </Button>
        <Button
          onClick={handleSnackbar}
          htmlType="link"
          type="primary"
          url="/"
          color="white"
        >
          Read more
        </Button>
        <Button
          onClick={handleClickError('error')}
          htmlType="link"
          type="primary"
          url="/"
        >
          <span>
            <Icon icon="mdi:play" />
          </span>
          see on video
        </Button>
        <Button
          onClick={handleClickWarning('warning')}
          htmlType="submit"
          type="primary"
          size="small"
          ghost
        >
          filter
        </Button>
        <Button
          onClick={showTopRightCustomSnackbar}
          htmlType="submit"
          type="icon"
        >
          <Icon icon="pepicons-pop:cart" />
        </Button>
        <Button htmlType="submit" type="icon">
          <Icon icon="mingcute:arrow-right-line" />
        </Button>
        <div className="flex-1">
          <Button
            htmlType="submit"
            type="primary"
            className="w-100 text-center"
          >
            Log in
          </Button>
        </div>
        {/* TextField Search */}
        <form>
          <TextField
            className="mt-2"
            label="Your phone number *"
            type="form"
            placeholder=""
            disabled={false}
            color="blue"
            id="phone"
            register={register}
            validate={{
              required: 'This field can not empty.',
              pattern: {
                value: /(0[3|5|7|8|9])+([0-9]{8})\b/,
                message: 'Phone number is valid',
              },
            }}
            errors={errors}
          />
          <Button
            onClick={handleSubmit(onSubmit)}
            htmlType="submit"
            type="primary"
            size="small"
            ghost
            className="cc"
          >
            submit
          </Button>
        </form>
      </div>

      {/* <div>
                <ProductCard data={dataCard} onClick={handleClick} />
            </div> */}

      <div className="container">
        <div className="row">
          <div className="col-12 g-0">
            <div style={{ width: '232px' }}>
              {/* <ProductCard
                data={data}
                handleProductModal={handleProductModal}
              /> */}
            </div>
          </div>
          <div className="col-12 g-0">
            <div className="mt-2 flex" style={{ background: '#fff' }}>
              <div style={{ width: '50%' }}>
                <img
                  src={demo}
                  alt=""
                  style={{ width: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ width: '50%', padding: '35px 50px' }}>
                <ProductContext data={data} type="page" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <QuantityTextField
        className="mt-2"
        value={quantity}
        onChange={handleQuantityChange}
        size="large"
        max={10}
        style={{ margin: '10px' }}
      />
      <span>{formatter(100000)}</span>
      <div>
        <Breadcrumb targetFormat="snake" className="cc"></Breadcrumb>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          margin: '50px 50px',
        }}
      >
        <Accordin className="w-100" message="Coupon code">
          <div style={{ height: 500 }}></div>
        </Accordin>
      </div>

      <Modal
        showProductModal={showProductModal}
        handleProductModal={handleProductModal}
        // full
      >
        <ProductQuickview
          data={data}
          handleChangeQuantity={handleChangeQuantity}
          value={refQuantity.current}
          errors={errors}
          handleProductModal={handleProductModal}
        />
      </Modal>

      <Tab
        data={tabData}
        onChangeTab={handleTabChange}
        style={{
          margin: '0 auto 25px',
          maxWidth: '1160px',
          textAlign: 'center',
          lineHeight: 0,
        }}
      >
        <TabContent />
      </Tab>
      {/* <Pagination
        // onPageChangeCallback={handlePageChange}
        data={paginateData.length}
        url = "page"
      ></Pagination> */}
    </>
  )
}

export default TestComponents
