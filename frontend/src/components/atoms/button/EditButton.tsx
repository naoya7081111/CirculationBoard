import { memo, VFC } from "react"
import { IconButton } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";

type Props = {
    onClickEdit: () => void;
}

export const EditButton: VFC<Props> = memo((props) => {

    const { onClickEdit } = props;

    return (
        <IconButton 
            aria-label="編集ボタン"
            icon={<EditIcon />}
            w='42px'
            borderRadius='xl'
            colorScheme="orange"
            size="lg"
            onClick={onClickEdit}
            position='fixed'
            bottom='5'
            right='10'
            shadow='dark-lg'
    />
    )
});