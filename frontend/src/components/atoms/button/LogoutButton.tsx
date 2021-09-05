import { memo, ReactNode, VFC } from "react"
import { Button } from "@chakra-ui/react";

type Props = {
    children: ReactNode;
    disabled?: boolean;
    loading?: boolean;
    onClick?: () => void;
}

export const LogoutButton: VFC<Props> = memo((props) => {

    const { children, disabled, loading, onClick } = props;

    return (
            <Button bg="red.400" color="gray.100" fontSize='xs' shadow='md' disabled={disabled} isLoading={loading} _hover={{ opacity: 0.5 }} onClick={onClick}  >
                {children}
            </Button> 
    )
});