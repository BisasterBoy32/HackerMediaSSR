import Link from "next/link";

const Footer = ({page}) => {

    return (
        <div className="container">
            { Number(page) > 1 &&
            <> 
            <Link href={`/?page=${Number(page)-1}`}>
            <button className="btn">
                <a>Previous</a>
            </button>
            </Link>
            </>
            }
            { Number(page) > 1 &&
            <> 
            <Link href={`/?page=1`}>
            <button className="btn">
               <a>1</a>
            </button>
            </Link>
            <span className="points">
                ....
            </span>
            </>
            }
            <button className="btn current">
                {page}</button>
                <span className="points">
                    ....
                </span>
            <Link href={`/?page=${Number(page)+10}`}>
                <button className="btn">
                    <a>{Number(page)+10}</a>
                </button>
            </Link>
            <Link href={`/?page=${Number(page)+1}`}>
            <button className="btn">
                <a>Next</a>
            </button>
            </Link>
            <style jsx>{`
            .container {
                width : 100%;
                display : flex;
                justify-content : center;
            }
            .btn {
                color : #FF6347;
                background-color : #FFF;
                padding : 0.2rem .4rem;
                border : 1px solid #FF6347;
                cursor : pointer;
                border-radius : 2px;
                margin-right : 2px;
            }
            .btn:hover {
                color : #FFF;
                background-color : #FF6347;
                border : 1px solid #FF6347;
            }
            a {
                color: inherit;
                text-decoration : none;
            }
            a:hover {
                color: inherit;
                text-decoration : none;
            }
            .current {
                color : #FFF;
                background-color : #FF6347;
                border : 1px solid #FF6347;  
            }
            .points{
                font-size : 1.3rem;
                color : #FF6347;
            }
            `}</style>
        </div>
    )
}

export default Footer;