import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Icon,
    chakra,
    Tooltip,
    Button,
    HStack
} from '@chakra-ui/react';
import { AiOutlineLike, AiOutlineHeart } from "react-icons/ai"
import {BiBlock} from "react-icons/bi"
const BASE_URL = process.env.REACT_APP_BASE_URL

function Card({ user }) {
    const handleLike = async()=>{
        const response = await fetch(`${BASE_URL}/api/image/${user._id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        })
        const json = await response.json()
        console.log(json)
    }
    return (
        <Flex p={5} w="full" alignItems="center" justifyContent="center">
            <Box
                bg={useColorModeValue('white', 'gray.800')}
                maxW="sm"
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
                position="relative">
                <Image
                    src={user.link}
                    width="full"
                    roundedTop="lg"
                />
                <HStack m="3" justifyContent="center">
                    <Button onClick={handleLike} colorScheme = "green" leftIcon={<AiOutlineLike/>}>Like</Button>
                    <Button colorScheme = "blue" leftIcon={<AiOutlineHeart/>}>Super Like</Button>
                    <Button colorScheme = "red" leftIcon={<BiBlock/>}>Block</Button>
                </HStack>
            </Box>
        </Flex>
    );
}

export default Card;