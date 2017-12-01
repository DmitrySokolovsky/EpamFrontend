import React,{Component} from 'react';
import {picturesArray} from '../../services/pictures.data';
import './hw-slider.css';

export class Slider extends Component{
    constructor(props){
        super(props);
        this.slideIndex = 1;
    }

    componentDidMount(){
        this.showSlides(this.slideIndex);
        
    }

    plusSlide(n) {
        this.showSlides(this.slideIndex += n);
        console.log(this.slideIndex);
    }

    showSlides(n) {
        var i;
        let slides = document.getElementsByClassName('hw-slider__picture-container');        
        
        if(n > slides.length){
            this.slideIndex=1;
        }
        if(n < 1){
            this.slideIndex=slides.length;
        }
        for(i=0;i < slides.length;i++){
            slides[i].style.display = "none";
        }
        slides[this.slideIndex-1].style.display = "block";
    }

    render(){
        return (
            <div className="hw-slider hw-slider__container">
                
                {picturesArray.map((item,index)=>{                    
                    return (
                        <div className="hw-slider__picture-container fade" key={item}>  
                        <img src={item} alt="pic" key={item+index} className="hw-slider__picture-item"/>
                        </div> 
                    )
                })}  
                <div class="hw-slider__buttons-container">            
                <div className="hw-slider__button"
                onClick={(()=>this.plusSlide(-1))}>Prev</div>
                <div className="hw-slider__button hw-slider__button--next"
                onClick={()=>this.plusSlide(1)}>Next</div>
                </div>  
            </div>
        );
    }
}