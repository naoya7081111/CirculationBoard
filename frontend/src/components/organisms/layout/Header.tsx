/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useCallback, VFC } from "react"
import { Flex, Heading, useDisclosure } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";

export const Header: VFC = memo(() => {

    const { isOpen, onClose, onOpen } = useDisclosure();
    const history = useHistory();

    const onClickHome = useCallback(() => {
        history.push("/home");
        history.go(0);
    }, []);

    return (
        <>
            <Flex as="nav" h="80px" width="100%" bg="orange.400" padding={{ base: 3, md: 5 }} align="center" shadow="md" position="fixed" zIndex={1}>
                <Flex as="a" align="center"  _hover={{ cursor: "pointer" }} onClick={onClickHome} >
                    <Heading　as="h1" color="whitesmoke">
                        SEAZECH
                    </Heading>
                </Flex>
                <MenuIconButton onOpen={onOpen} />
                <MenuDrawer onClose={onClose} isOpen={isOpen} />
            </Flex>
        </>
    )
});