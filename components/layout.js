import Link from "next/link";

const Layout = ( { children} ) => {
    return (
        <div className="wrapper">
            <header>
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
    )
}

export default Layout;