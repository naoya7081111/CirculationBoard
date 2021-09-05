import { useCallback, useState } from "react";
import axios from "axios";
import { useMessage } from "../useMessage";
import { useDecodeJwt } from "../decoded/useDecodeJwt";
import { useHistory } from "react-router-dom";
import { useLoginUser } from "../context/useLoginUser";
import { User } from "../../type/User";

type Props = {
    name: string;
    email: string;
    password: string;
};

export const useSignUp = () => {

    const history = useHistory();
    const { showMessage } = useMessage();
    const { decodeJwt } = useDecodeJwt();
    const { setLoginUser } = useLoginUser();

    const [loading, setLoading] = useState(false);

    const signup = useCallback((props: Props) => {
        const { name, email, password } = props;
        const data = {
            name: name,
            email: email,
            password: password
        }
        setLoading(true);

        axios.post('/api/signup', data).then((res) => {
            if (!res.data.success) {
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
            showMessage({ title: "登録できませんでした(汗)",  status: "error"});           
            setLoading(false);
        });

    }, [history, showMessage, decodeJwt, setLoginUser]);
    return { signup, loading };
};