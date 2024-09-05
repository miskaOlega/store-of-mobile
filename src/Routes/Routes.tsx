import { Routes , Route } from "react-router-dom";
import  {Main}  from "../Components/Main/Main";
import { Reload } from "../Components/Reload/Reload";



export const Routers = () => {
    return (
        <>
        <Routes>
        <Route path="/" element={<Reload />} />
        <Route path="/main" element={<Main />} />
        </Routes>
        </>
    )
}