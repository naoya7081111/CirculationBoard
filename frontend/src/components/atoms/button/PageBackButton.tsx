import { ArrowLeftIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
    onClickBack: () => void;
}

export const PageBackButton: VFC<Props> = memo((props) => {
    const { onClickBack } = props;
    return (
        <IconButton 
            aria-label='戻るボタン'
            icon={<ArrowLeftIcon />}
            color='orange.400'
            size="md"
            variant="unstyled"
            onClick={onClickBack}
            float='left'
        />
    )
})