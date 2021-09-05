import { useContext } from "react";
import { NewsListsContext, NewsListsContextType } from "../../providers/NewsListsProvider";

export const useNewsLists = (): NewsListsContextType => useContext(NewsListsContext);