import "./Tags.css"

export const Tag = ({ tag }) => (
    <section key={tag.id} className="tag">
        <h2>{tag.label}</h2>
    </section>
)