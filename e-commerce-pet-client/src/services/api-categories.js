import axiosConfig from './axiosConfig'
const apiGetTreeCategory = async () => {
  const response = await axiosConfig.get('/categorys/tree_category')
  return response
}

const categoryService = {
  apiGetTreeCategory,
}
export default categoryService
