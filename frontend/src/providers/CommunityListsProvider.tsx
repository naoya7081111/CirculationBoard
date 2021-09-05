import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { CommunityLists } from "../type/CommunityLists";

export type CommunityListsContextType = {
    communityLists: Array<CommunityLists>;
    setCommunityLists: Dispatch<SetStateAction<Array<CommunityLists>>>
}

export const CommunityListsContext = createContext<CommunityListsContextType>({} as CommunityListsContextType);

type Props = {
    children: ReactNode
}

export const CommunityListsProvider = (props: Props) => {
    const { children } = props;
    const [communityLists, setCommunityLists] = useState<Array<CommunityLists>>([]);
    return (
        <CommunityListsContext.Provider value={{ communityLists, setCommunityLists }} >
            {children}
        </CommunityListsContext.Provider>
    )
}