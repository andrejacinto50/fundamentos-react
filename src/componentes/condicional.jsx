import React from  'react';

export default param => {

    return (
        <div>
            <h2>0 número é {param.numero}</h2>
            {param.numero % 2 == 0 ?
                    <span>Par</span>
                :   <span>impar</span>

}
        </div>
    )
}