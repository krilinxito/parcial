import './App.css'
function App(props) {
  return(
    <div className="container">
      <h1 className={props.h1}>{props.titulo}</h1>
      <div className='fila'>
      <div className={props.style}>
        <p>Texto 1</p>
      </div>
      <div className="img">
        <img src={props.img} alt="" />
      </div>
      <div className={props.style}>
        <p>Texto 2</p>
      </div>
      </div>
      <div className={props.style}>
        <p>Texto 3</p>
      </div>

    </div>
  );
}

export default App
