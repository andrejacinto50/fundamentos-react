import 'layout/car.css';
import React from 'react';



export default param =>
<div className="Card">
    <div className="Conteudo">
    {param.children}
    </div>
<div className="Footer"> 
{param.titulo}
</div>

</div>