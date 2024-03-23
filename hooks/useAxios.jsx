import axios from "axios"
import { useSelector } from "react-redux"

const useAxios = () => {
  const { token } = useSelector((state) => state.auth)

  const axiosWithToken = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    headers: { Authorization: `Bearer ${token}` },
  })

  const axiosPublic = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}`,
  })
  return { axiosWithToken, axiosPublic }
}

export default useAxios