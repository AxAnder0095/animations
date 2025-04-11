import './MainPageStyles.sass'
import {Link} from "react-router-dom";
import ColorChangingSquare from "../Animations/ColorChangingSquare/ColorChangingSquare.jsx";
import RotatingSquare from "../Animations/RotatingSquare/RotatingSquare.jsx";
import MovingSquare from "../Animations/MovingSquare/MovingSquare.jsx";
import FloatingSquare from "../Animations/FloatingSquare/FloatingSquare.jsx";
import FadeInSquare from "../Animations/FadeInSquare/FadeInSquare.jsx";
import RotatingSquareAxis from "../Animations/RotatingSquareAxis/RotatingSquareAxis.jsx";
import Cube from "../Animations/Cube/Cube.jsx";
import OverlappingSquares from "../Animations/OverlappingSquares/OverlappingSquares.jsx";
import ColorShiftCube from "../Animations/ColorShiftCube/ColorShiftCube.jsx";
import Orb from "../Animations/Orb/Orb.jsx";
import RotatingRectangles from "../Animations/RotatingRectangles/RotatingRectangles.jsx";
import CustomButtonOne from "../InteractableAnimations/CustomButtonOne/CustomButtonOne.jsx";
import ZoomIn from "../Animations/ZoomIn/ZoomIn.jsx";
import LayoutBox from "../LayoutBox/LayoutBox.jsx";

function MainPage() {
    return (
        <div className={'main-wrapper'}>
            <div className={'main-container'}>
                <div className={'intro-section'}>
                    <div className={'intro-wrapper'}>
                        <p className={'header-text'}>Animations</p>
                        <p className={'my-name'}>By Alexander Brown</p>
                        <p>I made this website so I can learn animations with CSS and Javascript.
                            <br/> Click on an animation tile for source code.
                        </p>
                        <p>Start date: 3/30/2025</p>
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

                    {/*row four*/}
                    <Link className={'source-link'} to={'/'}>
                        <LayoutBox
                            title={'Zoom'}
                            description={'Zoom in effect using scale'}
                            animation={<ZoomIn/>}
                        />
                    </Link>

                </div>
                <h1 className={'text-center mb-5 mt-5'}>3D Animations <br/> non-interactive</h1>
                <div className={'three-d-animations'}>
                    {/*row one*/}
                    <Link className={'source-link'} to={'/'}>
                        <LayoutBox
                            title={'Cube'}
                            description={'Cube using 3d space'}
                            animation={<Cube/>}
                        />
                    </Link>
                    <Link className={'source-link'} to={'/'}>
                        <LayoutBox
                            title={'Rotating cards'}
                            description={'Cards that spin in a 3d space'}
                            animation={<RotatingRectangles/>}
                        />
                    </Link>
                </div>
                <h1 className={'text-center mt-5 mb-5'}>Interactable Animations</h1>
                <div className={'interactable-animations mb-5'}>
                    <Link className={'source-link-interactable'} to={'/'}>
                        <LayoutBox
                            title={'Hover Effect Button'}
                            description={'Buttons where background transition to black and text transitions to white'}
                            animation={<CustomButtonOne/>}
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MainPage;