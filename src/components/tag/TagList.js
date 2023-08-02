import React, { useEffect, useState } from "react"
import { getTags } from "../../managers/tags";
import { Tag } from "./Tag";
import "./Tags.css"

export const TagList = () => {
    const [tags, setTags] = useState([])

    useEffect(() => {
        getTags().then((tagsData) => setTags(tagsData))
    }, [])

    return (
        <div style={{ margin: "0rem 3rem" }}>
            <h1>Tags</h1>
            <article className="tags">
                {
                    tags.map(tag => <Tag key={tag.id} tag={tag} />)
                }
            </article>
        </div>
    )
}