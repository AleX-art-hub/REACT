import React, {Component} from 'react';

class Slide extends Component{
    constructor(props){
        super(props);
        const img = new Image();
        this.state={
            img,
            isLoad: false,
        };
    }

    load = () =>{
        const {img} = this.state;
        const {currentSlide: {src}} = this.props;
        img.src =src;
    };
    
    ComponentDidUpdate(prevProps, prevState){
        const {isLoad} = this.state;
        const {currentSlide: {src}} = this.props;
        if(src != prevProps.currentSlide && isLoad){
            this.load();
        }
    }
    ComponentDidMount(){
        this.load();
    }
    render(){
        const {img, isLoad} = this.state;
        const {currentSlide} = this.props;
        return(
            <>
            {isLoad && (
            <figure title={currentSlide.title}>
                <img src={currentSlide.src}/>
                <figcaption>
                    <h2>{currentSlide.title}</h2>
                    <p>{currentSlide.description}</p>
                </figcaption>
            </figure>
        )}
        </>
        );
    }}
    export default Slide;