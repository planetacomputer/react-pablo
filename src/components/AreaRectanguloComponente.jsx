import React, { useState, useRef } from 'react';
const AreaRectanguloComponente = () => {
    const [areaRect, setAreaRect] = useState(0);
    const base = useRef(0);
    const altura = useRef(0);
    return (
        <div>
            Base: <input type="text" ref={base} onChange={e => setAreaRect(base.current.value * altura.current.value)}></input>
            Altura: <input type="text" ref={altura} onChange={e => setAreaRect(base.current.value * altura.current.value)}></input>
            <span>Área: {areaRect}</span>
        </div>
    )
}
export default AreaRectanguloComponente;