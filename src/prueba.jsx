import React from "react";

const Prueba=({nombre})=>{
    return(
        <div>
            {nombre==="emanuel"?(<div className=" bg-black text-white">hola</div>):(<div className=" bg-red text-blue">chau</div>)}
        </div>
    )
}
export default Prueba;