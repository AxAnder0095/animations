import './OverlappingSquaresStyles.sass'

function OverlappingSquares(){
    return (
        <>
            <div className={'OS-box h-100 w-100'}>
                <div className={'OS-desc'}>
                    <h5>Overlapping Squares</h5>
                    <p>Squares that overlap one another</p>
                </div>
                <div className={'OS-inner-box'}>
                    <div className={'OS-square1'}>
                        <div className={'OS-square2'}></div>
                        <div className={'OS-square3'}></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OverlappingSquares;