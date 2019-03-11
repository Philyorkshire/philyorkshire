import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div>
                <div className="about-intro padded">
                    <h2>About Philyorkshire</h2>
                    <p>We're a Digital Development Consultancy specialising in Design, Development and Testing based in West Yorkshire. We work closely with our clients from briefing through to execution. This enables us to ensure we are meeting client requirements with the possibly to scale and adapt any project in the future. Through our understanding of their businesses and objectives this means we can truly add value as partners and not just suppliers. All projects at Philyorkshire are managed using standard practices to ensure quality and consistency.</p>
                </div>

                <div className="team padded">

                    <div className="phil">
                        <img className="team-photo" src="assets/img/about/phillip.png" alt="Phillip Marsden" />

                        <h4>Phillip Marsden</h4>
                        <h5>Full stack developer</h5>

                        <p>Phillip comes from a background in Software Testing, working with a range of industry sectors developing dependable applications for clients that deliver the confidence required to evolve in their fast-paced industry.<br /><br />

                            Phillip works with Microsoft technologies such as .NET, Web API, C#, SQL etc. for server side applications together with front-end technologies including; Angular, TypeScript/JavaScript, CSS3 and HTML5 to deliver impressive user experiences.</p>

                        <ul className="social-media">
                            <li><a href="https://uk.linkedin.com/in/phillip-marsden-9a0b456b"><i className="fab fa-linkedin" aria-hidden="true"></i>&nbsp;</a></li>
                            <li><a href="https://bitbucket.org/philyorkshire"><i className="fab fa-bitbucket" aria-hidden="true"></i>&nbsp;</a></li>
                            <li><a href="https://github.com/Philyorkshire"><i className="fab fa-github" aria-hidden="true"></i>&nbsp;</a></li>
                        </ul>
                    </div>

                    <div className="brandon">
                        <img className="team-photo" src="../assets/img/about/brandon.png" alt="Brandon Whitaker" />

                        <h4>Brandon Whitaker</h4>
                        <h5>Front-End developer</h5>

                        <p>A highly skilled Front End Developer with over 6 years’ experience working with a wide range of customers for a number of different industry sectors. Brandon has worked in a variety of Agile environments.<br /><br /> As a Front End developer Brandon's focus includes; HTML, CSS, SASS/LESS, JavaScript, jQuery, Angular, AngularJS and Typescript.</p>

                        <ul className="social-media">
                            <li><a href="https://uk.linkedin.com/in/brandon-whitaker-0033a750"><i className="fab fa-linkedin" aria-hidden="true"></i>&nbsp;</a></li>
                            <li><a href="https://bitbucket.org/brandudno22"><i className="fab fa-bitbucket" aria-hidden="true"></i>&nbsp;</a></li>
                            <li><a href="https://github.com/brandudno"><i className="fab fa-github" aria-hidden="true"></i>&nbsp;</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;