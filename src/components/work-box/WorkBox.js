import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class WorkBox extends Component {

    constructor(props) {
        super(props)

        this.state = {
            work: props.Work
        }
    }

    render() {
        const blockStyle = {
            backgroundColor: this.state.work.bcolor + ' !important'
        }

        const backgroundStyle = {
            backgroundImage: `url(${this.state.work.img})`
        }

        return (
            <div className="block block-2 work-item hover" style={ blockStyle }>

                <div className="bg" style={backgroundStyle}>&nbsp;</div>

                <div className="work-title"><p>{this.state.work.name}</p></div>
                
                <Link to={`/work/${this.state.work.slug}`}>&nbsp;</Link>
            </div>
        );
    }
}

export default WorkBox;