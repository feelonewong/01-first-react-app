import { useCallback, useEffect, useState } from "react";

function UseEffectSuper(){
    const [second, setSecond] = useState(0)
    useEffect(()=>{
        const id = setInterval(()=>{
            setSecond(prev=> prev+1)
        },1000)
        return ()=>{
            clearInterval(id)
        }
    }, [])

    const [city, setCity] = useState("北京")
    const [weather, setWeather] = useState(20)
    const getWeather = useCallback(()=>{
        if(city === '北京') return 20
        if(city === '上海') return 25
        if(city === '南京') return 30
    }, [city]) 
    useEffect(()=>{
        setWeather(getWeather())
        console.log('run')
    }, [getWeather])
    return<>
       <p>{second}</p>
       <p>{city} | 😁 {weather}</p>
       <p>
        <select onChange={e=>setCity(e.target.value)}>
            <option value="北京">北京</option>
            <option value="上海">上海</option>
            <option value="南京">南京</option>
        </select>
       </p>
    </>
}

export default UseEffectSuper;