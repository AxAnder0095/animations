import './MovingSquareStyles.sass'

function MovingSquare() {
    return (
        <>
            <div className={'Moving-box h-100 w-100'}>
                <div className={'Moving-desc'}>
                    <h5>Moving Square</h5>
                    <p>Square that moves right, down, left and back to it's original position</p>
                </div>
                <div className={'Moving-inner-box'}>
                    <div className={'Moving-square'}></div>
                </div>
            </div>
        </>
    )
}

export default MovingSquare