import Comment from "../components/comment";

const Comments = ({comments ,replay}) => {

    return(
        <ul className={replay ? "comments-list replay" : "comments-list"}>
            {comments.map( (comment) =>(
                <li key={comment.id} className="list-item">
                    <Comment comment={comment} />
                </li>
            ) )}
            <style jsx>{`
            p{
                margin : 0px;
            }
            .comments-list{
                list-style-type : none;
                padding : 0px;
            }
            .list-item{
                margin-bottom : 2rem;
            }
            .replay {
                margin-left : 2rem;
            }
            `}</style>
        </ul>   
    )
}

export default Comments;