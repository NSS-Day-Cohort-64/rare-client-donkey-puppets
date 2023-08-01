import "./Tags.css"

export const Tag = ({ tag }) => (
    <section key={tag.id} className="tag">
        <div>
            <h2>{tag.label}</h2>
        </div>
        <div className="tag-footer">
            <div className="footer-button" >Edit</div>
            <div className="footer-button" >Delete</div>
        </div>
    </section>
    
)
