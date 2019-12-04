import Link from "next/link";

const StoryList = ({stories}) => {
    
    return (
        <ul className="list">
            {stories.map( story => {
                return (
                    <li key={story.id} className="list-item">
                        <h4>{story.title}</h4>
                        <p>
                            <span className="points"> {story.points} points </span>
                            <span className="comments"> {story.comments_count}
                            <Link href={`/story?id=${story.id}`}>
                                <a> comments </a>
                            </Link> 
                            </span>
                        </p>
                    </li>
                )
            })}
            <style jsx>{`
                .list{
                    list-style-type: none;
                    padding: 1rem 1rem;
                    background-color: #b2b2b2;
                    margin : 0px;
                }
                .list-item {
                    padding : 1rem 1rem 0rem 1rem;
                }
                .comments:hover {
                    text-decoration : underline;
                }
                p {
                    margin : 0px;
                }
                h4{
                    margin : 0px;
                    margin-bottom : 0.4rem;
                }
                .points{
                    font-weight : 1000;
                    margin-right : .5rem;
                    font-size : .8rem;
                }
                .comments{
                    font-weight : 700;
                    color : #5d3af4;
                    font-size : .8rem;
                }
                a {
                    color : inherit;
                    text-decoration : none;
                }a:hover {
                    color : inherit;
                    text-decoration : none;
                }
            `}</style>
        </ul>
    )
}

export default StoryList;