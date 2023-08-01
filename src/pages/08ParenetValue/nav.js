import PropTypes from 'prop-types'
function NavChild({nav, children, age}){
    return(
        <>
            <div>
                {nav}
            </div>
            {children}
        </>
    )
}
NavChild.propTypes = {
    age: PropTypes.number,
    nav: PropTypes.object
}

function FComp(){
    const age = 100
    return(
        <>
        <NavChild nav={<Nav/>} age={age}>
            <div>父组件传递的children</div>
        </NavChild>
        </>
    )
}

function Nav(){
    return(
        <>
        JSX传递的Nav</>
    )
}

export default FComp;