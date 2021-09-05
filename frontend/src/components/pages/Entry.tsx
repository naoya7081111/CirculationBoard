import { Box, Divider, Flex, Heading } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { EntryContent } from "../organisms/contentOrder/EntryContent";

export const Entry: VFC = memo(() => {
    return (
        <Flex align="center" justify="center"  height="100vh">
            <Box bg="white" w="md" p={4} borderRadius="lg" boxShadow="md">
                <Heading as="h1"  size="lg" textAlign="center">
                    コミュニティ検索
                </Heading>
                <Divider my={4}/>
                <EntryContent />
            </Box>
        </Flex>
    )
});