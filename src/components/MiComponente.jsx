import { useState } from "react";

const MiComponente = ({onSomeEvent}) => {
    return (
    <input type="text" onChange={e => onSomeEvent(e.target.value)}></input>
    )
}
export default MiComponente;