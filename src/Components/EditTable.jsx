import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  Input,
  Select,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getProducts } from "../Redux/actions";

const EditTable = () => {
  const { id } = useParams();
  const allProducts = useSelector((store) => store.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currentProduct, setCurrentProduct] = useState();

  useEffect(()=>{
    if(allProducts.length===0) dispatch(getProducts())

    console.log(allProducts);

},[allProducts.length, dispatch, allProducts])

  useEffect(()=>{
    if(id){
      const product = allProducts.find((el)=>el._id==(id));
      product && setCurrentProduct(product);
    }
  },[id, allProducts])

  return (
    <>
      <TableContainer mt={"-10"}>
        <Table variant="simple" colorScheme="teal">
          <TableCaption>
            Please verify all details before saving changes
          </TableCaption>
          <Thead>
            <Tr>
              <Th></Th>
              <Th></Th>
            </Tr>
          </Thead>

          <Tbody>
            <Tr>
              <Td>Brand</Td>
              <Td>
                <Input  />
              </Td>
            </Tr>
            <Tr>
              <Td>Product Name</Td>
              <Td>
                <Input  />
              </Td>
            </Tr>
            <Tr>
              <Td>PID</Td>
              <Td>
                <Input  />
              </Td>
            </Tr>
            <Tr>
              <Td>MRP</Td>
              <Td>
                <Input  />
              </Td>
            </Tr>
            <Tr>
              <Td>Selling Price</Td>
              <Td>
                <Input  />
              </Td>
            </Tr>
            <Tr>
              <Td>Discount</Td>
              <Td>
                <Input  />
              </Td>
            </Tr>
            <Tr>
              <Td>Category</Td>
              <Td>
                <Select variant='filled'
                  placeholder="Select option">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </Td>
            </Tr>
            <Tr>
              <Td>Stock</Td>
              <Td>
                <Input  />
              </Td>
            </Tr>
          </Tbody>

          <Tfoot>
            <Tr>
              <Th>
                <Button colorScheme="blue">Save Changes</Button>
              </Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </>
  );
};

export default EditTable;
