/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState } from "react";
import axios from "axios";
import { useMessage } from "./useMessage";
import { useHistory } from "react-router-dom";

type Props = {
    name: string;
    password: string;
};

export const useEstablish = () => {

    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const { showMessage } = useMessage();

    const establish = useCallback((props: Props) => {

        const { name, password } = props;
        const data = {
            name: name,
            password: password
        }; 

        setLoading(true);

        axios.post('/api/establish', data).then((res) => {
            if(!res.data.success){
                showMessage({ title: res.data.message, status: 'error' });
                setLoading(false);    
            } else {
                showMessage({ title: res.data.message, status: 'success' })
                history.push('/home');  
                history.go(0)  
            }
        }).catch((error) => {
            showMessage({ title: '登録できませんでした(汗)', status: 'error' });
            setLoading(false);
        });

    }, []);
    return { establish, loading }
};