import { useEffect, useState } from "react";

function ReactComponentSuper(){
    const [error, setError] = useState(null)
    useEffect(()=>{
        try{
            const responseError = {
                status: 404,
                message: 'Not Found'
            }
            throw responseError;
        }catch(error){
            setError(error)
        }
    }, [])
    if(error){
        return <><h3>error: {error.message}</h3> </>
    }

    return<>
       <h2>👌🏻 正常显示内容</h2> 
    </>
}

export default ReactComponentSuper;