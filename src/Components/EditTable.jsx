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
import { getProducts, updateProduct } from "../Redux/actions";

const EditTable = () => {
  const { id } = useParams();
  const allProducts = useSelector((store) => store.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currentProduct, setCurrentProduct] = useState({
    brand: "",
    product_name: "",
    pid: "",
    retail_price: 0,
    discounted_price: 0,
    discount: 0,
    product_category_tree: ["xyz", "xcv"],
    stock: 10,
  });

  const handleSubmit = () => {
    dispatch(updateProduct(id, currentProduct)).then((res)=>{
      console.log(res)
    }
    )
  };

  useEffect(() => {
    if (allProducts.length === 0) dispatch(getProducts());

    if (id) {
      const product = allProducts.find((el) => el._id === id);
      product && setCurrentProduct(product);
      // console.log(currentProduct);
    }
  }, [allProducts.length, dispatch, id, allProducts]);

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
                <Input
                  value={currentProduct.brand}
                  onChange={(e) =>
                    setCurrentProduct({
                      ...currentProduct,
                      brand: e.target.value,
                    })
                  }
                />
              </Td>
            </Tr>
            <Tr>
              <Td>Product Name</Td>
              <Td>
                <Input
                  value={currentProduct.product_name}
                  onChange={(e) =>
                    setCurrentProduct({
                      ...currentProduct,
                      product_name: e.target.value,
                    })
                  }
                />
              </Td>
            </Tr>
            <Tr>
              <Td>PID</Td>
              <Td>
                <Input
                  value={currentProduct.pid}
                  onChange={(e) =>
                    setCurrentProduct({
                      ...currentProduct,
                      pid: e.target.value,
                    })
                  }
                />
              </Td>
            </Tr>
            <Tr>
              <Td>MRP</Td>
              <Td>
                <Input
                  value={currentProduct.retail_price}
                  onChange={(e) =>
                    setCurrentProduct({
                      ...currentProduct,
                      retail_price: e.target.value,
                    })
                  }
                />
              </Td>
            </Tr>
            <Tr>
              <Td>Selling Price</Td>
              <Td>
                <Input
                  value={currentProduct.discounted_price}
                  onChange={(e) =>
                    setCurrentProduct({
                      ...currentProduct,
                      discounted_price: e.target.value,
                    })
                  }
                />
              </Td>
            </Tr>
            <Tr>
              <Td>Discount</Td>
              <Td>
                <Input
                  value={currentProduct.discount}
                  onChange={(e) =>
                    setCurrentProduct({
                      ...currentProduct,
                      discount: e.target.value,
                    })
                  }
                />
              </Td>
            </Tr>
            <Tr>
              <Td>Category</Td>
              <Td>
                <Select
                  variant="filled"
                  value={currentProduct.product_category_tree[0]}
                  onChange={(e) =>
                    setCurrentProduct({
                      ...currentProduct,
                      product_category_tree: e.target.value,
                    })
                  }
                  placeholder="Select option"
                >
                  <option value="clothing">Clothing</option>
                  <option value="footwear">Footwear</option>
                  <option value="other">Other</option>
                </Select>
              </Td>
            </Tr>
            <Tr>
              <Td>Stock</Td>
              <Td>
                <Input
                  value={currentProduct.stock}
                  onChange={(e) =>
                    setCurrentProduct({
                      ...currentProduct,
                      tock: e.target.value,
                    })
                  }
                />
              </Td>
            </Tr>
          </Tbody>

          <Tfoot>
            <Tr>
              <Th>
                <Button onClick={handleSubmit} colorScheme="blue">
                  Save Changes
                </Button>
              </Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </>
  );
};

export default EditTable;
