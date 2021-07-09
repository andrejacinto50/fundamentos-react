import '../layout/App.css';
import Comfilhos from "../componentes/Comfilhos.jsx";
import ComParametro from "../componentes/ComParametro.jsx";

import Condicional from "../componentes/condicional"

import Repeticao from "../componentes/repeticao.jsx";

export default param => (
    <div className='App'>
        <card titulo="#05 - Condicional">
            <Condicional numero={10}></Condicional>
        </card>
        <card titulo="#04 - Repetiçao">
            <Repeticao></Repeticao>
        </card>
        <Comfilhos>
            <card titulo="#03 - Componente de Filhos">
                <ul>
                    <li>Felipe</li>
                    <li>Carlos</li>
                    <li>Bia</li>
                    <li>Henrique</li>
                </ul>
            </card>
        </Comfilhos>

        <card titulo='#02Componente com Parametro'>
            <ComParametro titulo='Esse é o titulo' subtitulo="Esse é o subtitulo" />
            <primeiro />
        </card>
    </div>
);