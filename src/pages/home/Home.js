import React, { Component } from 'react';
import WorkBox from '../../components/work-box/WorkBox';
import WorkItems from '../../data/WorkItems';
import { Link } from 'react-router-dom';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            workItems: WorkItems
        }
    }

    render() {
        return (
            <div className="portfolio-blocks">

                <div className="block block-1 intro-block" >

                    <div className="padded">
                        <h2>Digital Design, Development &amp; Testing</h2>

                        <p>Philyorkshire are a Digital Design, Development and Testing consultancy based in West Yorkshire.</p>

                        <p>Working with businesses to make them resourceful, more competent and productive.</p>

                        <Link to="/work" className="button">Work</Link>
                    </div>
                </div>

                { this.generateWorkItemBoxes() }

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

export default Home;