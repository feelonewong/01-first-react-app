import { useState } from "react";

function Count(){
    const [count, setCount] = useState(0)
    const [list, setList] = useState([0,1,2,3])
    const [info, setInfo] = useState({
        name: 'feelonewong',
        age: 29,
        height: 100,
        width: 80
    })
    function handleIncrement(){
        setCount(count+1)
    }
    function handleAddArr(){
        setList([...list, list.length])
    }
    function handlePlusTen(index){
        const newList = [...list]
        newList[index] += 10
        setList(newList)
    }
    function handleDel(item){
        setList(list.filter(v=> v !== item))
    }
    function handleAddObj(){
        setInfo({...info, address: '上海'})
    }
    function handleInfoItemChange(key){
        const newInfo = {...info}
        newInfo[key] = "临时测试的东西"
        console.log(newInfo,key)
        setInfo(newInfo)
    }
    return <div>
        <span>{count}</span><br/>
        <button onClick={handleIncrement}>增加</button>
        <br/>
        <ul>
            {list.map((item, index)=>(
                <li key={item}>{item} <button onClick={()=>handlePlusTen(index)}>+10</button>
                <button onClick={()=>handleDel(item)}>删除</button>
                </li>
            ))}
        </ul>
        <button onClick={handleAddArr}>数组-&gt;增加</button>
        <br/>
        <ul>
        {
            Object.keys(info).map((key, index)=>(
                <li key={key}>{key}: {info[key]} <button onClick={()=>handleInfoItemChange(key)}>change</button> </li>
            ))
        }
        </ul>
        <button onClick={handleAddObj}>对象-&gt;增加</button>
    </div>
}

export default Count;