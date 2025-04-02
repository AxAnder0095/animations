import './FadeInSquareStyles.sass'

function FadeInSquare() {
    return (
        <>
            <div className={'Fade-in-box h-100 w-100'}>
                <div className={'Fade-in-desc'}>
                    <h5>Fade in square</h5>
                    <p>Square that fades in from the left</p>
                </div>
                <div className={'Fade-in-inner-box'}>
                    <div className={'Fade-in-square'}></div>
                </div>
            </div>
        </>
    )
}

export default FadeInSquare;