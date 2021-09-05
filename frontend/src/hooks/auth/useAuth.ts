import axios from "axios"
import { useCallback, useState } from "react"
import { useHistory } from "react-router-dom"

import { User } from "../../type/User";
import { useMessage } from "../useMessage";
import { useLoginUser } from "../context/useLoginUser";
import { useDecodeJwt } from "../decoded/useDecodeJwt";

type Props = {
    email: string;
    password: string;
}

export const useAuth = ()=> {

    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const { showMessage } = useMessage();
    const { setLoginUser } = useLoginUser();
    const { decodeJwt } = useDecodeJwt();

    const login = useCallback((props: Props) => {
        const {email, password} = props;
        const data = {
            email: email,
            password: password
        };
        setLoading(true);

        axios.post('api/login', data).then((res) => {
            if(!res.data.success){
                showMessage({ title: res.data.message,  status: "error"});
                setLoading(false);
            } else {
                const cookies = document.cookie;
                const decoded = decodeJwt({ cookies });
                if(decoded){
                    const userInfo: User | null = decoded;
                    setLoginUser(userInfo);
                    showMessage({ title: "ログインしました",  status: "success"});
                    history.push("/home");                                        
                } else {
                    showMessage({ title: res.data.message,  status: "error"});
                    setLoading(false);    
                }
            }
        }).catch((error) => {
            console.log(error);
            showMessage({ title: "ログインに失敗しました",  status: "error"});
            setLoading(false);
        })    
    }, [history, showMessage, setLoginUser, decodeJwt]);
    return { login, loading };
}