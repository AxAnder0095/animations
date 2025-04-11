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
import ZoomIn from "../Animations/ZoomIn/ZoomIn.jsx";
import {Link} from "react-router-dom";
import LayoutBox from "../LayoutBox/LayoutBox.jsx";

function MainPage() {
    return (
        <div className={'main-wrapper'}>
            <div className={'main-container'}>
                <div className={'intro-section'}>
                    <div className={'intro-wrapper'}>
                        <p>(WEBSITE UNDER CONSTRUCTION)</p>
                        <p className={'header-text'}>Animations</p>
                        <p className={'my-name'}>By Alexander Brown</p>
                        <p>I made this website so I can learn animations with CSS and Javascript.
                        </p>
                        <p>Start date: 3/30/2025</p>
                        {/*<div className={'intro-wrapper-background'}></div>*/}
                    </div>
                </div>
                <h1 className={'text-center mb-5'}>2D Flat Animations <br/> (non-interactive)</h1>
                <div className={'two-d-animations'}>

                    {/*row one*/}
                    <Link className={'source-link'} to={'/'}>
                        <LayoutBox
                            title={'Color Changing Square'}
                            description={'Square that cycles between 4 different colors.'}
                            animation={<ColorChangingSquare/>}
                        />
                    </Link>
                    <Link className={'source-link'} to={'/'}>
                        <LayoutBox
                            title={'Rotating Square'}
                            description={'Square that rotates to the right.'}
                            animation={<RotatingSquare/>}
                        />
                    </Link>
                    <Link className={'source-link'} to={'/'}>
                        <LayoutBox
                            title={'Moving Square'}
                            description={'Square that moves right, down, left and back to it\'s original position'}
                            animation={<MovingSquare/>}
                        />
                    </Link>

                    {/*row two*/}
                    <Link className={'source-link'} to={'/'}>
                        <LayoutBox
                            title={'Floating Square'}
                            description={'Square that has a floating effect.'}
                            animation={<FloatingSquare/>}
                        />
                    </Link>
                    <Link className={'source-link'} to={'/'}>
                        <LayoutBox
                            title={'Fading Square'}
                            description={'Square that fades in from the left to right'}
                            animation={<FadeInSquare/>}
                        />
                    </Link>
                    <Link className={'source-link'} to={'/'}>
                        <LayoutBox
                            title={'Rotating Squares'}
                            description={'Squares that rotate on x, y and z axis'}
                            animation={<RotatingSquareAxis/>}
                        />
                    </Link>

                    {/*row three*/}
                    <Link className={'source-link'} to={'/'}>
                        <LayoutBox
                            title={'Overlapping Squares'}
                            description={'Squares that overlap one another with absolute positioning'}
                            animation={<OverlappingSquares/>}
                        />
                    </Link>
                    <Link className={'source-link'} to={'/'}>
                        <LayoutBox
                            title={'Color Changing Squares'}
                            description={'Squares that shift colors left to right'}
                            animation={<ColorShiftCube/>}
                        />
                    </Link>
                    <Link className={'source-link'} to={'/'}>
                        <LayoutBox
                            title={'Orb'}
                            description={'Spinning orb with inner and outer box shadows'}
                            animation={<Orb/>}
                        />
                    </Link>

                </div>
                <h1 className={'text-center mt-5'}>3D Animations <br/> non-interactive</h1>
                <div className={'animations-section'}>
                    <div className={'animation-row mt-4'}>
                        <div className={'animation-box-one'}>
                            <Cube/>
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
                        <div className={'animation-box-two'}>
                            <AnimationBoxLayout
                                title={'Zoom'}
                                desc={'Animation that zooms in content'}
                                child={<ZoomIn/>}
                            />
                        </div>
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
        </div>
    )
}

export default MainPage;