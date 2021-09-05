import { FormControl, FormLabel, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Spacer, Stack, Switch, Textarea } from "@chakra-ui/react";
import { ChangeEvent, memo, useState, VFC } from "react";
import { useNewsPost } from "../../../hooks/news/useNewsPost";
import { useHostGet } from "../../../hooks/useHostGet";
import { PostButton } from "../../atoms/button/PostButton";

type Props = {
    isOpen: boolean;
    onClose: () => void;
};

export const NewsPostModal: VFC<Props> = memo((props) => {

    const { isOpen, onClose } = props;

    const { newsPost, loading } = useNewsPost();
    const { hostCheck } = useHostGet();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [isImportant, setIsImportant] = useState(false);

    const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
    const onChangeContent = (e: ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value);
    const onChangeImportant = () => setIsImportant(!isImportant);

    const onClickPost = () => {
        newsPost({title, content, isImportant});
        onClose();
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} size='lg' motionPreset="slideInBottom">
            <ModalOverlay />
                <ModalContent bg='orange.50' >
                    <ModalHeader color='gray.500'>ニュース投稿</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                    <FormControl>
                            <Stack spacing={4}>
                                <Input placeholder='タイトルを入力してください' onChange={onChangeTitle} />
                                <Textarea h='480px' size='md' placeholder="ニュースを記載してください" onChange={onChangeContent} />
                                <HStack spacing={2}>
                                    {hostCheck() ? (
                                    <>
                                        <FormLabel htmlFor="email-alerts" mb="0" color='gray.500'>
                                        重要なニュース?
                                        </FormLabel>
                                        <Switch id="email-alerts" onChange={onChangeImportant}/>
                                    </>
                                    ) : null}
                                    <Spacer />
                                    <PostButton onClick={onClickPost} disabled={title ==='' || content === ''} loading={loading} >POST</PostButton>
                                </HStack>
                            </Stack>
                    </FormControl>
                </ModalBody>
            </ModalContent>
        </Modal>

    )
})