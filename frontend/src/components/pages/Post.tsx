import { memo, VFC } from "react"
import { useHostGet } from "../../hooks/useHostGet";
import { ListUserCard } from "../molecules/listCard/ListUserCard";

import { SideBar } from "../molecules/SideBar";
import { PostMainContainerLayout } from "../templates/PostMainContainerLayout";
export const Post: VFC = memo(() => {

    const { hostCheck } = useHostGet();


    return (
        <>
            <SideBar>
                <ListUserCard isHost={hostCheck()} image={null} >nnn</ListUserCard>
            </SideBar>
            <PostMainContainerLayout>
                ポストします
            </PostMainContainerLayout>
        </>
    )
});