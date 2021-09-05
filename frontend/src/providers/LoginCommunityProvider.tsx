import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react"
import { useDecodeCommunityJwt } from "../hooks/decoded/useDecodeCommunityJwt";
import { Community } from "../type/Community"

export type LoginCommunityContextType = {
    loginCommunity: Community | null ;
    setLoginCommunity: Dispatch<SetStateAction<Community | null>>
}

export const LoginCommunityContext =  createContext<LoginCommunityContextType>({} as LoginCommunityContextType);

type Props = {
    children: ReactNode;
}

export const LoginCommunityProvider = (props: Props) => {

    const { children } = props;
    const { decodeCommunity } = useDecodeCommunityJwt();

    const defalutCommunity = () => {
        const cookiesArray = document.cookie.split(';');
        const  community_cookies = cookiesArray.find(value => value.match(/community_token=/g));
        if(community_cookies !== undefined){
            const cookies = document.cookie;
            return decodeCommunity({ cookies });
        } else return null;
    }

    const [loginCommunity, setLoginCommunity] = useState<Community | null>(defalutCommunity());

    return (
        <LoginCommunityContext.Provider value={{ loginCommunity, setLoginCommunity }}>
            {children}
        </LoginCommunityContext.Provider>
    )
}
