import { Button, Card, CardBody, CardFooter, Divider } from "@nextui-org/react";
import { ArrowLeft, Bitcoin, Wallet } from "lucide-react";
import { useLocalstorageState } from "rooks";
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
type OnBoardingTab = "welcome" | "wallet-setup" | "create-wallet"
export default function OnBoarding() {
    const navigate = useNavigate()
    const [tab, setTab] = useState<OnBoardingTab>("welcome")
    const onSetTab = (value: OnBoardingTab) => setTab(value)
    return (
        <AnimatePresence mode="wait">
            <section className="flex flex-col justify-center items-center h-screen w-screen p-2 overflow-hidden">
                {tab === "welcome" && (
                    <div className="grid w-full h-full grid-rows-4">
                        <div className="row-span-3 flex flex-col justify-center items-center gap-10">
                            <motion.div
                                initial={{
                                    scale: 0.1,
                                    opacity: 0.1
                                }}
                                animate={{
                                    scale: 1,
                                    opacity: 1
                                }}
                                exit={{
                                    scale: 0.1,
                                    opacity: 0
                                }}
                                transition={{ type: "spring", duration: 0.50 }}>
                                <Wallet
                                    size={"200px"}
                                    className=" text-teal-600" />
                            </motion.div>
                            <div className="flex items-center flex-col gap-2">
                                <motion.p
                                    initial={{
                                        scale: 0.1,
                                        opacity: 0
                                    }}
                                    animate={{
                                        scale: 1,
                                        opacity: 1
                                    }}
                                    exit={{
                                        scale: 0.1,
                                        opacity: 0
                                    }}
                                    transition={{ type: "spring", duration: 0.50, delay: 0.1 }}
                                    className="text-2xl font-bold">MasterDex Wallet</motion.p>
                                <motion.p
                                    initial={{
                                        y: 50,
                                        z: 0,
                                        opacity: 0
                                    }}
                                    animate={{
                                        y: 0,
                                        opacity: 1
                                    }}
                                    exit={{
                                        y: 50,
                                        z: 0,
                                        opacity: 0
                                    }}
                                    transition={{ type: "spring", duration: 0.50, delay: 0.1 }}
                                    className="  text-base text-gray-300 text-center px-6 ">
                                    Best Wallet ever !!!!!!!!
                                </motion.p>
                            </div>
                        </div>
                        <div className="w-full flex flex-col gap-5 p-4 justify-end">
                            <motion.div
                                initial={{
                                    y: 100,
                                    opacity: 0
                                }}
                                animate={{
                                    y: 0,
                                    opacity: 1
                                }}
                                exit={{
                                    y: 0,
                                    opacity: 0
                                }}
                                transition={{ type: "spring", duration: 0.50 }}
                                className="w-full flex justify-center items-center mt-5">
                                <Button
                                    className=" w-full md:w-4/6 "
                                    color="primary"
                                    radius="lg"
                                    size="lg"
                                    variant="shadow"
                                    onClick={() => onSetTab("wallet-setup")}>{"Let's Go"}</Button>
                            </motion.div>
                        </div>
                    </div>
                )}
                {tab === "wallet-setup" && (
                    <>
                        <motion.div
                            initial={{
                                scale: 0.1,
                                opacity: 0
                            }}
                            animate={{
                                scale: 1,
                                opacity: 1
                            }}
                            exit={{
                                scale: 0.1,
                                opacity: 0
                            }}
                            transition={{ type: "spring", duration: 0.50, delay: 0.20 }}
                            className=" self-start">
                            <Button
                                isIconOnly
                                variant="light"
                                color="default"
                                onClick={() => onSetTab("welcome")}>
                                <ArrowLeft />
                            </Button>
                        </motion.div>
                        <div className="grid w-full h-full grid-rows-4">
                            <div className="row-span-3 flex flex-col justify-center items-center gap-10">
                                <motion.div
                                    initial={{
                                        scale: 0.1,
                                        opacity: 0.1
                                    }}
                                    animate={{
                                        scale: 1,
                                        opacity: 1
                                    }}
                                    exit={{
                                        scale: 0.1,
                                        opacity: 0
                                    }}
                                    transition={{ type: "spring", duration: 0.50 }}>
                                    <Bitcoin
                                        size={"150px"}
                                        className=" text-yellow-600  " />
                                </motion.div>
                                <div className="flex items-center flex-col gap-2">
                                    <motion.p
                                        initial={{
                                            scale: 0.1,
                                            opacity: 0
                                        }}
                                        animate={{
                                            scale: 1,
                                            opacity: 1
                                        }}
                                        exit={{
                                            scale: 0.1,
                                            opacity: 0
                                        }}
                                        transition={{ type: "spring", duration: 0.50, delay: 0.1 }}
                                        className="text-2xl font-bold">Wallet Setup</motion.p>
                                    <motion.p
                                        initial={{
                                            y: 50,
                                            z: 0,
                                            opacity: 0
                                        }}
                                        animate={{
                                            y: 0,
                                            opacity: 1
                                        }}
                                        exit={{
                                            y: 50,
                                            z: 0,
                                            opacity: 0
                                        }}
                                        transition={{ type: "spring", duration: 0.50, delay: 0.1 }}
                                        className="  text-base text-gray-300 text-center px-5 ">
                                        Create your new wallet or import using seed phrase if you already have an account.
                                    </motion.p>
                                </div>
                            </div>
                            <div className="w-full flex flex-col gap-5 p-4 justify-end">
                                <motion.div
                                    initial={{
                                        y: -100,
                                        opacity: 0
                                    }}
                                    animate={{
                                        y: 0,
                                        opacity: 1
                                    }}
                                    exit={{
                                        y: -100,
                                        opacity: 0
                                    }}
                                    transition={{ type: "spring", duration: 0.50 }}>
                                    <Button
                                        fullWidth
                                        color="primary"
                                        variant="shadow"
                                        size="lg"
                                        onClick={() => navigate("/wallet")}>
                                        Create a New Wallet
                                    </Button>
                                </motion.div>
                                <motion.div
                                    initial={{
                                        y: 100,
                                        opacity: 0
                                    }}
                                    animate={{
                                        y: 0,
                                        opacity: 1
                                    }}
                                    exit={{
                                        y: 100,
                                        opacity: 0
                                    }}
                                    transition={{ type: "spring", duration: 0.50 }}>
                                    <Button
                                        fullWidth
                                        color="default"
                                        variant="flat"
                                        size="lg"
                                        disabled>
                                        Import Using Seed Phrase
                                    </Button>
                                </motion.div>
                            </div>
                        </div>
                    </>
                )}
            </section>
        </AnimatePresence>
    )
}