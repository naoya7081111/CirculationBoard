import { memo, VFC } from "react"
import { IconButton } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

type Props = {
    onClose: () => void;
}

export const CloseButton: VFC<Props> = memo((props) => {

    const { onClose } = props;

    return (
        <IconButton 
            aria-label="クローズボタン"
            icon={<CloseIcon />}
            size="md"
            variant="unstyled"
            onClick={onClose}
    />
    )
});