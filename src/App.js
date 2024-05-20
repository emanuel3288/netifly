import './style.css';
import {Contenedor} from "./styledComponents/Styled.jsx"
import React from 'react';
import Prueba from './prueba.jsx';

function App() {
  return (
    <div className="App">
            <Contenedor>
              <div className="h-30 w-30 flex flex-col bg-[url('../public/ema.jpg')] border-8 border-red-500" >
                <div className="h-30 w-30 bg[url('./assets/images/logo192.png')]"></div>
              </div>
              <Prueba nombre={"emanuel"}/>
              <div><p>otro</p></div>
            </Contenedor>
    </div>
  );
}

export default App;
