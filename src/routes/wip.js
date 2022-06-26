import '../css/wip.css'
import wipImage from '../images/person-digging-solid.svg';

const Wip = () => {
    return (
        <main>
            <div class="wipImgContainer">
                <img src={wipImage} alt="" className="filter wipImg" />
            </div>
            <h1>Work in progress.<br />Check back later!</h1>
        </main>
    )
}

export default Wip;