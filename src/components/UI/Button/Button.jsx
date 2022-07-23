const Button = ({cta, classColor, onHandleClick}) =>{
    return(
        <button className={`btn ${classColor}`} onClick={onHandleClick}>
            {cta}
        </button>
    )
}


export default Button;