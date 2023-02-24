import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Flex,
  Button,
  useToast 
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProducts } from "../Redux/actions";
// import DeleteButton from "../Components/DeleteButton";
import { useNavigate } from "react-router-dom";

const InventoryMain = () => {
  const allProducts = useSelector((store) => store.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast()

  const handleDelete = (id) => {
    console.log(id);
    dispatch(deleteProduct(id)).then((res)=>{
      console.log("deleted")
      toast({
        title: 'Product Deleted',
        description: "The product is deleted successfully",
        status: 'success',
        duration: 1500,
        isClosable: true,
        position:'top'
      })
    })
  };

  useEffect(() => {
    if (allProducts.length === 0) dispatch(getProducts());
    // console.log(allProducts);
  }, [allProducts.length, dispatch, allProducts]);
  
  return (
    <Flex p="4" w={{ base: "100%" }} justifyContent={"center"}>
      <TableContainer w={"100%"} p="2">
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>Brand</Th>
              <Th>Product Name</Th>
              <Th>PID</Th>
              <Th isNumeric>MRP</Th>
              <Th>Selling Price</Th>
              <Th>Discount</Th>
              <Th>Category</Th>
              <Th>Stock</Th>
              <Th></Th>
            </Tr>
          </Thead>

          <Tbody>
            {allProducts?.length &&
              allProducts.map((el) => {
                return (
                  <Tr key={el._id}>
                    <Td>{el.brand}</Td>
                    <Td>{el.product_name}</Td>
                    <Td>{el.pid}</Td>
                    <Td>{el.retail_price}</Td>
                    <Td>{el.discounted_price}</Td>
                    <Td>{Math.ceil(el.discount) + "%"}</Td>
                    <Td>{el.product_category_tree[0]}</Td>
                    <Td>{el.stock}</Td>
                    <Td>
                      <Button onClick={() => navigate(`/edit/${el._id}`)}>
                        {<EditIcon />}
                      </Button>

                      <Button>
                        {<DeleteIcon onClick={() => handleDelete(el._id)}/>}
                      </Button>
                    </Td>
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
};

export default InventoryMain;

// Formula for calculating discount=>
//  100-((price/mrp)*100)
