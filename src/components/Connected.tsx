import { FC } from "react"
import {
    Button,
    Container,
    Heading,
    HStack,
    Text,
    VStack,
} from "@chakra-ui/react"
import { ArrowForwardIcon } from "@chakra-ui/icons"
import Image from "next/image"
import Img1 from '../../public/avatar1.png'
import Img2 from '../../public/avatar2.png'
import Img3 from '../../public/avatar3.png'
import Img4 from '../../public/avatar4.png'
import Img5 from '../../public/avatar5.png'

const Connected: FC = () => {


    const images = [Img1, Img2, Img3, Img4, Img5]

    return (
        <VStack spacing={20}>
            <Container>
                <VStack spacing={8}>
                    <Heading
                        color="white"
                        as="h1"
                        size="2xl"
                        noOfLines={1}
                        textAlign="center"
                    >
                        Welcome Buildoor.
                    </Heading>

                    <Text color="white" fontSize="xl" textAlign="center">
                        Each buildoor is randomly generated and can be staked to receive
                        <Text as="b"> $BLD</Text> Use your <Text as="b"> $BLD</Text> to
                        upgrade your buildoor and receive perks within the community!
                    </Text>
                </VStack>
            </Container>

            <div className="w-1/2 grid grid-cols-5 gap-4">
                {
                    images.map((image, index) => (
                        <Image key={index} src={image} alt="" width={200} height={100} />
                    ))
                }
            </div>

            <Button bgColor="accent" color="white" maxW="380px">
                <HStack>
                    <Text>mint buildoor</Text>
                    <ArrowForwardIcon />
                </HStack>
            </Button>
        </VStack>
    )
}

export default Connected