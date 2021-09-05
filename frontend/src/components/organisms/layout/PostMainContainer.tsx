import { memo, VFC, ReactNode } from "react"
import { Flex } from "@chakra-ui/react";


type Props = {
    children: ReactNode;
}

export const PostMainContainer: VFC<Props> = memo((props) => {

    const { children } = props;

    return (
        <>
            <Flex w={{base: "480px", md:"80%"}} h="960px" mt={{base: 6, md: 8}} mx={{base: 16, md: "auto"}} p={4} bg="orange.50" borderRadius="lg" shadow="md">
                {children}
            </Flex>

        </>
    )
})