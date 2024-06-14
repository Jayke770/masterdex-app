import { Card, CardBody, Avatar } from "@nextui-org/react";
import CountUp from "react-countup";
import { faker } from '@faker-js/faker'
export default function Coin() {
    return (
        <Card
            isPressable
            fullWidth
            className="mb-2.5">
            <CardBody>
                <div className="grid grid-cols-5 w-full">
                    <div className="flex gap-3 items-center col-span-3">
                        <Avatar
                            isBordered
                            radius="full"
                            size="md"
                            src={faker.image.avatar()} />
                        <div>
                            <p className="text-md font-medium">{faker.person.firstName()}</p>
                            <div className="flex gap-2">
                                <CountUp
                                    prefix="$"
                                    className=" text-xs dark:text-gray-400 font-light"
                                    end={faker.number.int({ max: 99999 })}
                                    decimals={2} />
                                <CountUp
                                    prefix="+"
                                    className=" text-xs font-thin  dark:text-green-500"
                                    end={faker.number.int({ max: 99 })}
                                    suffix="%"
                                    decimals={2} />
                            </div>
                        </div>
                    </div>
                    <div className="flex col-span-2 justify-end items-end flex-col">
                        <CountUp
                            className="text-sm"
                            end={faker.number.int({ max: 999 })}
                            suffix=" "
                            decimals={2}
                        />
                        <CountUp
                            prefix="$"
                            className=" text-xs dark:text-gray-400 font-light"
                            end={faker.number.int({ max: 9999 })}
                            decimals={2} />
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}