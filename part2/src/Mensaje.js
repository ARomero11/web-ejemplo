const Mensaje = (props) => {

    //console.log(props)
    return <h1 style={{color: props.color}}> 
        {props.title}
    </h1>
  }

  export default Mensaje