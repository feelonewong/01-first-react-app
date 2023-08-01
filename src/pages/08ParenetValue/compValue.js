function CompValue(){
    const obj = {
        name: '黄飞龙',
        age: 29
    }
    return <>
        <UserDet {...obj}></UserDet>
    </>
}

function UserDet(props){
    return(
        <UserCard {...props}></UserCard>
    )
}

function UserCard({name, age}){
    return(
        <>
        <p>{name}</p>
        <p>{age}</p>
        </>
    )
}

export default CompValue;