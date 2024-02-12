import { useState } from "react";
const GradToFahrComponente = () => {
    const [grados, setGrados] = useState(0);
    return (
    <div>
        <input type="text" onChange={e => setGrados((e.target.value*9/5)+32)}></input><span>°F: {grados}</span>
    </div>
    )
}
export default GradToFahrComponente;