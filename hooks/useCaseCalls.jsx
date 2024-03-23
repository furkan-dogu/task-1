import { useDispatch } from "react-redux";
import useAxios from "./useAxios";
import {
    fetchFail,
    fetchStart,
    getCasesSuccess,
    getFlagsSuccess
  } from "@/redux/features/caseSlice";

const useCaseCalls = () => {
    const { axiosWithToken } = useAxios();
    const dispatch = useDispatch();
    const getCases = async () => {
        dispatch(fetchStart());
        try {
          const { data } = await axiosWithToken(`/boards`);
          dispatch(getCasesSuccess(data));
        } catch (error) {
          dispatch(fetchFail());
          console.log(error);
        }
      };
      const deleteCase = async (code) => {
        dispatch(fetchStart());
        try {
          await axiosWithToken.delete(`/tasks/${code}`);
          getCases()
        } catch (error) {
          dispatch(fetchFail());
          console.log(error);
        }
      };
      const postTask = async (info) => {
        dispatch(fetchStart());
        try {
          await axiosWithToken.post("/tasks/", info);
          getCases();
        } catch (error) {
          dispatch(fetchFail());
          console.log(error);
        }
      };
      const getFlags = async () => {
        dispatch(fetchStart());
        try {
          const { data } = await axiosWithToken(`/commons/flags`);
          dispatch(getFlagsSuccess(data));
          getCases()
        } catch (error) {
          dispatch(fetchFail());
          console.log(error);
        }
      };
  return {getCases, deleteCase, postTask, getFlags}
}

export default useCaseCalls