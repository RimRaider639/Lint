import { Route, Routes } from "react-router-dom";
import CardsBox from "../Components/CardsBox";
import AddProducts from "./AddProduct";
import EditPage from "./EditPage";
import InventoryMain from "./InventoryMain";

const MainRoutes = ()=>{

    return<>
    <Routes>
        <Route path="/" element={<CardsBox/>}/>
        <Route path="/inventory" element={<InventoryMain/>}/>
        <Route path="/edit/:id" element={<EditPage/>}/>
        <Route path="/add" element={<AddProducts/>}/>
    </Routes>
    </>
}

export default MainRoutes;