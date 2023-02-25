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
  Progress,
} from "@chakra-ui/react";

import { EditIcon } from "@chakra-ui/icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/actions";
import { useNavigate } from "react-router-dom";
import DeleteButton from "../Components/DeleteButton";

const InventoryMain = () => {
  const { products, isLoading } = useSelector((store) => store);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (products.length === 0)
      dispatch(getProducts())
    // console.log(isLoading);
  }, [ dispatch, products, isLoading]);

  if (isLoading === true) {
    return <Progress size='xs' isIndeterminate />;
  } else {
    return (
      <Flex p="2" w={{ base: "100%" }} justifyContent={"center"}>
        <TableContainer w={"100%"} p="2">
          <Table size="sm">
            <Thead>
              <Tr>
                <Th>Brand</Th>
                <Th>Product Name</Th>
                <Th>PID</Th>
                <Th isNumeric>MRP</Th>
                <Th>Price</Th>
                <Th>Discount</Th>
                <Th>Category</Th>
                <Th>Stock</Th>
                <Th></Th>
              </Tr>
            </Thead>

            <Tbody>
              {products?.length &&
                products.map((el) => {
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

                        <DeleteButton id={el._id} />
                      </Td>
                    </Tr>
                  );
                })}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    );
  }
};

export default InventoryMain;

// Formula for calculating discount=>
//  100-((price/mrp)*100)
