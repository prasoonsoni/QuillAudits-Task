import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Link as RouterLink } from "react-router-dom"
const BASE_URL = process.env.REACT_APP_BASE_URL
export default function Signup() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const toast = useToast()
    const handleOnSignUp = async () => {
        if (email.trim().length === 0 || password.trim().length === 0) {
            toast({ title: "Fields cannot be empty.", variant: "left-accent", status: "error", duration: 2000 })
            return;
        }
        setLoading(true)
        const response = await fetch(`${BASE_URL}/api/user/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: email.trim().toLowerCase(), password: password })
        })
        const json = await response.json()
        console.log(json)
        if (json.success) {
            toast({ title: "Account created Successfully!!", variant: "left-accent", status: "success", duration: 2000 })
        } else {
            toast({ title: json.message, variant: "left-accent", status: "error", duration: 2000 })
        }
        setLoading(false)
    }
    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Sign up to your account</Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        to enjoy all of our cool features ✌️
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <FormControl id="email">
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" onChange={(e) => setEmail(e.target.value)} />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input type="password" onChange={(e) => setPassword(e.target.value)} />
                        </FormControl>
                        <Stack spacing={10}>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align={'start'}
                                justify={'space-between'}>
                                <RouterLink to="/login"><Link color={'blue.400'}>Already have an account?</Link></RouterLink>
                            </Stack>
                            <Button
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}
                                isLoading={loading}
                                loadingText='Signing Up'
                                onClick={handleOnSignUp}>
                                Sign up
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}