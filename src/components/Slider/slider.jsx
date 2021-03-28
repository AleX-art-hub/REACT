import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Slide from './Slide';
import ControlSlider from './ControlSlider'



class Slider  extends Component{
    constructor(props){
        super(props);
        const {width, height} = this.props;
        this.state = {
            currentIndex: 0,
            width: width,
            height: height,
        };
    }
    nextIndex= () => {
        const {currentIndex} = this.state;
        const {slides} = this.props;
        this.setState({
            currentIndex: (currentIndex + 1) % slides.length,
        });
    }
    prevIndex= () => {
        const {currentIndex} = this.state;
        const {slides} = this.props;
        this.setState({
            currentIndex: (currentIndex - 1 + slides.length) % slides.length,
        });
    }
    fullscreenMode = (isFullScreen) => {
        const {width, height} = this.props;
        if(isFullScreen){
            this.setState({
                width: width,
                height: height,
            });
            window.addEventListener('resize', () => {this.setState({
                width: window.innerWidth,
                height: window.innerHeight,
            })});
        }

    }
    render(){
        const {currentIndex} = this.state;
        const {slides} = this.props;
        return(
            <div>
                <Slide currentSlide={slides[currentIndex]}/>
                <ControlSlider next={this.nextIndex} prev={this.prevIndex} fullscreenMode={this.fullscreenMode} />
            </div>
        );
    }
}
export default Slider;