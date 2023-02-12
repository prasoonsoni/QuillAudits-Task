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
function Card({ user }) {
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
                    <Button colorScheme = "green" leftIcon={<AiOutlineLike/>}>Like</Button>
                    <Button colorScheme = "blue" leftIcon={<AiOutlineHeart/>}>Super Like</Button>
                    <Button colorScheme = "red" leftIcon={<BiBlock/>}>Block</Button>
                </HStack>
            </Box>
        </Flex>
    );
}

export default Card;