/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios"
import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { CommunityListsSource } from "../type/CommunityListsSource";
import { useCommunityLists } from "./context/useCommunityLists";
import { useMessage } from "./useMessage";

export const useCommunityListsGet = () => {

    const history = useHistory();
    const { setCommunityLists } = useCommunityLists();
    const { showMessage } = useMessage();

    const communityListsGet = useCallback(() => {

        axios.get('/api/communityLists').then((res) => {
            if (res.data.success) {
                const communitySource = res.data.communities;
                const communitiesInfo = communitySource.map((c: CommunityListsSource) => (
                    {
                        communityId: c.communityid,
                        entryDate: c.entrydate,
                        withdrawalDate: c.withdrawaldate,
                        communityName: c.communityname,
                        communityImageName: c.imagename
                     }
                ))        
                setCommunityLists(communitiesInfo);
                return;    
            } else {
                showMessage({title: res.data.message, status: 'error'});
                return;
            }
        }).catch((error) => {
            if (error.response.status === 403) {
                showMessage({ title: '再度ログインしてください', status: 'error' });
                history.push('/');
            }
            console.log(error);
            return;
        })    
    }, []);
    return {communityListsGet};
}