import { useContext } from "react";
import { CommunityMembersContext, CommunityMembersContextType } from "../../providers/CommunityMembersProvider";

export const useCommunityMembers = (): CommunityMembersContextType => useContext(CommunityMembersContext);