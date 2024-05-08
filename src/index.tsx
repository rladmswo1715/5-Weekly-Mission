import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import Modal from "./context/Modal";
import ModalPortal from "./components/common/modal/ModalPortal";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Modal>
                <App />
                <ModalPortal />
            </Modal>
        </BrowserRouter>
    </React.StrictMode>
);

