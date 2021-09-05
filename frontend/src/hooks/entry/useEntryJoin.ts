/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useCallback, useState } from "react"
import { useMessage } from "../useMessage";
import { Community } from "../../type/Community"
import { useDecodeCommunityJwt } from "../decoded/useDecodeCommunityJwt";
import { useHistory } from "react-router-dom";
import { useLoginCommunity } from "../context/useLoginCommunity";

type Props = {
    id: number;
    password: string;
    isAlready: boolean;
}

export const useEntryJoin = () => {

    const history = useHistory();
    const { showMessage } = useMessage();
    const { decodeCommunity } = useDecodeCommunityJwt();
    const { setLoginCommunity } = useLoginCommunity();

    const [joinLoading, setJoinLoading] = useState(false);

    const entry = useCallback((props: Props) => {

        const { id, password, isAlready } = props;
        const data = {
            id: id,
            password: password,
            isAlready: isAlready
        }
        setJoinLoading(true);

        axios.post('/api/entry/join', data).then((res) => {
        if(!res.data.success){
            showMessage({ title: res.data.message, status: 'error' });
        } else {
            const cookies = document.cookie;
            const communityInfo: Community | null = decodeCommunity({ cookies });
            setLoginCommunity(communityInfo);
            history.push('/home');
            history.go(0)  
            showMessage({ title: res.data.message, status: "success" });
        }
        setJoinLoading(false);
        }).catch((error) => {
            console.log(error);
            setJoinLoading(false);
            showMessage({ title: 'エラーです(汗)', status: 'error' })
        });    
    }, []);

    return { entry, joinLoading };
}