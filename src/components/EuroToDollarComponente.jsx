import { useState } from "react";
const EuroToDollarComponente = () => {
    const [dollar, setDollar] = useState(0);
    return (
    <div>
        <input type="text" onChange={e => setDollar(e.target.value*1.5)}></input>€: {dollar}$
    </div>
    )
}
export default EuroToDollarComponente;