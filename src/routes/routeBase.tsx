import Menu from 'components/menu/menu';
import Home from 'pages/home/home';
import Cardapio from 'pages/cardapio/cardapio';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from 'components/header/header';
import NotFound from 'pages/notFound/notFound';
import Prato from 'pages/prato/prato';

export default function AppRouter() {
    return (
        <main>
            <Router>
                <Menu/>
                <Routes>
                    <Route path='/' element={<Header/>}>
                        <Route index element={<Home/>} />
                        <Route path='cardapio' element={<Cardapio/>} />
                        <Route path='prato/:id' element={<Prato />} />
                        <Route path='*' element={<NotFound />} />
                    </Route>
                </Routes>
            </Router>
        </main>
    );
}