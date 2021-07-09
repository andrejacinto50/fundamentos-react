import React from 'react'

export default param => {

    return (
        <div>
            <h2>O numéro é {param.numero}</h2>
            <if test={param.numero % 2 ==0}>
              <span>Par</span>
            </if>
            <if test={param.numero % 2 == 1}>
              <span>Impar</span>
            </if>
        </div>
    )
}