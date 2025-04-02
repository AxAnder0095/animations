import './CubeStyles.sass'

function Cube() {
    return (
        <>
            <div className={'CU-box h-100 w-100'}>
                <div className={'CU-desc'}>
                    <h5>Cube</h5>
                    <p>Cube using 3d space</p>
                </div>
                <div className={'CU-inner-box'}>
                    <div className={'cube-wrapper'}>
                        <div className={'Cube'}>
                            <div className={'front'}></div>
                            <div className={'back'}></div>
                            <div className={'left'}></div>
                            <div className={'right'}></div>
                            <div className={'top'}></div>
                            <div className={'bottom'}></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cube