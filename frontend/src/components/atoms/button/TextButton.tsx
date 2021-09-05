import { Box, Link } from "@chakra-ui/react";
import { VFC } from "react"

type Props = {
    onClick: () => void;
    buttonName: string;
}

export const TextButton: VFC<Props> = (props) => {

    const { onClick, buttonName } = props;

    return (
        <Box _hover={{ color: "blue.300" }} >
        <Link onClick={onClick} fontSize="xs" _hover={{cursor: "pointer"}}>{buttonName}</Link>
    </Box>
    )
}