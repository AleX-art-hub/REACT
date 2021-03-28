import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Icon from '@mdi/react';
import{
    mdiPlay, mdiPause, mdiFullscreen, mdiFullscreenExit,
    mdiSkipNext, mdiSkipPrevious,
} from '@mdi/react';

class ControlSlider extends Component {
    constructor(props){
        super(props);
        this.state = {
            delay: 1000,
            isFullScreen: false,
            isPlay: false,
        };
        this.timeoutId = null;
    }
    playHandler = () => {
        const {isPlay} = this.state;
        this.setState({
            isPlay: !isPlay,
        });
    };

    delayHandler = ({target: {value}}) => {
        this.setState({
            delay: value,
        });
    };
    fullscreenMode = () => {
        const {isFullScreen} = this.state;
        const {fullscreenMode} = this.props;
        this.setState({isFullScreen: !isFullScreen});
        fullscreenMode(isFullScreen);
    };
    componentDidUpdate(prevProps, prevState){
        const {isPlay, delay} = this.state;
        const {next} = this.props;
        clearTimeout(this.timeoutId);
        this.timeoutId = null;
        if(isPlay){
            this.timeoutId = setTimeout(next, delay);
        }
    }
    render(){
        const {isPlay, delay, isFullScreen}=this.state;
        const {next, prev} = this.props;
        return(
            <div>
                <div>
                    <input type="range" value={delay} min={100} max={2000} onChange={this.delayHandler}/>
                    <div>{delay}</div>
                </div>
                <div>
                    <Icon onClick={prev} path={mdiSkipPrevious}/>
                    <Icon onClick={next} path={mdiSkipNext}/>
                </div>
                <div>
                    <Icon onClick={this.playHandler} path={isPlay ? mdiPause : mdiPlay}/>
                <Icon onClick = {this.fullscreenMode} path={isFullScreen ? mdiFullscreen : mdiFullscreenExit}/>
                </div>
            </div>
        )
    }
}
export default ControlSlider;