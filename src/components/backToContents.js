import { Link, Outlet } from "react-router-dom";
import toTop from "../js/toTop";
import '../css/back-to-contents.css';

const BackToContents = () => {
    return (
        <div className='backToContents'>
            <Link to='/rules' onClick={toTop}>Back to Contents</Link>
            <Outlet />
        </div>
    )
}

export default BackToContents;