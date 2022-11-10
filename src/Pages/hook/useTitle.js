import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title}-PhotographyLux`;
    }, [title])
}

export default useTitle;