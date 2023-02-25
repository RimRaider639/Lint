import { Route, Routes } from "react-router-dom";
import CardsBox from "../Components/CardsBox";
import AddProducts from "./AddProduct";
import EditPage from "./EditPage";
import InventoryMain from "./InventoryMain";
import Orders from "./Orders";
import Users from "./Users";

const MainRoutes = ()=>{

    return<>
    <Routes>
        <Route path="/" element={<CardsBox/>}/>
        <Route path="/inventory" element={<InventoryMain/>}/>
        <Route path="/edit/:id" element={<EditPage/>}/>
        <Route path="/add" element={<AddProducts/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/orders" element={<Orders/>}/>
    </Routes>
    </>
}

export default MainRoutes;