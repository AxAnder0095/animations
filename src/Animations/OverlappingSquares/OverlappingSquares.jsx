import './OverlappingSquaresStyles.sass'

function OverlappingSquares() {
    return (
        <>
            <div className={'OS-inner-box'}>
                <div className={'OS-square1'}>
                    <div className={'OS-square2'}></div>
                    <div className={'OS-square3'}></div>
                </div>
            </div>
        </>
    )
}

export default OverlappingSquares;