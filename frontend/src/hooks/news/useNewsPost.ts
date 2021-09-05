/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDefaultPage } from "../useDefaultPage";
import { useMessage } from "../useMessage";

type Props = {
    title: string;
    content: string;
    isImportant: boolean;
};

export const useNewsPost = () => {

    const history = useHistory();
    const { showMessage } = useMessage();
    const { defaultPage } = useDefaultPage();

    const [loading, setLoading] = useState(false);

    const newsPost = useCallback((props: Props) => {

        const { title, content, isImportant } = props;
        const data = {
            title: title,
            content: content,
            important: isImportant
        };
        setLoading(true);

        axios.post('/api/news/post', data).then((res) => {
            if (!res.data.success) {
                showMessage({title: res.data.message, status: 'error'});
            } else {
                defaultPage();
                showMessage({ title: res.data.message, status: 'success' });
                setLoading(false);
                history.push('/home');
            }
        }).catch((error) => {
            console.log(error);
            setLoading(false);
            showMessage({ title: "ポストに失敗しました",  status: "error"});
        });
    }, []);
    return { newsPost, loading };
}