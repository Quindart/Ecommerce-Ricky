import axiosConfig from './axiosConfig'
const apiUrl =
  'https://vietnam-administrative-division-json-server-swart.vercel.app'

const apiGetProvinces = async () => {
  const response = await axiosConfig.get(`${apiUrl}/province`)
  return response
}

const apiGetDistrict = async (idProvince) => {
  const response = await axiosConfig.get(
    `${apiUrl}/district/?idProvince=${idProvince}`
  )
  return response
}

const apiGetCommune = async (idDistrict) => {
  const response = await axiosConfig.get(
    `${apiUrl}/commune/?idDistrict=${idDistrict}`
  )
  return response
}

export const provinceService = {
  apiGetProvinces,
  apiGetDistrict,
  apiGetCommune,
}
