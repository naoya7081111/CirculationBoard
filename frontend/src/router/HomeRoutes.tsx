import { Home } from "../components/pages/Home";
import { View } from "../components/pages/View";
import { Post } from "../components/pages/Post";
import { Page404 } from "../components/pages/Page404";
import { NewsLists } from "../components/pages/NewsLists";

export const homeRoutes = [
    {
        path: "/",
        exact: true,
        childern: <Home />
    },
    {
        path: "/view/:newsId",
        exact: false,
        childern: <View />
    },
    {
        path: "/newslists/:status",
        exact: false,
        childern: <NewsLists />
    },
    {
        path: "/post",
        exact: false,
        childern: <Post />
    },
    {
        path: "*",
        exact: false,
        childern: <Page404 />
    },
];