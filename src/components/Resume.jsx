import '../styles/css/style.css';
import NavBar from './Nav'
import ReactToPdf  from "react-to-pdf";
import React, { Component, useEffect } from "react";
import { Link } from 'react-router-dom';

const ref = React.createRef();
const scale = 1;
const options = {
    hotfixes : ["px_scaling"],
    orientation: 'portrait',
    unit: 'px',
    format: [Math.round(window.innerWidth * 0.7 * scale), Math.round(window.document.body.offsetHeight * scale)]
};

window.addEventListener('resize', () => {
    updateComponentSize();
});


function updateComponentSize() {
    options.format = [Math.round(window.innerWidth * 0.7 * scale), Math.round(window.document.body.offsetHeight * scale)]
}

class Resume extends Component {
    constructor() {
        super();
        this.state = {
            isButtonDisplayed: true
        };
        this.hideButton = this.hideButton.bind(this);
        this.showButton = this.showButton.bind(this);
    }
    hideButton() {
        updateComponentSize()
        this.setState(() => {
            return { isButtonDisplayed: false };
        });
    }
    showButton() {
        this.setState(() => {
            return { isButtonDisplayed: true };
        });
    }
render() {
        return (
        <div>
            <NavBar />
            <div id='resume' ref={ref}>
                <div id='content' >
                    <Section title='About Me'>
                        <div>
                            <p>
                                I'm a fella
                            </p>
                        </div>
                    </Section>
                    <Section title='Experience'>
                            <Experience title='Manager' business='Scallywag Tag' link='https://www.scallywagtag.com' startDate='' endDate='' summary='Wowee I sure did work' />
                            <Experience title='Volunteer' business='University Christian Church' link='http://www.universitychristianchurch.net/' startDate='' endDate='' summary='Wowee I sure did work' />
                            <Experience title='SQL & Python Writer' business='InMarket Systems Ptd' link='http://inmarket.com.au/' startDate='' endDate='' summary='Wowee I sure did work' />
                    </Section>
                    <Section title='Education'>
                        <Experience title='Full Stack Development' business='Tech Elevator' image='' startDate='' endDate='' summary='Wowee I sure did work' />
                    </Section>
                </div>
                <div id='info'>
                    <h1 id='resume-name'>
                        Kieran Smith
                    </h1>
                        <ReactToPdf targetRef={ref} filename="Kieran-Smith-Resume.pdf" options={options} onComplete={this.showButton}>
                            {({ toPdf }) => (this.state.isButtonDisplayed ? <button onClick={() => { toPdf(); this.hideButton()}}>Download</button> : null)}
                    </ReactToPdf >
                </div>
            </div>
            </div>
        )
        }
}

function Section({ children, title }) {
    return (
        <section>
            <h2>
                {title}
            </h2>
            {children}
        </section>
    )
}

function Experience({ title, business, link, startDate, endDate, summary}) {
    let dateOne = Date.parse(startDate);
    let dateTwo = (endDate != '' ? Date.parse(endDate) : Date.now());
    let durationString = 'a while';
    return (
        <div>
            <h3>
                {title + ' at '} <a href={link} target='_blank'>{business}</a>
            </h3>
            <h4>
                {durationString}
            </h4>
            <p>
                {summary}
            </p>
        </div>
    )
}

function Education() {

}

export default Resume;