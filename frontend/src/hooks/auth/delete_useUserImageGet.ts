import axios from "axios"
import { useCallback } from "react"
import { useMessage } from "../useMessage"

export const useUserImageGet = () => {

    const { showMessage } = useMessage();

    const userImageGet = useCallback(() => {

        const  instance = axios.create({
            'responseType': 'arraybuffer',
            'headers': {
              'Content-Type': 'image/png'
            }
          });

        instance.get('/api/update/user').then((res) => {
            console.log(res.data)
            const userImageInfo = res.data; 
            let base64String = btoa(String.fromCharCode(...new Uint8Array(userImageInfo)));  
            // const base64Encoded = Buffer.from(res.data).toString('base64');
            console.log(base64String)
            if(!res.data.success){
                showMessage({ title: '失敗です',  status: "error"});
            } else {
                // const userImageInfo = res.data.image;
                // console.log(userImageInfo.data)
                console.log(res.data.image)
                // console.log(Buffer.from(userImageInfo.data, 'binary').toString('base64'))    
            }           
        }).catch((error) => {
            console.log(error);
            showMessage({ title: "失敗しました",  status: "error"});
        })
    }, [showMessage]) 
    return { userImageGet };
}

