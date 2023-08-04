import { useState } from "react"
import { TitleSearch } from "./TitleSearch"
import { Posts } from "./Posts"

export const PostContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")

    return <>
        <TitleSearch setSearchTerms={setSearchTerms} />
        <Posts searchTermState={searchTerms} />
    </>
}

