import axios from "axios";
import { useCallback } from "react"
import { useNewsLists } from "./context/useNewsLists";
import { useNewsGet } from "./news/useNewsGet";

type Props = {
    newsId: number;
}

export const useComplete = () => {

    const { newsLists } = useNewsLists();
    const { newsGet } = useNewsGet();

    const completeUp = useCallback((props: Props) => {
        const { newsId } = props;
        const data = { id: newsId };
        const targetNews = newsLists.find((value) => value.newsId === newsId);

        if (!targetNews?.isComplete) {
            axios.post('/api/complete', data).then((res) => {
                newsGet();
            }).catch((error) => {
                console.log(error);
            })    
        }
    }, [newsGet, newsLists]);
    return { completeUp };
}