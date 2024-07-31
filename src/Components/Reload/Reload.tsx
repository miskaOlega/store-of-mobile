import { useMemo, useState } from 'react'
import style from '../../style/styleOfReload.module.css'

type TypeReload = {
    translate: string ,
    opacity: string
}

export const Reload = () => {
    const [logo ,setLogo] = useState("-50vh");
    const [reload , setReload] = useState<TypeReload> ({translate: "-5vh" , opacity: "0%"})
    

    useMemo(() => {
         setTimeout((): void => {
            setLogo("0vh")
        } , 1000)
        setTimeout(():void => {
            setReload({translate: "0vh" , opacity: "100%"})
        } , 3000)
        setTimeout(():void => {
            const int = setInterval(():void => {
               
            } , 5000)
        } , 4000)
    } , [])

    return (
        <div id={style.body}>
        <div id={style.container}>

        <div id={style.logo}><p style={{transform: `translateX(${logo})` , transition: "1s all linear"}}>MOB-X</p></div>
        <div id={style.lineReload}><p>|||||||||||||||||||||</p></div>
        <div id={style.textReload}><p style={{transform: `translateY(${reload.translate})` , opacity: `${reload.opacity}` , transition: "1s all linear"}}>Loading</p></div>

        </div>
        </div>
    )
}