import './FloatingSquareStyles.sass'

function FloatingSquare (){
    return (
        <>
            <div className={'Floating-box h-100 w-100'}>
                <div className={'Floating-desc'}>
                    <h5>Floating Square</h5>
                    <p>Square that floats 50px down and up</p>
                </div>
                <div className={'Floating-inner-box'}>
                    <div className={'Floating-square'}></div>
                </div>
            </div>
        </>
    )
}

export default FloatingSquare;