import { Card, CardBody,  Image, CardFooter } from "@nextui-org/react";
import { faker } from '@faker-js/faker'
export default function NFT() {
    return (
        <Card
            isPressable
            isFooterBlurred
            radius="lg"
            className="border-none">
            <CardBody className="overflow-visible p-0">
                <Image
                    shadow="sm"
                    radius="lg"
                    width="100%"
                    alt={"f"}
                    className="w-full object-cover h-36 "
                    src={faker.image.urlLoremFlickr()}
                />
            </CardBody>
            <CardFooter className="text-small justify-between">
                <div className="flex justify-between items-center gap-2 w-full">
                    <p>{faker.animal.cat()}</p>
                    <p>#{faker.number.int({ max: 99 })}</p>
                </div>
            </CardFooter>
        </Card>
    )
}