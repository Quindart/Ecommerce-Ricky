import { Icon } from '@iconify/react'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { getNewUrlByParams } from '../../utils/url'
import { PARAMS_FILTER } from '../../utils/constants'

const SORT_LIST = [
  {
    id: 1,
    sortName: 'Default sorting',
    sortValue: 'menu_order',
  },
  {
    id: 2,
    sortName: 'Sort by popularity',
    sortValue: 'popularity',
  },
  {
    id: 3,
    sortName: 'Sort by average rating',
    sortValue: 'rating',
  },
  {
    id: 4,
    sortName: 'Sort by latest',
    sortValue: 'date',
  },
  {
    id: 5,
    sortName: 'Sort by price: low to high',
    sortValue: 'price',
  },
  {
    id: 6,
    sortName: 'Sort by price: high to low',
    sortValue: 'price-desc',
  },
]

const SelectFilter = (props) => {
  const { params, handleClickFilter } = props

  const [openSelect, setOpenSelect] = useState(false)

  const menuRef = useRef()

  useEffect(() => {
    const filter = Array.from(document.querySelectorAll('.select-filter__item'))

    const handleClickOutside = (e) => {
      if (!menuRef.current.contains(e.target) && !filter.includes(e.target)) {
        setOpenSelect(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [openSelect])

  const handleSelect = () => {
    setOpenSelect(!openSelect)
  }

  const handleSelectFilter = (e) => {
    handleSelect()
    handleClickFilter(e)
    // const filter = e.currentTarget.dataset.filter
    // const value = e.currentTarget.dataset.value
    // const sortParam = { [filter]: value }
    // const newUrl = getNewUrlByParams(params, sortParam)
    // window.location.href = newUrl
  }

  const displaySort = (sortValue) => {
    const sortOption = SORT_LIST.find(item => item.sortValue === sortValue);
    return sortOption.sortName;
  }

  return (
    <>
      <div className="select-filter">
        <div>
          <div
            className="select-filter__wrap"
            onClick={handleSelect}
            ref={menuRef}
          >
            <span className="select-filter__title">{params.orderby ? displaySort(params.orderby) : "Default sorting"}</span>
            <Icon className="select-filter__icon" icon="fa-solid:angle-down" />
          </div>
          {openSelect && (
            <ul className="select-filter__list">
              {SORT_LIST.map((item) => (
                <>
                  <li
                    id={item.id}
                    className={`select-filter__item${params?.orderby === item.sortValue ? " select-filter__item--active" : ""}`}
                    onClick={handleSelectFilter}
                    data-filter={PARAMS_FILTER.sort}
                    data-value={item.sortValue}
                  >
                    {item.sortName}
                  </li>
                </>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  )
}
export default SelectFilter
