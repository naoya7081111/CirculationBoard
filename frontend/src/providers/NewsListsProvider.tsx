import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { News } from "../type/News";

export type NewsListsContextType = {
    newsLists: Array<News>;
    setNewsLists: Dispatch<SetStateAction<Array<News>>>;
}

export const NewsListsContext = createContext<NewsListsContextType>({} as NewsListsContextType);

type Props = {
    children: ReactNode;
}

export const NewsListsProvider = (props: Props) => {
    const { children } = props;
    const [newsLists, setNewsLists] = useState<Array<News>>([]);
    return (
        <NewsListsContext.Provider value={{ newsLists, setNewsLists }}>
            {children}
        </NewsListsContext.Provider>
    )
}