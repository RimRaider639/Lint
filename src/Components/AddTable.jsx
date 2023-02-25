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
    useToast,
    Button,
    Input,
    Select,
  } from "@chakra-ui/react";
  import { useState } from "react";
  import { useDispatch } from "react-redux";
  import { addProduct } from "../Redux/actions";
  
  const AddTable = () => {
    const dispatch = useDispatch();
    const toast = useToast()
    const [img1, setImg1] = useState('');
    const [img2, setImg2] = useState('');
    const [img3, setImg3] = useState('');
    const [img4, setImg4] = useState('');
    const [cat1, setCat1] = useState('');
    const [cat2, setCat2] = useState('');
    // const [cat3, setCat3] = useState('');
    const [currentProduct, setCurrentProduct] = useState({
        product_name: '',
        product_category_tree: [''],
        pid: 'xyz123',
        retail_price:0,
        discounted_price: 0,
        image: [],
        description: '',
        brand: '',
        rating: 0,
        stock: 0,
        discount: 0
    })
  
    const handleSubmit = () => {
        const imgArr = [img1,img2,img3,img4];
        const catArr = [cat1,cat2];
        currentProduct.image = imgArr;
        currentProduct.product_category_tree = catArr;
        console.log(currentProduct)

      dispatch(addProduct(currentProduct)).then((res)=>{
        toast({
          title: 'Product Added',
          description: "The product is added successfully",
          status: 'success',
          duration: 1500,
          isClosable: true,
          position:'top'
        })
      }
      )
    };
  
    
    return (
      <>
        <TableContainer mt={"-10"}>
          <Table variant="simple" colorScheme="teal">
            <TableCaption>
              Please verify all details before adding details
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
                <Td>Image 1</Td>
                <Td>
                  <Input
                    value={img1}
                    onChange={(e) => setImg1(e.target.value)}
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>Image 2</Td>
                <Td>
                  <Input
                    value={img2}
                    onChange={(e) => setImg2(e.target.value)}
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>Image 3</Td>
                <Td>
                  <Input
                    value={img3}
                    onChange={(e) => setImg3(e.target.value)}
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>Image 4</Td>
                <Td>
                  <Input
                    value={img4}
                    onChange={(e) => setImg4(e.target.value)}
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
                <Td>Description</Td>
                <Td>
                  <Input
                    value={currentProduct.description}
                    onChange={(e) =>
                      setCurrentProduct({
                        ...currentProduct,
                        description: e.target.value,
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
                        retail_price: Number(e.target.value),
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
                        discounted_price: Number(e.target.value),
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
                        discount: Number(e.target.value),
                      })
                    }
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>Category 1</Td>
                <Td>
                  <Select
                    variant="filled"
                    value={cat1}
                    onChange={(e) => setCat1(e.target.value)}>
                    <option value="Clothing">Clothing</option>
                    <option value="Footwear">Footwear</option>
                    <option value="Other">Other</option>
                  </Select>
                </Td>
              </Tr>
              <Tr>
                <Td>Category 2</Td>
                <Td>
                  <Select
                    variant="filled"
                    value={cat2}
                    onChange={(e) => setCat2(e.target.value)}>
                    <option value="Clothing">Clothing</option>
                    <option value="Footwear">Footwear</option>
                    <option value="Other">Other</option>
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
                        stock: Number(e.target.value),
                      })
                    }
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>Rating</Td>
                <Td>
                  <Input
                    value={currentProduct.rating}
                    onChange={(e) =>
                      setCurrentProduct({
                        ...currentProduct,
                        rating: Number(e.target.value),
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
                    Add Product
                  </Button>
                </Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </>
    );
  };
  
  export default AddTable;
  

//   http://img6a.flixcart.com/image/t-shirt/s/y/2/ovnrdvnfs01-oviyon-xs-original-imae96dn8kttjkhx.jpeg