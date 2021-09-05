import { MouseEvent, ReactNode, VFC } from "react"
import { Flex, Image, Text, Spacer, Button } from "@chakra-ui/react";

type Props = {
    children: ReactNode;
    width: any;
    onClickButton: (e: MouseEvent<HTMLButtonElement>) => void;
    buttonName: string;
    value: number;
    image: string | null;
}

export const ListBelongCard: VFC<Props> = (props) => {
    const { children, width, onClickButton, buttonName, value, image } = props;
    return (
        <>
            <Flex w={width} h="64px" p={2} alignItems="center" borderRadius={10} bg="orange.50" > 
                <Image borderRadius="lg" boxSize="32px" src={image === null ? `${process.env.PUBLIC_URL}/img/freemeisoncommunity.png` : `${process.env.PUBLIC_URL}/uploads/${image}`} />
                <Text fontSize="sm" fontWeight="bold" pl={4} >
                    {children}
                </Text>
                <Spacer />
                <Button fontSize="xs" shadow="sm" onClick={onClickButton} value={value}>{buttonName}</Button>
            </Flex>
        </>
    )
}