import { useContext } from "react";
import { CommunityListsContext, CommunityListsContextType } from "../../providers/CommunityListsProvider";

export const useCommunityLists =  (): CommunityListsContextType => useContext(CommunityListsContext);