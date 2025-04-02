import './AnimationBoxLayoutStyles.sass'

function AnimationBoxLayout(prop) {
    return (
        <>
            <div className={'ANI-box h-100 w-100'}>
                <div className={'ANI-desc'}>
                    <h5>{prop.title}</h5>
                    <p>{prop.desc}</p>
                </div>
                <div className={'ANI-inner-box'}>
                    {prop.child}
                </div>
            </div>
        </>
    )
}

export default AnimationBoxLayout;