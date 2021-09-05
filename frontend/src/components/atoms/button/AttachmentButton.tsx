import { memo, ReactNode, VFC } from "react"
import { IconButton } from "@chakra-ui/react";
import { AttachmentIcon } from "@chakra-ui/icons";

type Props = {
    children?: ReactNode;
}

export const AttachmentButton: VFC<Props> = memo((props) => {

    const { children } = props;

    return (
        <IconButton 
            aria-label="クローズボタン"
            icon={<AttachmentIcon />}
            size="md"
            variant="unstyled"
        >
            {children}
        </IconButton>
    )
});