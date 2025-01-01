import React, { useEffect, useState } from 'react'
import TextField from '../TextField'
import { useForm } from 'react-hook-form'
import useDebounce from '../../hooks/useDebounce'
import { useNavigate } from 'react-router-dom'
import formatter from '../../utils/formatterMoney'
import { Icon } from '@iconify/react'
import { apiSearch } from '../../services/api'

const Search = () => {
  const [searchResults, setSearchResults] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const { register, reset, watch } = useForm()
  const searchValue = watch('search', '')
  const debouncedSearchValue = useDebounce(searchValue, 500)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchResults = async () => {
      if (debouncedSearchValue === '') {
        setSearchResults('')
        setIsLoading(false)
      } else {
        setIsLoading(true)
        const results = await apiSearch(debouncedSearchValue)
        setSearchResults(results.list_product)
        setIsLoading(false)
      }
    }

    fetchResults()
  }, [debouncedSearchValue])

  const handleNavigateProductDetail = (item) => {
    navigate(`product-detail/${item?._id}`)
    setSearchResults('')
    reset()
  }

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 670,
      }}
      className="mx-auto"
    >
      <div className="search mx-auto">
        <div className="search__title">What Are You Looking For?</div>
        <form
          className="search__form"
          onSubmit={(e) => {
            e.preventDefault()
          }}
        >
          <div style={{ position: 'relative' }}>
            <div>
              {isLoading === true ? (
                <Icon
                  className="search__loading"
                  width={20}
                  height={20}
                  icon="eos-icons:loading"
                />
              ) : null}
            </div>
            <TextField
              placeholder="Start typing..."
              id="search"
              register={register}
              type="search-type"
              color="blue"
            />
            <button
              onClick={() => reset()}
              className={`h-cb search__clear ${
                searchValue !== '' ? 'active' : ''
              }`}
            >
              <Icon icon="pajamas:close-xs" />
              <span>CLEAR</span>
            </button>
          </div>
        </form>
      </div>
      {searchValue !== '' && searchResults ? (
        <div className="search__result" style={{ width: '100%' }}>
          {searchResults?.map((item, index) => (
            <div
              key={index}
              onClick={() => handleNavigateProductDetail(item)}
              className="search__result--link"
            >
              <div className="search__result--thumb">
                <img className="img-fluid" src={item?.images[0]?.url} alt="" />
              </div>
              <div className="search__result--col">
                <div className="search__result--col-title">{item?.name}</div>
                <div className="search__result--col-desc">
                  <p>{item?.description}</p>
                </div>
                <div className="search__result--col-price">
                  <span>{formatter(item?.price)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : null}
      {searchResults && searchResults.length === 0 && (
        <div className="no-result">No results found</div>
      )}
    </div>
  )
}

export default Search
