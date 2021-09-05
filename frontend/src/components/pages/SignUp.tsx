/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { ChangeEvent, memo, useCallback, useState, VFC } from "react";
import { useMessage } from "../../hooks/useMessage";
import { useSignUp } from "../../hooks/auth/useSignUp";
import { LoginButton } from "../atoms/button/LoginButton";

export const SignUp: VFC = memo(() => {

    const { signup, loading } = useSignUp();
    const { showMessage } = useMessage();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const onChangeName = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value);
    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);
    const onChangePassword2 = (e: ChangeEvent<HTMLInputElement>) => setPassword2(e.target.value);

    const onClickSignUp = useCallback(() => {
        if(password === password2){
            signup({ name, email, password });
        } else {
            showMessage({ title: "パスワードが違います", status: "error" });
        }
    }, [name, email, password, password2]);

    const onClickEnter = (e: any) => {
        if(e.key === 'Enter') {
            e.preventDefault();
            if(name !== "" && email !== "" && password !== '' && password2 !== ''){
                onClickSignUp();
            }
        }
    }


    return (
        <Flex align="center" justify="center"  height="100vh">
            <Box bg="white" w="lg" p={4} borderRadius="lg" boxShadow="md">
                <Heading as="h1"  size="lg" textAlign="center">
                    新規登録
                </Heading>
                <Divider my={4}/>
                <Stack spacing={10} mx={4} >
                    <Input  placeholder="ユーザー名を入力してください" onChange={onChangeName} onKeyPress={(e) => onClickEnter(e)}/>
                    <Input  placeholder="メールアドレスを入力してください" onChange={onChangeEmail} onKeyPress={(e) => onClickEnter(e)}/>
                    <Input  placeholder="パスワードを入力してください" type="password" onChange={onChangePassword}onKeyPress={(e) => onClickEnter(e)}/>
                    <Input  placeholder="もう一度パスワードを入力してください" type="password" onChange={onChangePassword2}onKeyPress={(e) => onClickEnter(e)}/>
                    <LoginButton onClick={onClickSignUp} disabled={name === "" || email === "" || password === '' || password2 === ''} loading={loading} >
                        登録する
                    </LoginButton>
                </Stack>
            </Box>
        </Flex>
    )
});