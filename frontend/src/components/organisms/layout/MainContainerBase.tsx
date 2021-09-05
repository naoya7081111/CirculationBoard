import { memo, VFC, ReactNode } from "react"
import { Box } from "@chakra-ui/react";


type Props = {
    children: ReactNode;
}

export const MainContainerBase: VFC<Props> = memo((props) => {

    const { children } = props;

    return (
        <>
            <Box bg="transparent" h="auto" pt="80px" pl={{base: "0px", xl: "360px"}} >
                {children}
            </Box>

        </>
    )
})