import { useEffect, useState } from 'react'
import { provinceService } from '../services/api-province'

export const useFetchProvince = () => {
  const [provinces, setProvinces] = useState([])

  useEffect(() => {
    const handleFetchCountry = async () => {
      try {
        const response = await provinceService.apiGetProvinces()
        setProvinces(response)
      } catch (error) {
        console.error('Error fetching provinces:', error)
      }
    }
    handleFetchCountry()
  }, [])
  return provinces
}

export const useFetchDistrict = (idProvince) => {
  const [districts, setDistricts] = useState([])
  useEffect(() => {
    const handleFetchDistrict = async () => {
      try {
        const response = await provinceService.apiGetDistrict(idProvince)
        setDistricts(response)
      } catch (error) {
        console.error('Error fetching districts:', error)
      }
    }
    handleFetchDistrict()
  }, [idProvince])

  return districts
}

export const useFetchCommunes = (idDistrict) => {
  const [communes, setCommunes] = useState([])
  useEffect(() => {
    const handleFetchCommunes = async () => {
      try {
        const response = await provinceService.apiGetCommune(idDistrict)
        setCommunes(response)
      } catch (error) {
        console.error('Error fetching communes:', error)
      }
    }
    handleFetchCommunes()
  }, [idDistrict])

  return communes
}
