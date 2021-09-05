import { memo, ReactNode, VFC } from "react"
import { Button } from "@chakra-ui/react";

type Props = {
    children: ReactNode;
    disabled?: boolean;
    loading?: boolean;
    onClick?: () => void;
}

export const SettingButton: VFC<Props> = memo((props) => {

    const { children, disabled, loading, onClick } = props;

    return (
            <Button bg='orange.50' borderColor="orange.400" border='2px' color="orange.400" fontSize='xs' borderRadius='3xl' shadow='md' disabled={disabled} isLoading={loading} _hover={{ opacity: 0.5 }} onClick={onClick}  >
                {children}
            </Button> 
    )
});