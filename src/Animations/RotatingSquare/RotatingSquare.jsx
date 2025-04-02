import './RotatingSquare.sass'

function RotatingSquare (){
    return (
        <>
            <div className={'R-box h-100 w-100'}>
                <div className={'R-desc'}>
                    <h5>Rotating Color Changing Square</h5>
                    <p>Square that Rotates with colors</p>
                </div>
                <div className={'R-inner-box'}>
                    <div className={'rotating-square'}></div>
                </div>
            </div>
        </>
    )
}

export default RotatingSquare;