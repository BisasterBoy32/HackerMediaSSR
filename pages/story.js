import Layout from "../components/layout";
import axios from "axios";
import Error from "next/error";
import Comments from "../components/comments.js";

const Story = ({ storyData}) => {

    if ( storyData === null) {
        return <Error statusCode={404} />
    }
    return (
        <Layout>
            <div className="container">
                <h4> {storyData.title} </h4>
                <h5 className="before">
                    <span className="comments">comments({storyData.comments.length})</span> 
                </h5>
                <Comments comments={storyData.comments} />
            </div>
            <style jsx>{`
                .container{
                    padding: 1rem 1rem;
                    background-color: #b2b2b2;
                }
                .comments{
                    font-weight : 700;
                    color : #5d3af4;
                    font-size : 1.2rem;
                }
                .before{
                    border-top : 1px solid #FF6347;
                    padding-top : .5rem;
                    display : flex;
                    justify-content : center;
                    margin : 0px;
                }
            `}</style>
        </Layout>
    )
}

Story.getInitialProps = async ({ query }) => {

    let storyData;
    try {
        const response = await axios.get(`http://node-hnapi.herokuapp.com/item/${query.id}`);
        storyData = response.data;
    } catch(err){
        storyData = null
        console.log("error" , err);
    }

    return { storyData  }
}   

export default Story;

