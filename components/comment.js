import { useState } from "react";
import Comments from "./comments";

const Comment = ({comment}) => {

    const [show , setShow] = useState(false);

    return (
        <div className="container">
            <div dangerouslySetInnerHTML={{__html: comment.content}}></div>
            <div className="underComment">
                <div className="element"> By : <strong>{comment.user}</strong></div>
                <div className="element"> {comment.time_ago} </div>
                <div className="element replays" 
                onClick={() => setShow(!show)}> 
                    replays({comment.comments.length}) 
                </div>
            </div>
            { show && <Comments comments={comment.comments} replay/>}
            <style jsx>{`
                .underComment{
                    display : flex;
                    justify-content : flex-end;
                    font-size : .8rem;
                }
                .element{
                    margin-right : 1rem;
                }
                .replays{
                    color : #5d3af4;
                    cursor : pointer;
                }
                .container {
                    margin-top : 1rem;
                    margin-bottom : 1rem;
                }
            `}</style>
        </div>
    )
}

export default Comment;