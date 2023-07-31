import { Fragment, useEffect, useState } from "react";

function TemplateFragement(){
    const [user, setUser] = useState();
    useEffect(()=>{
        setTimeout(()=>{
            setUser({
                name: '张三',
                address: '上海市杨浦区四平路'
            })
        },3000)
    },[])
    const fragementTemplate = <>
        <p>07Fragemnet 用户信息</p>
        <p>08Fragemnet 个人介绍</p>
    </>
    if(!user){
        return <> <h2>loading...</h2> </>
    }
    return(
        <div>
            {fragementTemplate} <br/>
            <p>{user.name}</p>
            <p>{user.address}</p>
        </div>
    )
}

export default TemplateFragement;