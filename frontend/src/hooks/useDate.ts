import { useCallback } from "react";

type Props = {
    date: Date | null;
}

export const useDate = () => {

    const dateKanji = useCallback((props: Props) => {
        const { date } = props;
        if (date === null) {
            return null;
        } else {
            const nd = new Date(date);
            const y = nd.getFullYear();
            const m = nd.getMonth() + 1;
            const d = nd.getDate();
            return `${y}年${m}月${d}日`;                
        }

    }, []);
    return { dateKanji };
}