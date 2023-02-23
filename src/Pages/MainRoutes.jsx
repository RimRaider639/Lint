import { Route, Routes } from "react-router-dom";
import CardsBox from "../Components/CardsBox";
import InventoryMain from "./InventoryMain";

const MainRoutes = ()=>{

    return<>
    <Routes>
        <Route path="/" element={<CardsBox/>}/>
        <Route path="/inventory" element={<InventoryMain/>}/>
    </Routes>
    </>
}

export default MainRoutes;