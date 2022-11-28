import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './admin/components/Dashboard/Dashboard';
import Faixa from './client/common/faixa/Faixa';
import LayoutHomePage from './client/components/layout';
import SingleImovel from './client/components/layout/single';

function Example() {
    console.log("example")
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LayoutHomePage />} />
                <Route path="/imoveis" element={<SingleImovel />} />
                <Route path='/home/imoveis/teste' element={<SingleImovel />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
