import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import App from './App.tsx'
import I18nDemo from './samples/I18nDemo.tsx';
import { RecoilRoot } from "recoil";
import RecoilDemo from './samples/RecoilDemo.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RecoilRoot>
      <I18nDemo />
      <RecoilDemo />
    </RecoilRoot>
  </StrictMode>,
)
