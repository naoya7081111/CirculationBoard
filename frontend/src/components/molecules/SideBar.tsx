import { memo, VFC, ReactNode } from "react"
import { Box, Flex } from "@chakra-ui/react";

type Props = {
    children: ReactNode;
}

export const SideBar: VFC<Props> = memo((props) => {

    const { children } = props;

    return (
        <>
            <Box  h="100vh" w={{base: "0px", xl: "360px"}} px={1} bg="orange.50" shadow="md" position="fixed" display={{base: "none", xl: "block"}} >
                <Flex mt="80px" p={4} direction="column">
                    {children}
                </Flex>
            </Box>
        </>
    )
})