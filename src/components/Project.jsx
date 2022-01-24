import '../styles/css/style.css';
import React, { useEffect, useState, Component} from 'react';
import NavBar from './Nav'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { ScrollCache } from '../App'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import { vscDarkPlus as sourceTheme } from 'react-syntax-highlighter/dist/esm/styles/prism';
import useFetch from 'react-fetch-hook';
import Spinner from './Spinner';

SyntaxHighlighter.registerLanguage('javascript', js);

function BackButton() {
    return (
        <NavBar links={[{ link: '/', icon: faHome },
        { link: 'https://github.com/JamFactoryInc', icon: faGithubSquare }]} />
    )
}

function Project(props) {
    useEffect(() => {
        ScrollCache();
    }, []);

        return (
            <div className='project-page'>
                <BackButton />
                {props.children}
            </div>
        );

}

function Header({ title, subtitle}) {
    return (
        <div className='page project-header'>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </div>
    )
}

function Section(props) {
    return (
        <div className='project-section'>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
            {props.children}
        </div>
    )
}

class CodeBrowser extends Component {
    constructor(props) {
        super(props);
        this.state = ({ selectedPage: 0, pages: props.pages })
    }
    render() {
        return (
            <div className='code-browser'>
                <div className='code-browser-tabs'>
                    {
                        this.props.pages.map((page, i) => {
                            return (<this.Tab key={i}
                                id={i}
                                title={page.title}
                                parent={this} />)
                        })
                    }
                </div>
                <Code source={this.state.pages[this.state.selectedPage].link} />
            </div>
        )
    }

    Tab({title, id, parent}) {
        return (
            <div className={'code-browser-tab' + (parent.state.selectedPage === id ? ' selected' : '')}
                onClick={() => { if (id != parent.state.selectedPage) parent.setState({ selectedPage: id }) }}>
                {title}
            </div>
        )
    }
}
CodeBrowser.cachedContent = {};

function Code(props){
    const [collapsed, setCollapsed] = useState(true);
    const [data, setData] = useState(undefined);
    //const { isLoading, data } = useFetch(props.source, {formatter: (response) => response.text()});
    const fetchSourceCode = async () => {
        if (!CodeBrowser.cachedContent[props.source]) {
            const res = await fetch(props.source);
            const sourceCode = await res.text();
            CodeBrowser.cachedContent[props.source] = sourceCode;
            setData(sourceCode)
        } else if (data != CodeBrowser.cachedContent[props.source]){
            setData(CodeBrowser.cachedContent[props.source])
        }
    };

    fetchSourceCode();

    let loadedContent = <Spinner />
    if (data && data === CodeBrowser.cachedContent[props.source]) {
        loadedContent = <pre>
            <SyntaxHighlighter language="javascript" style={sourceTheme} >
                {data}
            </SyntaxHighlighter>
        </pre>
    }
    return (
            <div>
            <div className={'code-block' + (collapsed ? ' collapsed' : '')}>
                {loadedContent}
            </div>
            <div className={'code-browser-tab' + (collapsed ? ' selected' : '')} onClick={() => { setCollapsed(!collapsed) }}>{collapsed ? "Expand" : "Collapse"}</div>
        </div>
        )
}
Code.cache = {}

export { Project, Header, Section, Code, CodeBrowser};