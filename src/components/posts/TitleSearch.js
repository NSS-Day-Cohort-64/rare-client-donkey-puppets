import React from "react";

export const TitleSearch = ({ setSearchTerms }) => {
    return (
        <div>
            <input
                onChange={
                    (changeEvent) => {
                        setSearchTerms(changeEvent.target.value)
                    }
                }
                type="text" placeholder="Search Posts by Title" />
        </div>
    )
}