import axios from "axios"
import { useCallback } from "react"
import { Community } from "../type/Community";
import { useLoginCommunity } from "./context/useLoginCommunity";
import { useDecodeCommunityJwt } from "./decoded/useDecodeCommunityJwt";
import { useMessage } from "./useMessage";

type Props = {
    imageFile: File | null;
}

export const useUpdateCommunityImage = () => {

    const { showMessage } = useMessage();
    const { decodeCommunity } = useDecodeCommunityJwt();
    const { setLoginCommunity } = useLoginCommunity();

    const updateCommunityImage = useCallback((props: Props) => {

        const { imageFile } = props;
        const data = new FormData();
        if (imageFile !== null){data.append('file', imageFile)};

        const header = { 
            headers: {
            "content-type": "multipart/form-data"
            }
        }

        axios.post('/api/update/communityimage', data, header).then((res) => {
            if(!res.data.success){
                showMessage({ title: '失敗です',  status: "error"});
            } else {
                const cookies = document.cookie;
                const decoded = decodeCommunity({ cookies });
                if(decoded){
                    const communityInfo: Community | null = decoded;
                    setLoginCommunity(communityInfo);
                } else {
                    showMessage({ title: res.data.message,  status: "error"});
                }
            }           
        }).catch((error) => {
            console.log(error);
            showMessage({ title: "更新に失敗しました",  status: "error"});
        })
    }, [showMessage, setLoginCommunity, decodeCommunity]) 
    return { updateCommunityImage };
}