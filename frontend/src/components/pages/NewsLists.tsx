/* eslint-disable react-hooks/exhaustive-deps */
import { memo, MouseEvent, useCallback, useEffect, VFC } from "react"
import { useHistory, useParams } from "react-router-dom";
import { useNewsLists } from "../../hooks/context/useNewsLists";
import { useDefaultPage } from "../../hooks/useDefaultPage";
import { ListNewsCard } from "../molecules/listCard/ListNewsCard";
import { ViewMainContainer } from "../organisms/layout/news/ViewMainContainer";

export const NewsLists: VFC = memo(() => {

    const { newsLists } = useNewsLists();
    const history = useHistory();
    const { defaultPage } = useDefaultPage();

    const onClickNews = useCallback((e: MouseEvent<HTMLButtonElement>) => {
        const getNewsId = (e.target as HTMLButtonElement).value;
        history.push(`/home/view/${getNewsId}`);
    }, [])

    const params: {status: string} = useParams();
    const status = params.status;

    const selectNewsLists = newsLists.filter((news) => {
        return status === 'Important' ? news.isImportant : !news.isImportant; 
    });

    useEffect(() => {
        defaultPage();
    }, [])

    return (
        <>
            <ViewMainContainer title={status === 'Important' ? '重要なニュース' : '新着のニュース'}>
                {selectNewsLists.length !== 0 && (
                    <>
                    {selectNewsLists?.map((news) => (
                            <ListNewsCard key={news.newsId} value={news.newsId} isComplete={news.isComplete} onClickNews={onClickNews}>{news.newsTitle}</ListNewsCard>
                        ))}
                    </>
                )}
            </ViewMainContainer>
        </>
    )
});