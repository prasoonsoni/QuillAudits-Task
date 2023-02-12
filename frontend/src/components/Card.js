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
    HStack,
    useToast
} from '@chakra-ui/react';
import { useState } from 'react';
import { AiOutlineLike, AiOutlineHeart } from "react-icons/ai"
import {BiBlock} from "react-icons/bi"
const BASE_URL = process.env.REACT_APP_BASE_URL

function Card({ user }) {
    const toast = useToast()
    const [likeLoading, setLikeLoading] = useState(false)
    const [superLikeLoading, setSuperLikeLoading] = useState(false)
    const handleLike = async()=>{
        setLikeLoading(true)
        const response = await fetch(`${BASE_URL}/api/image/like/${user._id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        })
        const json = await response.json()
        if(json.success){
            toast({ title: json.message, variant: "left-accent", status: "success", duration: 2000 })
        }
        setLikeLoading(false)
    }
    const handleSuperLike = async()=>{
        setSuperLikeLoading(true)
        const response = await fetch(`${BASE_URL}/api/image/superlike/${user._id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token":sessionStorage.getItem("token")
            },
        })
        const json = await response.json()
        if(json.success){
            toast({ title: json.message, variant: "left-accent", status: "success", duration: 2000 })
        }
        setLikeLoading(false)
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
                    <Button loading={likeLoading} onClick={handleLike} colorScheme = "green" leftIcon={<AiOutlineLike/>}>Like</Button>
                    <Button loading={superLikeLoading} onClick={handleSuperLike} colorScheme = "blue" leftIcon={<AiOutlineHeart/>}>Super Like</Button>
                    <Button colorScheme = "red" leftIcon={<BiBlock/>}>Block</Button>
                </HStack>
            </Box>
        </Flex>
    );
}

export default Card;