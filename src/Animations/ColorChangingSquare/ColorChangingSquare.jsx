import './ColorChangingSquareStyles.sass'

function ColorChangingSquare() {
    return (
        <div className={'CCC-box h-100 w-100'}>
            <div className={'CCC-desc'}>
                <h5>Color Changing Square</h5>
                <p>Square that cycles between red, yellow, blue, green and back to red. </p>
            </div>
            <div className={'CCC-inner-box'}>
                <div className={'color-change-square'}></div>
            </div>
        </div>
    )
}

export default ColorChangingSquare