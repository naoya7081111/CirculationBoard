import { memo, ReactNode, VFC } from "react"
import { Flex, Image, Spacer, Text, useDisclosure } from "@chakra-ui/react";
import { UserInfoModal } from "../../organisms/modal/UserInfoModal";
import { useLogout } from "../../../hooks/auth/useLogout";

type Props = {
    children: ReactNode;
    isHost: boolean;
    image: string | null;
};

export const ListUserCard: VFC<Props> = memo((props) => {

    const { children, isHost, image } = props;

    const { logout } = useLogout();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const onClickLogout = () => {
        logout();
    }

    return (
        <>
            <Flex onClick={onOpen} w="280px" alignItems="center" borderRadius={10} bg="orange.50" _hover={{ cursor: "pointer", bg: "orange.100"}} > 
                <Image borderRadius="full" color={isHost ? 'pink.400' : 'teal.400'} border='2px' boxSize="48px" src={image === null ? `${process.env.PUBLIC_URL}/img/freemeison.jpeg` : `${process.env.PUBLIC_URL}/uploads/${image}`} alt='' />
                <Text fontSize="md" fontWeight="bold" pl={4} >
                    {children}
                </Text>
                <Spacer />
            </Flex>
            <UserInfoModal isOpen={isOpen} onClose={onClose} onClickLogout={onClickLogout} />
        </>
    );
});

// src={image ?? undefined}