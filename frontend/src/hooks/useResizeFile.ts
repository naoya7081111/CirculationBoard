import { useCallback } from "react";
import Resizer from "react-image-file-resizer";

type Props = {
    file: File;
}

export const useResizeFile = () => {

    const resizeFile = useCallback((props: Props): Promise<string> => {

        const { file } = props;

        return new Promise((resolve) => {
            Resizer.imageFileResizer(
            file,
            300,
            300,
            'JPEG',
            100,
            0,
            (uri) => {
                resolve(uri as string)
            },
            'base64'
            )
        })

    }, []);
    return { resizeFile };
}