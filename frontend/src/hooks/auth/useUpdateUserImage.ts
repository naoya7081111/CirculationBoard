import axios from "axios"
import { useCallback } from "react"
import { User } from "../../type/User"
import { useLoginUser } from "../context/useLoginUser"
import { useDecodeJwt } from "../decoded/useDecodeJwt"
import { useMessage } from "../useMessage"

type Props = {
    imageFile: File | null;
}

export const useUpdateUserImage = () => {

    const { showMessage } = useMessage();
    const { decodeJwt } = useDecodeJwt();
    const { setLoginUser } = useLoginUser();

    const updateUserImage = useCallback((props: Props) => {

        const { imageFile } = props;
        const data = new FormData();
        if (imageFile !== null){data.append('file', imageFile)};
        const header = { 
            headers: {
            "content-type": "multipart/form-data"
            }
        }

        axios.post('/api/update/userimage', data, header).then((res) => {
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
    return { updateUserImage };
}