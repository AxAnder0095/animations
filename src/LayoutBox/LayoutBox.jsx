import './LayoutBoxStyles.sass'

function LayoutBox(props) {
    return (
        <div className={'layout-box'}>
            <div className={'layout-box-animation'}>
                {props.animation}
            </div>
            <h5>{props.title}</h5>
            <p>{props.description}</p>
        </div>
    )
}

export default LayoutBox;