import Link from "next/link";
import Router from "next/router";
import NProgress from "nprogress";
import Head from "next/head";
import { FaArrowLeft } from "react-icons/fa";

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Layout = ( { children} ) => {
    return (
        <>
        <Head>
            <title> Hacker News </title>
        </Head>
        <div className="wrapper">
            <header>
                <a className="link" onClick={() => Router.back()}>
                     <FaArrowLeft style={{ fontSize : "14px" , marginTop : "3px"}} />
                </a>
                <Link href="/"> 
                    <a className="link"> Hacker News </a>
                </Link>
            </header>
            {children}
            <style global jsx>{`
                .wrapper{
                    max-width : 1200px;
                    margin : 0 auto;
                    padding : 1rem;
                }
                header {
                    background-color : 	#FF6347;
                    padding : 1rem 1rem ;
                }
                .link {
                    color : #000;
                    text-decoration : none;
                    font-weight : 700;
                    font-size : 1.2rem;
                    margin : 0px .5rem;
                    cursor : pointer;
                }
                .link:hover {
                    color : #000;
                }
                p {
                    margin : 0px;
                    padding : 0px;
                }
            `}</style>
        </div>
        </>
    )
}

export default Layout;