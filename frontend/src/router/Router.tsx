import { memo, VFC } from "react"
import { Route, Switch } from "react-router-dom";
import { Login } from "../components/pages/Login";
import { Page404 } from "../components/pages/Page404";
import { homeRoutes } from "./HomeRoutes";
import { HeaderLayout } from "../components/templates/HeaderLayout";
import { LoginUserProvider } from "../providers/LoginUserProvider";
import { LoginCommunityProvider } from "../providers/LoginCommunityProvider";
import { SignUp } from "../components/pages/SignUp";
import { Establish } from "../components/pages/Establish";
import { Entry } from "../components/pages/Entry";
import { CommunityMembersProvider } from "../providers/CommunityMembersProvider";
import { CommunityListsProvider } from "../providers/CommunityListsProvider";
import { SideBar } from "../components/molecules/SideBar";
import { SideContent } from "../components/organisms/contentOrder/SideContent";
import { MainContainerLayout } from "../components/templates/MainContainerLayout";
import { NewsListsProvider } from "../providers/NewsListsProvider";

export const Router: VFC = memo(() => {
    return (
        <Switch>
            <LoginUserProvider>
                <LoginCommunityProvider>
                    <CommunityListsProvider>
                    <CommunityMembersProvider>
                        <NewsListsProvider>
                            <Route exact path="/">
                                <Login />
                            </Route>
                            <Route exact path="/signup">
                                <SignUp />
                            </Route>
                            <Route exact path="/establish">
                                <Establish />
                            </Route>
                            <Route exact path="/entry/">
                                <Entry />
                            </Route>
                            <Route path="/home" render={({match: { url }}) => (
                                <Switch>
                                    {homeRoutes.map((route) => (
                                        <Route key={route.path} exact={route.exact} path={`${url}${route.path}`} >
                                            <HeaderLayout>
                                                <SideBar>
                                                    <SideContent />
                                                </SideBar>
                                                <MainContainerLayout>
                                                    {route.childern}
                                                </MainContainerLayout>
                                            </HeaderLayout>
                                        </Route>
                                    ))}
                                </Switch>
                            )} />
                        </NewsListsProvider>
                    </CommunityMembersProvider>
                    </CommunityListsProvider>
                </LoginCommunityProvider>
            </LoginUserProvider>
            <Route path="*">
                <Page404 />
            </Route>
        </Switch>
    )
});