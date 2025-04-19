import './GlassCubeStyles.sass'

function GlassCube() {
    return (
        <div className={'glass-cube-scene'}>
            <div className={'glass-cube'}>
                <div className={'face gs-front'}>FRONT</div>
                <div className={'face gs-back'}>BACK</div>
                <div className={'face gs-right'}>RIGHT</div>
                <div className={'face gs-left'}>LEFT</div>
                <div className={'face gs-top'}>TOP</div>
                <div className={'face gs-bottom'}>BOTTOM</div>
            </div>
        </div>
    )
}

export default GlassCube;