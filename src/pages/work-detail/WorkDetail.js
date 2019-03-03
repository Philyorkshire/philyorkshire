import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Slide } from 'react-slideshow-image';

import WorkItems from '../../data/WorkItems';
import _ from 'underscore';

class WorkDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            work: _.find(WorkItems, (work) => {
                if (work.slug === props.match.params.client) {
                    return work;
                }
            })
        }
    }

    render() {
        return (
            <div>
                <div className="flexslider">
                    { this.generateSlideshow() }
                </div>

                <div className="single-work padded">
                    <h2>{this.state.work.name}</h2>
                    <div className="left">

                        <h3>Brief</h3>

                        <p>{this.state.work.brief}</p>

                        <h3>Solution</h3>

                        <p>{this.state.work.solution}</p>

                        <p><Link to="/work">Back to work</Link></p>

                    </div>

                    <div className="right">

                        <div className="technologies-used">

                            <h3>Technologies</h3>

                            <ul>
                                {this.generateTechnologyListItems()}
                            </ul>

                            {this.state.work.url &&
                                <p><a target="_blank" href={`//${this.state.work.url}`} rel="noopener noreferrer"><i className="fa fa-globe" aria-hidden="true"></i>&nbsp;{this.state.work.url}</a></p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    generateTechnologyListItems() {
        let technologyListItems = [];

        this.state.work.skills.forEach(skill => {
            technologyListItems.push(
                <li key={skill}><i className="fa fa-check-circle" aria-hidden="true"></i>&nbsp;{skill}</li>
            )
        });

        return technologyListItems;
    }

    generateSlideItems() {
        let workSlideItems = [];

        this.state.work.slides.forEach(slide => {
            let slideStyle = {
                backgroundImage: `url(${slide})`
            }

            workSlideItems.push(
                <li style={slideStyle} key={slide}>&nbsp;</li>
            )
        });

        return workSlideItems;
    }

    generateSlideshow() {
        const properties = {
            duration: 5000,
            transitionDuration: 500,
            infinite: true,
            indicators: false,
            arrows: true
        }

        return (
            <Slide {...properties}>
                { this.generateSlides() }
            </Slide>
        )
    }

    generateSlides() {
        let slides = [];

        this.state.work.slides.forEach(slide => {
            slides.push(
                <div className="each-slide" key={slide}>
                    <div style={{ 'backgroundImage': `url(${slide})` }}>
                        <img src={slide} alt="client work"/>
                    </div>
                </div>
            )
        });

        return slides;
    }
}

export default WorkDetail;