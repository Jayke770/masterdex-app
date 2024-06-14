import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button,
    Divider,
    Tooltip,
    Tab,
    Tabs
} from "@nextui-org/react";
import {
    Cog,
    ArrowUpFromDot,
    ArrowDownToDot,
    CreditCard
} from 'lucide-react'
import CountUp from 'react-countup';
import Coin from "../../components/wallet/coin";
import NFT from "../../components/wallet/nft";
export default function Wallet() {
    return (
        <section className="p-2">
            <Card>
                <CardHeader className=" justify-between">
                    <Button
                        isIconOnly
                        variant="light">
                        <Cog />
                    </Button>
                </CardHeader>
                <CardBody className=" items-center ">
                    <CountUp
                        prefix="$"
                        className=" text-4xl"
                        end={99999999.4242}
                        decimals={2} />
                    <Divider orientation="horizontal" className="mt-5" />
                </CardBody>
                <CardFooter className="justify-center">
                    <div className="flex gap-2 px-50">
                        <Tooltip content="Send">
                            <Button
                                size="md"
                                fullWidth={true}
                                variant="light"
                                color="primary">
                                <ArrowUpFromDot />
                            </Button>
                        </Tooltip>
                        <Tooltip content="Receive">
                            <Button
                                size="md"
                                fullWidth={true}
                                variant="light"
                                color="primary">
                                <ArrowDownToDot />
                            </Button>
                        </Tooltip>
                        <Tooltip content="Buy Crypto">
                            <Button
                                size="md"
                                fullWidth={true}
                                variant="light"
                                color="primary">
                                <CreditCard />
                            </Button>
                        </Tooltip>
                    </div>
                </CardFooter>
            </Card>
            <Tabs aria-label="tabs" className="mt-4" fullWidth>
                <Tab key="coins" title="Tokens">
                    {Array.from({ length: 20 }).map((i) => <Coin key={`${i}`} />)}
                </Tab>
                <Tab key="nfts" title="NFTs">
                    <div className="grid grid-cols-2 gap-2">
                        {Array.from({ length: 20 }).map((i) => <NFT key={`${i}`} />)}
                    </div>
                </Tab>
            </Tabs>
        </section>
    )
}