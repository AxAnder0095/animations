import './MainPageStyles.sass'
import ColorChangingSquare from "../Animations/ColorChangingSquare/ColorChangingSquare.jsx";
import RotatingSquare from "../Animations/RotatingSquare/RotatingSquare.jsx";
import MovingSquare from "../Animations/MovingSquare/MovingSquare.jsx";
import FloatingSquare from "../Animations/FloatingSquare/FloatingSquare.jsx";
import FadeInSquare from "../Animations/FadeInSquare/FadeInSquare.jsx";
import RotatingSquareAxis from "../Animations/RotatingSquareAxis/RotatingSquareAxis.jsx";
import Cube from "../Animations/Cube/Cube.jsx";
import OverlappingSquares from "../Animations/OverlappingSquares/OverlappingSquares.jsx";
import ColorShiftCube from "../Animations/ColorShiftCube/ColorShiftCube.jsx";
import AnimationBoxLayout from "../AnimationBoxLayout/AnimationBoxLayout.jsx";
import ExampleAnimation from "../Animations/exampleAnimation/ExampleAnimation.jsx";
import Orb from "../Animations/Orb/Orb.jsx";
import RotatingRectangles from "../Animations/RotatingRectangles/RotatingRectangles.jsx";
import CustomButtonOne from "../InteractableAnimations/CustomButtonOne/CustomButtonOne.jsx";

function MainPage() {
    return (
        <>
            <div className={'main-container'}>
                <div className={'intro-section'}>
                    <div className={'intro-wrapper'}>
                        <p className={'header-text'}>Animations</p>
                        <p className={'my-name'}>By Alexander Brown</p>
                        <p>I made this website so I can learn animations with CSS and Javascript. All animations <br/>
                            will have a link to the source code on my github.
                        </p>
                        <p>Start date: 3/30/2025</p>
                        {/*<div className={'intro-wrapper-background'}></div>*/}
                    </div>
                </div>
                <h1 className={'text-center mb-5'}>Animation Section 1</h1>
                <div className={'animations-section'}>
                    <div className={'animation-row'}>
                        <div className={'animation-box-one'}>
                            <ColorChangingSquare/>
                        </div>
                        <div className={'animation-box-two'}>
                            <RotatingSquare/>
                        </div>
                    </div>
                    <div className={'animation-row mt-4'}>
                        <div className={'animation-box-one'}>
                            <MovingSquare/>
                        </div>
                        <div className={'animation-box-two'}>
                            <FloatingSquare/>
                        </div>
                    </div>
                    <div className={'animation-row mt-4'}>
                        <div className={'animation-box-one'}>
                            <FadeInSquare/>
                        </div>
                        <div className={'animation-box-two'}>
                            <RotatingSquareAxis/>
                        </div>
                    </div>
                    <div className={'animation-row mt-4'}>
                        <div className={'animation-box-one'}>
                            <OverlappingSquares/>
                        </div>
                        <div className={'animation-box-two'}>
                            <ColorShiftCube/>
                        </div>
                    </div>
                </div>
                <h1 className={'text-center mt-5'}>Animation Section 2</h1>
                <div className={'animations-section'}>
                    <div className={'animation-row mt-4'}>
                        <div className={'animation-box-one'}>
                            <Cube/>
                        </div>
                        <div className={'animation-box-two'}>
                            {/*found out at this time I should just make a layout container*/}
                            <AnimationBoxLayout
                                title={'Orb'}
                                desc={'Spinning orb with box-shadows '}
                                child={<Orb/>}
                            />
                        </div>
                    </div>
                    <div className={'animation-row mt-4'}>
                        <div className={'animation-box-one'}>
                            <AnimationBoxLayout
                                title={'Rotating Rectangles'}
                                desc={'Cards that spin in a 3d space'}
                                child={<RotatingRectangles/>}
                            />
                        </div>
                        {/*<div className={'animation-box-two'}>*/}
                        {/*    <AnimationBoxLayout*/}
                        {/*        title={'Some animation'}*/}
                        {/*        desc={'Some animation that does something'}*/}

                        {/*    />*/}
                        {/*</div>*/}
                    </div>
                </div>
                <h1 className={'text-center mt-5'}>Interactable Animations</h1>
                <div className={'animations-section'}>
                    <div className={'animation-row mt-4'}>
                        <div className={'animation-box-one'}>
                            <AnimationBoxLayout
                                title={'Custom Button'}
                                desc={'some animation'}
                                child={<CustomButtonOne/>}
                            />
                        </div>
                        <div className={'animation-box-two'}>
                            <AnimationBoxLayout
                                title={'Some animation'}
                                desc={'Some animation that does something'}

                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainPage;