import { memo, VFC, ReactNode } from "react"

import { MainContainerBase } from "../organisms/layout/MainContainerBase";
import { PostMainContainer } from "../organisms/layout/PostMainContainer";

type Props = {
    children: ReactNode;
}

export const PostMainContainerLayout: VFC<Props> = memo((props) => {

    const { children } = props;

    return (
        <>
            <MainContainerBase>
                <PostMainContainer>
                    {children}
                </PostMainContainer>
            </MainContainerBase>

        </>
    )
})