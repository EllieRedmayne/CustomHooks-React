import {useEffect} from "react";

function useDocumentTitle(newTitle) {
    useEffect(() => {
        document.title = newTitle;
    }, [newTitle]);
}

export default useDocumentTitle;