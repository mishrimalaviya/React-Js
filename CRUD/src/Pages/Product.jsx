import {useState,useEffect} from 'react'
function Product()
{
    var [state,setstate]=useState(JSON.parse(localStorage.getItem("data")) || [])
    console.log(state)

    useEffect(()=>{
        localStorage.setItem("data",JSON.stringify(state))
    },[state])

    return(
        <>
            {state .map((el)=>{
                return <>
                    <br></br><br></br>
                    <div>
                        <img src={el.url} width={"100px"} height={"100px"} ></img>
                        <p>title: {el.title}</p>
                        <p>price :{el.price}</p>
                        <button>delete</button>
                        <button>edit</button>
                    </div>
                </>
            })}
        </>
    )   
}
export default Product