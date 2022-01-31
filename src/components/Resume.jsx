import '../styles/css/style.css';
import {NavBar} from './Nav'
import AsyncImage from './AsyncImage';
import React, { Component, useEffect } from "react";
import { faHome, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

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
                <NavBar links={[{ link: '/', icon: faHome },
                { link: 'https://github.com/JamFactoryInc', icon: faGithubSquare },
                { link: 'https://www.linkedin.com/in/jamfactoryinc/', icon: faLinkedin }]} />
                <AsyncImage
                    src="https://www.linkedin.com/ambry/?x-li-ambry-ep=AQFE68W3GEkU2AAAAX6aCCEMNnviEnIro9f9zanhFlKlAlT_weIFBFiyPbEGTW1s9X4xEVRlNk6ovFfirxwCtBsh7IafLKwH5PcKGPZ9yMWhVb13sCM5WgZ4VxA6Glq3wfdbt9rl76YxPx3r71ckbIxLKwY4mBW8JDyGYQ1_Cyb5i_5iv3NcXzi-CJZCTjoKeeV7Wi5Th7HjE6tcZ_xSSXSBLSmO-ivsPe28DFyZUDQ5mAtaKwq9VzRRDG-6DHnrcMMvZ11a4PN5jEVwpMv8QcK2Qe0oNS-iPhcXHWXvytELlIYIE6oPKEz_ucD6yTqJndT-TT4vZGfkMB9i7hB8aRa8rZRfBzZlux2XUw75bZEzFhuBfBQDsCqra2YS2xaAubdE3mZpOxz9lHyuUKwdqGoVjsRUiXpPh5rVGOCJPzv1hFrOV_a_ufR7fHlyBqz7iF845M5DK-zNdSzO3nA1Abpyxkv2BeSUz34EhlrUzX0PTIyyPmm0E0jwIHGRNNw425QLiK-NsN6Ug4yUFkQjmJqWaDuNzhgd8rMw-phtiYaY0ab-vstVvacbEw0RM8YHN7b67A&x-ambry-um-filename=Profile.pdf"
                />
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