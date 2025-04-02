import './RotatingSquareAxis.sass'

function RotatingSquareAxis() {
    return (
        <>
            <div className={'RA-box h-100 w-100'}>
                <div className={'RA-desc'}>
                    <h5>Rotating Squares on X, Y and Z axis</h5>
                    <p>Square that floats 50px down and up</p>
                </div>
                <div className={'RA-inner-box'}>
                    <div className={'RA-square1 text-center'}>X Axis</div>
                    <div className={'RA-square2'}>Y Axis</div>
                    <div className={'RA-square3'}>Z Axis</div>
                </div>
            </div>
        </>
    )
}

export default RotatingSquareAxis;