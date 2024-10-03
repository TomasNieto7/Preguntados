import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import PageInitial from './pages/PageInitial';
import Test from './pages/Test';
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={ <Index /> } />
                <Route path="/PageInitial" element={ <PageInitial /> } />
                <Route path="/Test" element={ <Test /> } />
            </Routes>
        </Router>
    );
}

export default App