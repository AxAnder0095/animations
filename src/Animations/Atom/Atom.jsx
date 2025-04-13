import './AtomStyles.sass'

function Atom() {
    return (
        <div className={'atom-main-circle'}>
            <div className={'atom-outer-1'}>
                <div className={'atom-outer-1-dot'}></div>
            </div>
            <div className={'atom-outer-2'}>
                <div className={'atom-outer-2-dot'}></div>
            </div>
            <div className={'atom-outer-3'}>
                <div className={'atom-outer-3-dot'}></div>
            </div>
        </div>
    )
}

export default Atom;