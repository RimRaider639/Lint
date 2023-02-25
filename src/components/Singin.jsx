import { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Stack,
  Box,
  Heading,
  FormErrorMessage,
  InputGroup,
  InputRightElement,
  Text,
  Divider,
  useToast
} from '@chakra-ui/react';
import { Link } from "react-router-dom"
import { useForm } from 'react-hook-form';
import { RiEyeCloseFill } from "react-icons/ri"
import { IoMdEye } from "react-icons/io"
import axios from 'axios';
function Signin() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const toast = useToast()

  const Signin = (data) => {
    const payload = {
      email,
      pwd,
    }
    // const headers = {
    //   "Access-Control-Allow-Origin": "*",
    //   "Content-Type": "application/json",
    //   "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
    //   "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token, Authorization, Accept,charset,boundary,Content-Length"
    // }
    axios.post("https://wide-eyed-pinafore-duck.cyclic.app/users/login", payload)
      .then((res) =>{
        console.log(res);
        if(res.data.token){
          toast({
            position: 'top',
            title: 'Successful',
            description: res.data.message,
            status: 'success',
            duration: 3000,
            isClosable: true,
          })
        }
        localStorage.setItem("token",res.data.token)
      })
      .catch((err) =>{ console.log(err)
        if(err){
          toast({
            position: 'top',
            title: 'Unsuccessfull',
            description: err.response.data.message,
            status: 'error',
            duration: 3000,
            isClosable: true,
          })
        }
       })
    // console.log(data);
  };

  const handleShowPassword = () => setShowPassword(!showPassword);

  return (
    <Box bg="gray.50" minH="100vh" py={10}>
      <Box maxW="xl" mx="auto" px={4}>
        <Heading as="h1" size="2xl" textAlign="center" mb={8}>
          Sign In
        </Heading>

        <Box bg="white" p={8} borderRadius="md" boxShadow="lg">
          <form onSubmit={handleSubmit(Signin)}>
            <Stack spacing={4}>
              <FormControl id="email" isRequired isInvalid={errors.email}>
                <FormLabel>Email</FormLabel>
                <Input type="email" name="email" {...register('email', { required: true })} value={email} onChange={(e) => setEmail(e.target.value)} />
                <FormErrorMessage>Please enter a valid email address</FormErrorMessage>
              </FormControl>

              <FormControl id="password" isRequired isInvalid={errors.password}>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} name="password" {...register('password', { required: true })} value={pwd} onChange={(e) => setPwd(e.target.value)} />
                  <InputRightElement>
                    <Button size="sm" onClick={handleShowPassword}>
                      {showPassword ? <IoMdEye /> : <RiEyeCloseFill />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage>Please enter a password</FormErrorMessage>
              </FormControl>

              <Button type="submit" colorScheme="blue">Sign In</Button>
            </Stack>
          </form>
        </Box>

      </Box>
      <Text fontSize={'10px'} textAlign={'center'} pb={'20px'} marginTop={'10px'}>By signing into your account, you agree to Belk's Privacy Policy & Terms of Use.</Text>
      <Divider orientation='vertical' width={'20%'} mt={'50px'} margin={'auto'} borderColor="gray.500" borderWidth="1px" />
      <Stack ml={'40.7%'}> <Link to='/register' color='blue.500' ><Button border={'2px solid blue'} mt='20px' w='30%' colorScheme={'whiteAlpha.400'} color={'blue.600'}>Create Account</Button> </Link></Stack>
    </Box>
  );
}

export default Signin;
