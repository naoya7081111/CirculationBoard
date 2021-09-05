import { memo, VFC } from "react"
import { IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

type Props = {
    onOpen: () => void;
}

export const MenuIconButton: VFC<Props> = memo((props) => {

    const { onOpen } = props;

    return (
        <IconButton 
            aria-label="メニューボタン"
            icon={<HamburgerIcon />}
            size="md"
            variant="unstyled"
            display={{base: "block", xl: "none"}}
            onClick={onOpen}
    />
    )
});