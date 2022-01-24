import { Project, Header, Section, Code, CodeBrowser } from "../Project";
import AsyncImage from "../AsyncImage";

function KieransmithIn() {

    return (
        <Project>
            <Header title='kieransmith.in' subtitle="It's been a long journey" />
            <Section title='My portfolio'
                technology='javascript'
                content={`
Every programmer should have a portfolio. They each have their reasons, whether it's for personal growth, showcasing projects, contact information, flexing on peers, etc.

I first began working on a portfolio the moment I understood the basics of development: JavaScript, HTML, and CSS.

I've been working on it since then, improving it over time in various ways so that it is no longer recognizable.
`}>
            </Section>
            <Section title='Version Three' technology='javascript' content={
`
I see you noticed that this is version three and may wonder where the first two are. They are lost to the sands of time and have long-since been deleted from codepen.io due to embarassment.
    They looked very much like they were developed by a CSS-happy highschool student, so I'll give you some time to transport yourself to 2005 and remember the eyesore that was a homemade webpage.

I'd learned a few things in my first two attempts, namely that whitespace is useful, and that there exists a concept of responsive design.
    A sprinkle of jQuery here, some embeds there, and I had a website that looked okay.
`
            }>
                <AsyncImage src='https://i.imgur.com/PvfbKNE.png'/>
                <CodeBrowser pages={[
                    { title: 'index.html', link: 'https://raw.githubusercontent.com/JamFactoryInc/first-portfolio-site/main/html/index.html' },
                    { title: 'index.css', link: 'https://raw.githubusercontent.com/JamFactoryInc/first-portfolio-site/main/css/index.css' },
                    { title: 'index.js', link: 'https://raw.githubusercontent.com/JamFactoryInc/first-portfolio-site/main/js/index.js' }]} />
            </Section>
            <Section title='wow' technology='react.js' content='nice'>
                <Section title='wow' content='nice'></Section>
                <CodeBrowser pages={[
                    { title: 'main.js', link: 'https://raw.githubusercontent.com/JamFactoryInc/Portfolio-Site-legacy/master/js/main.js' },
                    { title: 'project.js', link: 'https://raw.githubusercontent.com/JamFactoryInc/Portfolio-Site-legacy/master/js/project.js' }]} />
            </Section>
        </Project>
    )
}

export default KieransmithIn;