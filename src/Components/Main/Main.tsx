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
   console.log(slice.api)
    return (
       <>
       <header id={style.headerMain}>

        <div id={style.logo}><h1>MOB-X</h1></div>
        <div id={style.brochure}></div>
        <div id={style.kabinet}></div>

       </header>
       </> 
    )
}
