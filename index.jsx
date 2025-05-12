import React from 'react'
import { createRoot } from 'react-dom/client';
import {Flight} from "./components/Letenky/Letenky";
import "./global.css"


const root = createRoot(document.getElementById('root'));
root.render(
    <Flight
        cityFrom="Praha"
        cityTo="London"
        timeFrom='3. srpna 2022, 13:30'
        timeTo='3. srpna 2022, 14:00'/>
);

