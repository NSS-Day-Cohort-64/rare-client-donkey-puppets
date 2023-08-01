
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
