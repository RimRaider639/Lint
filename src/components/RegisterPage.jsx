// import { useState } from 'react';
// import {
//   FormControl,
//   FormLabel,
//   Input,
//   Button,
//   Select,
//   Stack,
//   Box,
//   Heading,
//   FormErrorMessage,
// } from '@chakra-ui/react';
// import { useForm } from 'react-hook-form';

// function RegisterPage() {
//   const { register, handleSubmit, formState: { errors } } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//     // Handle form submission here
//   };

//   return (
//     <Box bg="gray.50" minH="100vh" py={10}>
//       <Box maxW="xl" mx="auto" px={4}>
//         <Heading as="h1" size="2xl" textAlign="center" mb={8}>
//           Register
//         </Heading>

//         <Box bg="white" p={8} borderRadius="md" boxShadow="lg">
//           <form onSubmit={handleSubmit(onSubmit)}>
//             <Stack spacing={4}>
//               <FormControl id="name" isRequired isInvalid={errors.name}>
//                 <FormLabel>Name</FormLabel>
//                 <Input type="text" name="name" {...register('name', { required: true })} />
//                 <FormErrorMessage>Please enter your name</FormErrorMessage>
//               </FormControl>

//               <FormControl id="email" isRequired isInvalid={errors.email}>
//                 <FormLabel>Email</FormLabel>
//                 <Input type="email" name="email" {...register('email', { required: true })} />
//                 <FormErrorMessage>Please enter a valid email address</FormErrorMessage>
//               </FormControl>

//               {/* <FormControl id="password" isRequired isInvalid={errors.password}>
//                 <FormLabel>Password</FormLabel>
//                 <Input type="password" name="password" {...register('password', { required: true })} />
//                 <FormErrorMessage>Please enter a password</FormErrorMessage>
//               </FormControl> */}

// <FormControl id="password" isRequired isInvalid={errors.password}>
//                  <FormLabel>Password</FormLabel>
//                  <InputGroup>
//                    <Input type={showPassword ? 'text' : 'password'} name="password" {...register('password', { required: true })} />
//                    <InputRightElement>
//                      <Button size="sm" onClick={handleShowPassword}>
//                        {showPassword ? 'Hide' : 'Show'}
//                      </Button>
//                    </InputRightElement>
//                  </InputGroup>
//                  <FormErrorMessage>Please enter a password</FormErrorMessage>
//                </FormControl>

//               <FormControl id="mobile" isRequired isInvalid={errors.mobile}>
//                 <FormLabel>Mobile</FormLabel>
//                 <Input type="tel" name="mobile" {...register('mobile', { required: true })} />
//                 <FormErrorMessage>Please enter a valid mobile number</FormErrorMessage>
//               </FormControl>

//               <FormControl id="city" isRequired isInvalid={errors.city}>
//                 <FormLabel>City</FormLabel>
//                 <Input type="text" name="city" {...register('city', { required: true })} />
//                 <FormErrorMessage>Please enter your city</FormErrorMessage>
//               </FormControl>

//               <FormControl id="role" isRequired isInvalid={errors.role}>
//                 <FormLabel>Role</FormLabel>
//                 <Select name="role" {...register('role', { required: true })}>
//                   <option value="">Select Role</option>
//                   <option value="Developer">Developer</option>
//                   <option value="Designer">Designer</option>
//                   <option value="Manager">Manager</option>
//                 </Select>
//                 <FormErrorMessage>Please select a role</FormErrorMessage>
//               </FormControl>

//               <Button type="submit" mt={8} colorScheme="blue" size="lg" isFullWidth>
//                 Register
//               </Button>
//             </Stack>
//           </form>
//         </Box>
//       </Box>
//     </Box>
//   );
// }

// export default RegisterPage;






















import { useState } from 'react';
import {
    FormControl,
    FormLabel,
    Input,
    Button,
    Select,
    Stack,
    Box,
    Heading,
    FormErrorMessage,
    InputGroup,
    InputRightElement,
    Text,
    Divider
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { RiEyeCloseFill } from "react-icons/ri"
import { IoMdEye } from "react-icons/io"
import {Link} from "react-router-dom"
function RegisterPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = (data) => {
        console.log(data);
        // Handle form submission here
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
                                <Input type="text" name="name" {...register('name', { required: true })} />
                                <FormErrorMessage>Please enter your name</FormErrorMessage>
                            </FormControl>

                            <FormControl id="email" isRequired isInvalid={errors.email}>
                                <FormLabel>Email</FormLabel>
                                <Input type="email" name="email" {...register('email', { required: true })} />
                                <FormErrorMessage>Please enter a valid email address</FormErrorMessage>
                            </FormControl>

                            <FormControl id="password" isRequired isInvalid={errors.password}>
                                <FormLabel>Password</FormLabel>
                                <InputGroup>
                                    <Input type={showPassword ? 'text' : 'password'} name="password" {...register('password', { required: true })} />
                                    <InputRightElement>
                                        <Button size="sm" onClick={handleShowPassword}>
                                            {showPassword ? <IoMdEye /> : <RiEyeCloseFill />}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                                <FormErrorMessage>Please enter a password</FormErrorMessage>
                            </FormControl>

                            <FormControl id="mobile" isRequired isInvalid={errors.mobile}>
                                <FormLabel>Mobile</FormLabel>
                                <Input type="tel" name="mobile" {...register('mobile', { required: true })} />
                                <FormErrorMessage>Please enter a valid mobile number</FormErrorMessage>
                            </FormControl>

                            <FormControl id="city" isRequired isInvalid={errors.city}>
                                <FormLabel>City</FormLabel>
                                <Input type="text" name="city" {...register('city', { required: true })} />
                                <FormErrorMessage>Please enter your city</FormErrorMessage>
                            </FormControl>

                            {/* <FormControl id="role" isRequired isInvalid={errors.role}>
                <FormLabel>Role</FormLabel>
                <Select name="role" {...register('role', { required: true })}>
                  <option value="">Select Role</option> */}
                            <FormControl id="role" isRequired isInvalid={errors.role}>
                                <FormLabel>Role</FormLabel>
                                <Select name="role" {...register('role', { required: true })}>
                                    <option value="">Select Role</option>
                                    <option value="Developer">Developer</option>
                                    <option value="Designer">Designer</option>
                                    <option value="Manager">Manager</option>
                                </Select>
                                <FormErrorMessage>Please select a role</FormErrorMessage>
                            </FormControl>
                            <Button type="submit" mt={8} colorScheme="blue" size="lg" isFullWidth>
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


