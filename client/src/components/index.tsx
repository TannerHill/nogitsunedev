import { BrowserRouter, Route, Routes } from 'react-router';
import { Home } from "./pages/home.tsx";
import { MainLayout } from "./layouts/_main.tsx";
import { App } from './pages/app.tsx';
import { About } from './pages/about.tsx';
import { Contact } from './pages/contact.tsx';

export const Index: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/apps/:appName' element={<App />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}