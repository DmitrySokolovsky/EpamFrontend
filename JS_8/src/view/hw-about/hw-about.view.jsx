import React from 'react';
import ReactDom from 'react-dom';
import './hw-about.css';

export class About extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="hw-about hw-about__container">
                
                <div className="hw-about__description-container">
                    <div className="hw-about__description-item">
                    <h1>I built this website</h1>
                    <div className="hw-about__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque erat non ipsum feugiat laoreet. 
                    Etiam maximus accumsan orci in dignissim. Aliquam vel enim sit amet dui vehicula vulputate feugiat non enim. 
                    Fusce ut elit accumsan, dictum sapien sit amet, hendrerit urna. Nullam dictum arcu ac nulla tempus tincidunt.
                    Vivamus feugiat vestibulum velit. Nunc at eros at sem bibendum vulputate. Aenean id facilisis diam, ac iaculis
                    lacus. Phasellus eu malesuada lectus. Suspendisse nec urna posuere, tincidunt leo sed, porta odio. Morbi quis 
                    mauris sed elit finibus luctus ut elementum augue. Orci varius natoque penatibus et magnis dis parturient montes,
                    nascetur ridiculus mus.
                    Nunc turpis mauris, faucibus ac auctor et, tristique vel ante. Sed pulvinar eros at purus ultrices vehicula. 
                    Sed pulvinar ante et mattis condimentum. Praesent lacinia mollis ex, quis placerat sapien commodo et. Cras eget 
                    convallis ex. Maecenas commodo accumsan est, sit amet molestie urna imperdiet at. Mauris pharetra posuere mauris
                    at tempus. Duis tortor tellus, rhoncus ac turpis quis, vulputate semper libero. Curabitur mollis hendrerit erat,
                    vestibulum dictum odio tempus sed. Aenean vehicula mauris quis iaculis pharetra. Suspendisse at porttitor massa.
                    Vivamus nec libero a turpis mollis sodales. Curabitur feugiat ligula sit amet lectus rutrum vestibulum. Aenean nec
                    finibus nisi, ac ornare nunc. Nunc a libero quis augue consequat vulputate vitae in magna. Sed sagittis lectus 
                    vitae odio volutpat dictum. Duis vehicula vehicula dignissim. Curabitur sodales neque vitae justo dignissim, in 
                    vulputate nulla lobortis. Sed odio odio, interdum at eros a, elementum lacinia purus. Quisque luctus metus quis 
                    quam venenatis, rutrum mattis leo vulputate. Donec sit amet velit nibh. Vestibulum non nisl et felis sollicitudin 
                    laoreet ut vel lacus. Curabitur ut justo maximus, luctus felis non, hendrerit mi. Praesent lacinia odio tellus, 
                    eu sodales tortor condimentum nec.
                    Nunc in molestie velit, vel lobortis leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc auctor est 
                    eu nisi suscipit porta. Donec ultrices dapibus convallis. Nunc auctor quam vitae porttitor ultricies. Pellentesque 
                    sapien dolor, pharetra in posuere non, faucibus sed odio. Donec ornare felis lacus, vitae placerat elit pretium non.
                    Duis tempor est at mauris aliquam ullamcorper. Nulla sit amet feugiat mi.
                    Nulla facilisi. Sed rutrum porta neque et scelerisque. Donec eu placerat nisi. Suspendisse non eleifend lectus,
                    et volutpat libero. Donec at vulputate lacus, ut fermentum sapien. Maecenas accumsan facilisis tortor vitae commodo.
                    Nam in orci sed felis eleifend bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                    Curae; Sed vel consectetur dolor, vel rutrum arcu.
                    </div>
                    </div>
                    <div className="hw-about__pic">
                        <img src="./assets/img/default_poster.png"  className="hw-about__pic" alt="def"/>
                    </div>
                </div>
                <div className="hw-about__slider-container"></div>
            </div>
        );
    }
}