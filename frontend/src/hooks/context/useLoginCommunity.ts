import { useContext } from "react";
import { LoginCommunityContext, LoginCommunityContextType } from "../../providers/LoginCommunityProvider";

export const useLoginCommunity = (): LoginCommunityContextType => useContext(LoginCommunityContext)