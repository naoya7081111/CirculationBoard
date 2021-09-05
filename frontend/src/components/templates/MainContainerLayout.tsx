import { memo, VFC, ReactNode } from "react"

import { MainContainerBase } from "../organisms/layout/MainContainerBase";
import { MainContainer } from "../organisms/layout/MainContainer";

type Props = {
    children: ReactNode;
}

export const MainContainerLayout: VFC<Props> = memo((props) => {

    const { children } = props;

    return (
        <>
            <MainContainerBase>
                <MainContainer>
                    {children}
                </MainContainer>
            </MainContainerBase>

        </>
    )
})