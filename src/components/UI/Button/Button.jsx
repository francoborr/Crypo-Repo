const Button = ({cta, classColor, onHandleClick}) =>{
    return(
        <button className={`btn ${classColor}`} onClick={onHandleClick}>
            {cta}
        </button>
    )
}

Button.defaultProps = {
    classColor: 'btn-primary',
    cta: 'Boton'
  }

export default Button;