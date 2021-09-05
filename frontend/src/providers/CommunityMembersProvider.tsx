import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react"
import { CommunityMember } from "../type/CommunityMember";

export type CommunityMembersContextType = {
    communityMembers: Array<CommunityMember>;
    setCommunityMembers: Dispatch<SetStateAction<Array<CommunityMember>>>
}

export const CommunityMembersContext = createContext<CommunityMembersContextType>({} as CommunityMembersContextType);

type Props = {
    children: ReactNode
};

export const CommunityMembersProvider = (props: Props) => {
    const { children } = props;
    const [communityMembers, setCommunityMembers] = useState<Array<CommunityMember>>([]);
    return (
        <CommunityMembersContext.Provider value={{communityMembers, setCommunityMembers}} >
            {children}
        </CommunityMembersContext.Provider>
    )
}