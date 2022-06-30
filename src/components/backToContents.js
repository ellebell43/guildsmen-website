import { Link } from "react-router-dom";
import toTop from "../js/toTop";
import '../css/back-to-contents.css';

const BackToContents = (props) => {
    return (
        <div className='backToContents'>
            <Link to={props.to || '/rules'} onClick={toTop}>Back to Contents</Link>
        </div>
    )
}

export default BackToContents;