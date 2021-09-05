import axios from "axios"
import { useCallback } from "react"
import { User } from "../../type/User"
import { useLoginUser } from "../context/useLoginUser"
import { useDecodeJwt } from "../decoded/useDecodeJwt"
import { useMessage } from "../useMessage"

type Props = {
    name: string;
    email: string;
}

export const useUpdateUser = () => {

    const { showMessage } = useMessage();
    const { decodeJwt } = useDecodeJwt();
    const { setLoginUser } = useLoginUser();

    const updateUser = useCallback((props: Props) => {

        const { name, email } = props;
        const data = new FormData();
        data.append('name', name);
        data.append('email', email);

        axios.post('/api/update/user', data).then((res) => {
            if(!res.data.success){
                showMessage({ title: '失敗です',  status: "error"});
            } else {
                const cookies = document.cookie;
                const decoded = decodeJwt({ cookies });
                if(decoded){
                    const userInfo: User | null = decoded;
                    setLoginUser(userInfo);
                } else {
                    showMessage({ title: res.data.message,  status: "error"});
                }
            }           
        }).catch((error) => {
            console.log(error);
            showMessage({ title: "更新に失敗しました",  status: "error"});
        })
    }, [showMessage, setLoginUser, decodeJwt]) 
    return { updateUser };
}