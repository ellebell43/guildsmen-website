const RaceStats = (props: any) => {
    return (
        <div className='raceStatContainer'>
            <p className='raceStatHeader'><strong>Stats</strong></p>
            <p className="stat"><em>{`${props.nimble} Nimble`}</em></p>
            <p className="stat"><em>{`${props.tough} Tough`}</em></p>
            <p className="stat"><em>{`${props.competence} Competence`}</em></p>
            <p className="stat"><em>{`${props.constitution} Constitution`}</em></p>
        </div>
    )
}

export default RaceStats;