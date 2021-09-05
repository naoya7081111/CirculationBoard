import { memo, VFC, ReactNode } from "react"
import { Text } from "@chakra-ui/react";

type Props = {
    children: ReactNode;
}

export const SideBarText: VFC<Props> = memo((props) => {

    const { children } = props;

    return (
        <>
            <Text as="h1" fontSize="xs" fontWeight="bold" color='gray.600' mb={4} >
                {children}
            </Text>
        </>
    )
})