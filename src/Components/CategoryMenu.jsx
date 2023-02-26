import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { getProducts } from "../Redux/actions";

const CategoryMenu = () => {
    const dispatch = useDispatch();

    const handleCat=(cat)=>{
        dispatch(getProducts(cat))
    }
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Category
        </MenuButton>
        <MenuList>
          <MenuItem value='' onClick={()=>handleCat('Clothing')}>Clothing</MenuItem>
          <MenuItem value='' onClick={()=>handleCat('Footwear')}>Footwear</MenuItem>
          <MenuItem value='' onClick={()=>handleCat('Furniture')}>Furniture</MenuItem>
          <MenuItem value='' onClick={()=>handleCat('Jewellery')}>Jewellery</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default CategoryMenu;
