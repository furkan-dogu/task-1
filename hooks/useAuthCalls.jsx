import { useDispatch } from "react-redux";
import useAxios from "./useAxios";
import {
  fetchFail,
  fetchStart,
  loginSuccess,
  registerSuccess,
} from "@/redux/features/authSlice";
import { useRouter } from "next/navigation";

const useAuthCalls = () => {
  const dispatch = useDispatch();
  const { axiosPublic } = useAxios();
  const router = useRouter()

  const login = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic.post("/auth/login", userInfo);
      dispatch(loginSuccess(data));
      router.push("/dashboard")
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const register = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic.post("/auth/register", userInfo);
      dispatch(registerSuccess(data));
      router.push("/login")
    } catch (error) {
      dispatch(fetchFail());
    }
  };
  return { login, register };
};

export default useAuthCalls;
