import { useEffect, useState } from 'react';
import style from '../../style/styleOfReload.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {getApi} from '../../redux/slice';
import {AppDispatch , RootState} from "../../redux/store";
import { useNavigate } from 'react-router-dom';

type TypeReload = {
    translate: string ,
    opacity: string
};



export const Reload = () => {
    const useAppDispatch = useDispatch.withTypes<AppDispatch>()
    const useAppSelector = useSelector.withTypes<RootState>()
    const statuse = useAppSelector(state => state.one)
    const dispatch = useAppDispatch() 
    const [logo ,setLogo] = useState("-50vh");
    const [reload , setReload] = useState<TypeReload> ({translate: "-5vh" , opacity: "0%"});
    const [palka , setPalka] = useState<string>("");
    const navigate = useNavigate();

    
    useEffect(() => {
        dispatch(getApi());
    } , [])

         const timerLogo = setTimeout((): void => {
            setLogo("0vh");
            clearTimeout(timerLogo)
        } , 1000)
        const timerReload = setTimeout(():void => {
            setReload({translate: "0vh" , opacity: "100%"});
            clearTimeout(timerReload);
            const int = setTimeout(() => {
                if(palka.length < 20 && statuse.loading) {
                setPalka(palka + "|")
                } else if(palka.length === 20) {
                    setPalka("");
                } else {
                    clearTimeout(int);
                    navigate("/main")
                }
            } , 1000)
        } , 3000)

        

    return (
        <div id={style.body}>
        <div id={style.container}>

        <div id={style.logo}><p style={{transform: `translateX(${logo})` , transition: "1s all linear"}}>MOB-X</p></div>
        <div id={style.lineReload}><p>{palka}</p></div>
        <div id={style.textReload}><p style={{transform: `translateY(${reload.translate})` , opacity: `${reload.opacity}` , transition: "1s all linear"}}>Loading</p></div>

        </div>
        </div>
    )
}