import { useToast } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
const BASE_URL = process.env.REACT_APP_BASE_URL

export default function Dashboard() {
    const navigate = useNavigate()
    const toast = useToast()
    const checkImage = async () => {
        const response = await fetch(`${BASE_URL}/api/user/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": sessionStorage.getItem("token")
            },
        })
        const json = await response.json()
        console.log(sessionStorage.getItem("token"))
        if (json.success) {
            if (!json.imageFound) {
                toast({ title: "Image not uploaded, Please upload image.", variant: "left-accent", status: "error", duration: 2000 })
                navigate("/image")
            }
            sessionStorage.setItem("image_url", json.image.link)
        } else {
            toast({ title: json.message, variant: "left-accent", status: "error", duration: 2000 })
        }
    }
    useEffect(() => {
        if (!sessionStorage.getItem("token")) {
            navigate("/")
            return
        } 
        checkImage()
    }, [])

    return (
        <>
            Test
        </>
    )
}