import {App} from "./App";
import KieransmithIn from "./components/projects/KieransmithIn";
import Resume from './components/Resume'
import NotFound from './components/NotFound'
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

function Pages() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<NotFound />} />
                <Route path="/" element={<App />} />
                <Route path="projects/site" element={<KieransmithIn />} />
                <Route path="resume" element={<Resume />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Pages;