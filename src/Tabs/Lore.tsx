import mapImage from './images/Thelius.png';

const Lore = () => {
    return (
        <main className='loreTab'>
            <h1>Lore Tab :)</h1>
            <div className='imageContainer'>
                <img src={mapImage} alt='Map of Thelius' className='map' />
            </div>
        </main>
    )
}

export default Lore;