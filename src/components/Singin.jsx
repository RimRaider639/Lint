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
import { Link, NavLink } from "react-router-dom"
import { useForm } from 'react-hook-form';
import { RiEyeCloseFill } from "react-icons/ri"
import { IoMdEye } from "react-icons/io"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Signin() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [loading, setLoading] = useState(false)
  const toast = useToast()
  const [go, setGo] = useState(false)
  const navigate = useNavigate()
  const Signin = (data) => {
    const payload = {
      email,
      pwd,
    }
    setLoading(true)
    axios.post("https://wide-eyed-pinafore-duck.cyclic.app/users/login", payload)
      .then((res) => {
        console.log(res);
        if (res.data.token) {
          toast({
            position: 'top',
            title: 'Successful',
            description: res.data.message,
            status: 'success',
            duration: 3000,
            isClosable: true,
          })
          setGo(true)
          localStorage.setItem("token", res.data.token)
        }
        setLoading(false)
      })
      .then(res => { GetSign() })
      .catch((err) => {
        console.log(err)
        if (err) {
          toast({
            position: 'top',
            title: 'Unsuccessfull',
            description: err.response.data.message,
            status: 'error',
            duration: 3000,
            isClosable: true,
          })
        }
        setLoading(false)
      })
  };

  const GetSign = () => {
    // const delay = 1000;

    // const fetchData = async () => {
    const config = {
      headers: {
        token: localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    }
    axios.get("https://wide-eyed-pinafore-duck.cyclic.app/users/", config)
      .then(res => {
        console.log(res)
        if (res.data.role === "customer") {
          console.log("customer", res.data.role);
          // setGo(true)
          navigate("/")


        }
        else if (res.data.role === "admin") {
          navigate("/admin")
          // console.log(res.data.role)
        } else {
          navigate("/signin")
        }
      })
      .catch(err => console.log(err))
  }

  const handleShowPassword = () => setShowPassword(!showPassword);

  return (
    <Box bg="gray.50" minH="100vh" py={10} >
      <Box maxW="xl" mx="auto" px={4}>
        <Heading as="h1" size="2xl" textAlign="center" mb={8}>
          Sign In
        </Heading>

        <Box bg="white" p={8} borderRadius="md" boxShadow="lg" mt={'100px'}>
          <form onSubmit={handleSubmit(Signin)}  >
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
              {/* {
               go===true?<NavLink to="/" > <Button type="submit" colorScheme="blue">Sign In</Button> </NavLink>: 
               <NavLink to="/signin" > <Button type="submit" colorScheme="blue">Sign In</Button> </NavLink>
               
             } */}
              <Button type="submit" backgroundColor={'gray.200'} isLoading={loading}
                loadingText='Signing In'
                colorScheme='teal'
                variant='outline' onClick={GetSign}>Sign In</Button>
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
