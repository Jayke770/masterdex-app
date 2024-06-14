
import { useAsyncEffect } from "rooks"
import Settings from "../services/settings"
import { Card, CardBody, Spinner } from "@nextui-org/react"
import { useState } from "react"
import { useNavigate } from 'react-router-dom'
const settings = new Settings()
export default function Home() {
    const navigate = useNavigate()
    const [status, setStatus] = useState("Please wait...")
    useAsyncEffect(async () => {
        const state = await settings.appState()
        console.log('state', state)
        setStatus("Redirecting...")
        navigate(state === "old" ? "/wallet" : "/onboarding")
    }, [])
    return (
        <div
            className="flex justify-center items-center h-screen p-2">
            <Card
                className=" min-w-56">
                <CardBody>
                    <div className="flex items-center flex-col ">
                        <Spinner />
                        <p className="pt-5 animate-pulse">{status}</p>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}