import './ColorShiftCubeStyles.sass'

function ColorShiftCube() {
    return (
        <>
            <div className={'CSC-box h-100 w-100'}>
                <div className={'CSC-desc'}>
                    <h5>Color Shift Cube</h5>
                    <p>Squares that shift colors</p>
                </div>
                <div className={'CSC-inner-box'}>
                    <div className={'CSC-square1'}></div>
                    <div className={'CSC-square2'}></div>
                    <div className={'CSC-square3'}></div>
                    <div className={'CSC-square4'}></div>
                </div>
            </div>
        </>
    )
}

export default ColorShiftCube