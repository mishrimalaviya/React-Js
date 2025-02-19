import { useDispatch, useSelector } from "react-redux"
import { decre, incre } from "../Feature/Slice"

function C()
{
    const d=useSelector((state)=>{
        return state.co.count
    })

    const dis=useDispatch()
    return(
        <>
            <div style={{marginLeft:"700px"}}>
            <h1>{d}</h1>
            <button onClick={()=>dis(incre())} >+</button>
            <button onClick={()=>dis(decre())} style={{marginLeft:"30px"}}>-</button>
            </div>
        </>
    )
}
export default C