/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios"
import { useCallback, useState } from "react";
import { NeverMember } from "../../type/NeverMember";
import { NeverMemberSouce } from "../../type/NeverMemberSouce";

type Props = {
    newsId: number;
}

export const useNeverMembersGet = () => {

    const [neverMembers, setNeverMembers] = useState<Array<NeverMember>>([]);

    const neverMembersGet = useCallback((props: Props) => {

        const { newsId } = props;
        const data = { id: newsId };

        axios.post('/api/complete/never', data).then((res) => {
            const membersSource = res.data.members;
            const membersInfo: Array<NeverMember> = membersSource.map((member: NeverMemberSouce) => (
                {
                    userId: member.userid,
                    userName: member.username,
                    userImageName: member.imagename,
                    email: member.email
                }
            ))
            setNeverMembers(membersInfo);
            return;
        }).catch((error) => {
            console.log(error);
            return;
        })
    }, []);
    return {neverMembersGet, neverMembers};
}