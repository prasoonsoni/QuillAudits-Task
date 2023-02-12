import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useColorModeValue,
    useToast,
    Avatar,
    AvatarBadge,
    IconButton,
    Center,
    VisuallyHidden
} from '@chakra-ui/react';
import { useEffect, useRef, useState } from "react"
import { SmallCloseIcon } from '@chakra-ui/icons';
import { useNavigate } from "react-router-dom"
const BASE_URL = process.env.REACT_APP_BASE_URL

export default function UserProfileEdit() {
    const navigate = useNavigate()
    const fileUploadRef = useRef(null)
    const [selectedFile, setSelectedFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const toast = useToast()
    useEffect(() => {
        if (!sessionStorage.getItem("token")) {
            navigate("/")
            return
        }
        if (sessionStorage.getItem("image_url")) {
            navigate("/dashboard")
            return
        }
    }, [])
    const handleOnSubmitImage = async()=>{
        if(!selectedFile){
            toast({ title: "Please select an image", variant: "left-accent", status: "error", duration: 2000 })
            return
        }
        setLoading(true)
        const formData = new FormData();
        formData.append("filename", selectedFile);
        const response = await fetch (`${BASE_URL}/api/image/upload`, {
            method: "POST",
            headers: {
                "auth-token":sessionStorage.getItem("token")
            },
            body:formData
        })
        const json = await response.json()
        if(json.success){
            toast({ title: json.message, variant: "left-accent", status: "success", duration: 2000 })
            navigate("/dashboard")
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
            <Stack
                spacing={4}
                w={'full'}
                maxW={'md'}
                bg={useColorModeValue('white', 'gray.700')}
                rounded={'xl'}
                boxShadow={'lg'}
                p={6}
                my={12}>
                <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
                    User Profile Edit
                </Heading>
                <FormControl id="userName">
                    <FormLabel>User Image</FormLabel>
                    <Stack direction={['column', 'row']} spacing={6}>
                        <Center>
                            <Avatar size="xl" src={selectedFile ? URL.createObjectURL(selectedFile) : null}>
                                <AvatarBadge
                                    as={IconButton}
                                    size="sm"
                                    rounded="full"
                                    top="-10px"
                                    colorScheme="red"
                                    aria-label="remove Image"
                                    icon={<SmallCloseIcon />}
                                    onClick={()=>setSelectedFile(null)}
                                />
                            </Avatar>
                        </Center>
                        <Center w="full">
                            <Button w="full" isLoading={loading} onClick={() => fileUploadRef.current.click()}>Select Image</Button>
                        </Center>
                    </Stack>
                </FormControl>
                <FormControl>
                    <VisuallyHidden>
                        <Input
                            placeholder="UserName"
                            _placeholder={{ color: 'gray.500' }}
                            type="file"
                            ref={fileUploadRef}
                            visibility={false}
                            onChange={(e)=>setSelectedFile(e.target.files[0])}
                        />
                    </VisuallyHidden>
                </FormControl>
                <Stack spacing={6} direction={['column', 'row']}>
                    <Button
                        bg={'blue.400'}
                        color={'white'}
                        w="full"
                        onClick={handleOnSubmitImage}
                        isLoading={loading}
                        loadingText="Uploading Image"
                        _hover={{
                            bg: 'blue.500',
                        }}>
                        Submit
                    </Button>
                </Stack>
            </Stack>
        </Flex>
    );
}