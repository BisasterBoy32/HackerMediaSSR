import axios from "axios";
import Error from "next/error";
import StoryList from "../components/StoryList";
import Layout from "../components/layout";
import Footer from "../components/footer";

const Home = ( {data ,page} ) => {

    if (data === null ){
        return <Error statusCode={404} />
    }
    return (
        <div>
            <Layout>
            <StoryList stories={data}/>
            </Layout>
            <Footer page={page || 1}/>
        </div>
    )
}

Home.getInitialProps = async ({query}) => {
    
    let data;

    try {
        const response  = await axios.get(`http://node-hnapi.herokuapp.com/news?page=${query.page}`);
        data =  response.data;
    } catch(err){
        data = null;
    }

    return { data , page : query.page }
}

export default Home;