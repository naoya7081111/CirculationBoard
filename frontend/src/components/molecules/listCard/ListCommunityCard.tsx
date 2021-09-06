import {  ReactNode, VFC } from "react"
import { Flex, Image, Text, Spacer, useDisclosure } from "@chakra-ui/react";
import { CommunityInfoModal } from "../../organisms/modal/CommunityInfoModal";

type Props = {
    children: ReactNode;
    width: any;
    image: string | null;
}

export const ListCommunityCard: VFC<Props> = (props) => {
    const { children, width, image } = props;

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Flex onClick={onOpen} w={width} h="48px" alignItems="center" borderRadius={10} bg="orange.50" _hover={{ cursor: "pointer", bg: "orange.100"}} > 
                <Image borderRadius="lg" boxSize="48px" src={image === null ? `${process.env.PUBLIC_URL}/img/freemeisoncommunity.png` : `${process.env.PUBLIC_URL}/uploads/${image}`} />
                <Text fontSize="md" fontWeight="bold" pl={4} whiteSpace='nowrap' overflow='hidden' textOverflow='ellipsis' >
                    {children}
                </Text>
                <Spacer />
            </Flex>
            <CommunityInfoModal isOpen={isOpen} onClose={onClose} />
        </>
    )
}