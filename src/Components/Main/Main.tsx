import { useSelector, useDispatch } from "react-redux"
import style from "../../style/styleOfMain.module.css";
import {AppDispatch , RootState} from "../../redux/store";
import { useMemo } from "react";
import {getApi} from '../../redux/slice';


export const Main = () => {
    const useAppDispatch = useDispatch.withTypes<AppDispatch>();
    const useAppSelector = useSelector.withTypes<RootState>();
    const dispatch = useAppDispatch();
    const slice = useAppSelector(state => state.one);

    useMemo(() => {
        dispatch(getApi());
    } , [])
   
    return (
       <>
       </> 
    )
}
