import React, { Component } from 'react';
import WorkBox from '../../components/work-box/WorkBox';
import WorkItems from '../../data/WorkItems';

class Work extends Component {

    constructor(props) {
        super(props);

        this.state = {
            workItems: WorkItems
        }
    }

    render() {
        return (
            <div>
                <div className="work-intro padded">
                    <h2>Work</h2>

                    <p>We're a mixed bag when it comes to our range of projects, from websites to applications, creative design to software testing and e-commerce to WordPress. We're a great team and between us we can tackle any brief with the perfect solution. Take a look at some examples of our work below.</p>
                </div>

                <div className="portfolio-blocks">
                    {this.generateWorkItemBoxes()}
                </div>
            </div>
        );
    }

    generateWorkItemBoxes() {
        let workBoxes = [];

        this.state.workItems.forEach(workItem => {
            workBoxes.push(
                <WorkBox Work={workItem} key={workItem.id} />
            )
        });

        return workBoxes;
    }
}

export default Work;