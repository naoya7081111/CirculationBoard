import { memo, VFC, ReactNode } from "react"
import { Flex, Text, Spacer, Box, Link } from "@chakra-ui/react";

type Props = {
    children: ReactNode;
    buttonName: string;
    onClick: () => void;
}

export const SideBarTextAndButton: VFC<Props> = memo((props) => {

    const { children, buttonName, onClick } = props;

    return (
        <>
            <Flex w="280px" align="center"  mb={4} >
                <Text as="h1" fontSize="xs" fontWeight="bold" color='gray.600' >{children}</Text>
                <Spacer />
                <Box _hover={{ color: "blue.300" }} >
                    <Link onClick={onClick} fontSize="xs" _hover={{cursor: "pointer"}}>{buttonName}</Link>
                </Box>
            </Flex>
        </>
    )
})