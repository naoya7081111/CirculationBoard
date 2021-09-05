/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/first */
import { memo, MouseEvent, useCallback, useEffect, VFC } from "react"
import { ListNewsCard } from "../molecules/listCard/ListNewsCard";
import { useLoginCommunity } from "../../hooks/context/useLoginCommunity";
import { EntryContainer } from "../organisms/layout/EntryContainer";
import { EntryContent } from "../organisms/contentOrder/EntryContent";
import { useDefaultPage } from "../../hooks/useDefaultPage";
import { useNewsLists } from "../../hooks/context/useNewsLists";
import { NewsContainer } from "../organisms/layout/news/NewsContainer";
import { useHistory } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";
import { EditButton } from "../atoms/button/EditButton";
import { NewsPostModal } from "../organisms/modal/NewsPostModal";

export const Home: VFC = memo(() => {

    const history = useHistory();
    const { loginCommunity } =useLoginCommunity();
    const { defaultPage } = useDefaultPage();
    const { newsLists } = useNewsLists();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const onClickNews = useCallback((e: MouseEvent<HTMLButtonElement>) => {
        const getNewsId = (e.target as HTMLButtonElement).value;
        history.push(`/home/view/${getNewsId}`);
    }, [])

    const importantNewsLists = newsLists.filter((news) => {
        return news.isImportant;
    });
    const normalNewsLists = newsLists.filter((news) => {
        return !news.isImportant;
    });

    useEffect(() => {
        defaultPage();
    }, [])

    const onClcikNewsImportant = () => {
        const status = 'Important'
        history.push(`/home/newslists/${status}`)
    }

    const onClcikNewsNormal = () => {
        const status = 'normal'
        history.push(`/home/newslists/${status}`)
    }

    return (
        <>
            {loginCommunity !== null && (
                <>
                {importantNewsLists.length !== 0 && (
                    <>
                    <NewsContainer title={'重要なニュース'} onClickNews={onClcikNewsImportant} >
                        {importantNewsLists?.map((news) => (
                                <ListNewsCard key={news.newsId} value={news.newsId} isComplete={news.isComplete} onClickNews={onClickNews}>{news.newsTitle}</ListNewsCard>
                            ))}
                    </NewsContainer>
                    </>
                )}
                {normalNewsLists.length !== 0 && (
                    <>
                    <NewsContainer title={'新着のニュース'} onClickNews={onClcikNewsNormal} >
                    {normalNewsLists?.map((news) => (
                                <ListNewsCard key={news.newsId} value={news.newsId} isComplete={news.isComplete} onClickNews={onClickNews}>{news.newsTitle}</ListNewsCard>
                            ))}
                    </NewsContainer>                                   
                    </>
                )}
                </>
            )}
            <EntryContainer>
                <EntryContent />
            </EntryContainer>
            <EditButton onClickEdit={onOpen}/>
            <NewsPostModal isOpen={isOpen} onClose={onClose} />
        </>
    )
});