import { useState } from "react";

import FSPageLoader from "../components/FSPageLoader";


const usePageLoaderHook = (initialValue: boolean) => {
    const [loaded, setLoaded] = useState(initialValue)

    return [loaded ? null : <FSPageLoader/>, ()=> setLoaded(true), () => setLoaded(false)]
}

export default usePageLoaderHook