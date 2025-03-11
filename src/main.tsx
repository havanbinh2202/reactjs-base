import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import App from './App.tsx'
import I18nDemo from './samples/I18nDemo.tsx';
import { RecoilRoot } from "recoil";
import RecoilDemo from './samples/RecoilDemo';
import ToastifyDemo from './samples/ToastifyDemo';
import { ToastContainer } from 'react-toastify';
import AxiosDemo from './samples/AxiosDemo.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RecoilRoot>
      <I18nDemo />
      <RecoilDemo />
      <ToastifyDemo />
      <AxiosDemo />
    </RecoilRoot>
    <ToastContainer />
  </StrictMode>,
)
