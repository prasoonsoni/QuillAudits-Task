import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react';
import { UnlockIcon, AddIcon } from "@chakra-ui/icons"
import { Link } from 'react-router-dom';

export default function SplitScreen() {
    return (
        <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={6} w={'full'} maxW={'lg'}>
                    <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                        <Text
                            as={'span'}
                            position={'relative'}
                            _after={{
                                content: "''",
                                width: 'full',
                                height: useBreakpointValue({ base: '20%', md: '30%' }),
                                position: 'absolute',
                                bottom: 1,
                                left: 0,
                                bg: 'blue.400',
                                zIndex: -1,
                            }}>
                            Soulmate
                        </Text>
                        <br />{' '}
                        <Text color={'blue.400'} as={'span'}>
                            Search
                        </Text>{' '}
                    </Heading>
                    <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                        Find your match and make a Soulmate Search with Love Connection. Our user-friendly dating app makes it easy to find and connect with like-minded singles in your area. Start your journey to find love today!
                    </Text>
                    <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                        <Link to="/login">
                            <Button
                                rounded={'full'}
                                bg={'blue.400'}
                                color={'white'}
                                leftIcon={< UnlockIcon />}

                                _hover={{
                                    bg: 'blue.500',
                                }}>
                                Login
                            </Button>
                        </Link>
                        <Link to="/signup">
                            <Button rounded={'full'} leftIcon={<AddIcon />}>Register</Button>
                        </Link>
                    </Stack>
                </Stack>
            </Flex>
            <Flex flex={1}>
                <Image
                    alt={'Login Image'}
                    objectFit={'cover'}
                    src={
                        'https://cdn-icons-png.flaticon.com/512/6041/6041893.png'
                    }
                />
            </Flex>
        </Stack>
    );
}