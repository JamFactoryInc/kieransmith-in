import { Project, Header, Section, Code, CodeBrowser} from "../Project";

function KieransmithIn() {
    return (
        <Project>
            <Header title='kieransmith.in' subtitle="It's been a long journey"/>
            <Section title='wow' content='nice'>
                <Section title='wow' content='nice'></Section>
                {/* <Code sourceLink='https://raw.githubusercontent.com/JamFactoryInc/Portfolio-Site/master/js/main.js' /> */}
                <CodeBrowser pages={[
                    { title: 'main.js', link: 'https://raw.githubusercontent.com/JamFactoryInc/Portfolio-Site-legacy/master/js/main.js' },
                    { title: 'project.js', link: 'https://raw.githubusercontent.com/JamFactoryInc/Portfolio-Site-legacy/master/js/project.js' }]} />
            </Section>
        </Project>
    )
}

export default KieransmithIn;