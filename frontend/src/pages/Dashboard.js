import { useToast } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import {
    Box,
    Flex,
    Avatar,
    Link,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import Card from '../components/Card'
const BASE_URL = process.env.REACT_APP_BASE_URL

export default function Dashboard() {
    useEffect(() => {
        if (!sessionStorage.getItem("token")) {
            navigate("/")
            return
        }
        checkImage()
        getAllUsers()
    }, [])
    const { colorMode, toggleColorMode } = useColorMode();
    const navigate = useNavigate()
    const toast = useToast()
    const [email, setEmail] = useState("")
    const [users, setUsers] = useState([])
    const checkImage = async () => {
        const response = await fetch(`${BASE_URL}/api/user/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": sessionStorage.getItem("token")
            },
        })
        const json = await response.json()
        if (json.success) {
            if (!json.imageFound) {
                toast({ title: "Image not uploaded, Please upload image.", variant: "left-accent", status: "error", duration: 2000 })
                navigate("/image")
            }
            setEmail(json.user.email)
            sessionStorage.setItem("image_url", json.image.link)
        } else {
            toast({ title: json.message, variant: "left-accent", status: "error", duration: 2000 })
        }
    }
    const handleLogout = ()=>{
        sessionStorage.clear("token")
        sessionStorage.clear("image_url")
        navigate("/")
    }
    
    const getAllUsers = async()=>{
        const response = await fetch(`${BASE_URL}/api/image/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": sessionStorage.getItem("token")
            },
        })
        const json = await response.json()
        setUsers(json.data)
    }
    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Box>Soulmate Search</Box>

                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>
                            <Button onClick={toggleColorMode}>
                                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                            </Button>

                            <Menu>
                                <MenuButton
                                    as={Button}
                                    rounded={'full'}
                                    variant={'link'}
                                    cursor={'pointer'}
                                    minW={0}>
                                    <Avatar
                                        size={'sm'}
                                        src={sessionStorage.getItem("image_url")}
                                    />
                                </MenuButton>
                                <MenuList alignItems={'center'}>
                                    <br />
                                    <Center>
                                        <Avatar
                                            size={'2xl'}
                                            src={sessionStorage.getItem("image_url")}
                                        />
                                    </Center>
                                    <br />
                                    <Center>
                                        <p>{email}</p>
                                    </Center>
                                    <br />
                                    <MenuDivider />
                                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                                </MenuList>
                            </Menu>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
            {users.map((user)=>{
                return <Card user={user}/>
            })}
        </>
    );
}