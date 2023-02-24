import { Route, Routes } from "react-router-dom";
import CardsBox from "../Components/CardsBox";
import EditPage from "./EditPage";
import InventoryMain from "./InventoryMain";

const MainRoutes = ()=>{

    return<>
    <Routes>
        <Route path="/" element={<CardsBox/>}/>
        <Route path="/inventory" element={<InventoryMain/>}/>
        <Route path="/edit/:id" element={<EditPage/>}/>
    </Routes>
    </>
}

export default MainRoutes;