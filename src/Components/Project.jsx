import React, { Component } from 'react';

import ScrollAnimation from 'react-animate-on-scroll';

class Project extends Component {

    constructor(props){
        super(props);
        this.shouldExpand = true;
    }
    
    handleProjectClick = (e) => {
        let info = e.target.parentElement.parentElement.getElementsByTagName("ul")[0];

        info.classList.toggle("expand");

        console.log(this.shouldExpand)

        if(this.shouldExpand){
            info.classList.remove("fadeOutRight");
            info.classList.add("fadeInLeft");
            this.shouldExpand = false;
        }else{
            info.classList.remove("fadeInLeft");
            info.classList.add("fadeOutRight");
            this.shouldExpand = true;
        }

        
        
    }
    
    render() {

        const title = this.props.title;
        let infoElements = this.props.infoElements;
        const id = this.props.id;
        const delay = this.props.delay;

        return (
            <ScrollAnimation animateIn="fadeInRight" animateOut="fadeOutLeft" delay={delay}  >
                <div className="project">
                    <li><span className="project-text" onClick={this.handleProjectClick}>{title}</span></li>
                    <ul className="animated project-info">
                        {
                            infoElements.map((element, i) => <li key={id + i} > {element} </li> )
                        }
                    </ul>
                </div>
            </ScrollAnimation>
        );
    }
}

export default Project;