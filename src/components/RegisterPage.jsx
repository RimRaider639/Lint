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
import { useForm } from 'react-hook-form';
import { RiEyeCloseFill } from "react-icons/ri"
import { IoMdEye } from "react-icons/io"
import { Link } from "react-router-dom"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function RegisterPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [mobile, setMobile] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [loading, setLoading] = useState(false)
    const toast = useToast()
    const navigate=useNavigate()
    // const [role, setRole] = useState("");////
    // const { control, formState: { errors } } = useForm();

    const onSubmit = () => {
        const payload = {
            name,
            email,
            pwd,
            mobile,
            country,
            city,
            // role
        }
        setLoading(true)
        axios.post("https://wide-eyed-pinafore-duck.cyclic.app/users/register", payload)
            .then((res) => {
                console.log(res)
                toast({
                    position: 'top',
                    title: 'Successful',
                    description: res.data.message,
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                  })
                setLoading(false)
                navigate("/signin")
            })
            .catch((err) => {
                console.log(err)
                if (err) {
                    toast({
                      position: 'top',
                      title: 'Something Went Wrong !',
                      description: err.response.data.message,
                      status: 'error',
                      duration: 3000,
                      isClosable: true,
                    })
                    setLoading(false)
                  }
            })
            
    };

    const handleShowPassword = () => setShowPassword(!showPassword);

    return (
        <Box bg="gray.50" minH="100vh" py={10}>
            <Box maxW="xl" mx="auto" px={4}>
                <Heading as="h1" size="2xl" textAlign="center" mb={8}>
                    Register
                </Heading>

                <Box bg="white" p={8} borderRadius="md" boxShadow="lg">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Stack spacing={4}>
                            <FormControl id="name" isRequired isInvalid={errors.name}>
                                <FormLabel>Name</FormLabel>
                                <Input type="text" name="name" {...register('name', { required: true })} value={name} onChange={(e) => setName(e.target.value)} />
                                <FormErrorMessage>Please enter your name</FormErrorMessage>
                            </FormControl>

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

{/* <FormControl isInvalid={errors.password}>
  <FormLabel>Password</FormLabel>
  <InputGroup>
    <Controller
      name="password"
      control={control}
      rules={{ required: true, minLength: 8 }}
      render={({ field }) => (
        <Input {...field} type={showPassword ? "text" : "password"} />
      )}
    />
    <InputRightElement>
      <Button h="1.75rem" size="sm" onClick={handleShowPassword}>
        {showPassword ? <IoMdEye /> :  <RiEyeCloseFill />}
      </Button>
    </InputRightElement>
  </InputGroup>
  <FormErrorMessage>
    {errors.password && errors.password.type === "required" && "Password is required"}
    {errors.password && errors.password.type === "minLength" && "Password must be at least 8 characters"}
  </FormErrorMessage>
</FormControl> */}


                            <FormControl id="mobile" isRequired isInvalid={errors.mobile}>
                                <FormLabel>Mobile</FormLabel>
                                <Input type="tel" name="mobile" {...register('mobile', { required: true })} value={mobile} onChange={(e) => setMobile(e.target.value)} />
                                <FormErrorMessage>Please enter a valid mobile number</FormErrorMessage>
                            </FormControl>

                            <FormControl id="city" isRequired isInvalid={errors.city}>
                                <FormLabel>Country</FormLabel>
                                <Input type="text" name="city" {...register('city', { required: true })} value={country} onChange={(e) => setCountry(e.target.value)} />
                                <FormErrorMessage>Please enter your city</FormErrorMessage>
                            </FormControl>

                            <FormControl id="city" isRequired isInvalid={errors.city}>
                                <FormLabel>City</FormLabel>
                                <Input type="text" name="city" {...register('city', { required: true })} value={city} onChange={(e) => setCity(e.target.value)} />
                                <FormErrorMessage>Please enter your city</FormErrorMessage>
                            </FormControl>
                            <Button type="submit" mt={8} size="lg" isFullWidth 
                            backgroundColor={'gray.200'} isLoading={loading}
                            loadingText='Signing In'
                            colorScheme='teal'
                            variant='outline'>
                                Create Account
                            </Button>
                        </Stack>
                    </form>
                </Box>
            </Box>
            <Text fontSize={'10px'} textAlign={'center'} pb={'20px'} marginTop={'10px'}>By placing your order, you agree to Belk's Privacy Policy & Terms of Use.</Text>
            <Divider orientation='vertical' width={'20%'} mt={'50px'} margin={'auto'} borderColor="gray.500" borderWidth="1px" />
            <Text fontSize='13px' textAlign={'center'} mt={'20px'}>Have an Account? <Link to='/signin' color='blue.500' >Signin</Link></Text>
        </Box>
    )
}

export default RegisterPage;


