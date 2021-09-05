import { useCallback } from "react"
import { useCommunityMembers } from "./context/useCommunityMembers";
import { useLoginUser } from "./context/useLoginUser"

export const useHostGet = () => {

    const { loginUser } = useLoginUser();
    const { communityMembers } = useCommunityMembers();

    const hostCheck = useCallback(() => {
        const findUser = communityMembers.find((member) => member.userId === loginUser?.userId);
        return findUser !== undefined ? findUser.isHost : false;
    }, [communityMembers, loginUser])
    return { hostCheck }
}