import { useState } from "react";

const App = (props) => {

    // useState
    // const [valor, function] = useState(valor a asignar);
    const [name, setName] = useState("Luis Rodriguez"); // string, boolean, array, object, number
    const [persona, setPersona] = useState({
        name: 'Luis',
        lastname: 'Rodriguez'
    })

    const [notas, setNotas] = useState([
        12, 14, 32, 45, 18, 20
    ])


    const [isOnline, setIsOnline] = useState(false);

    const [error, setError] = useState(false);

    return (
        <>
            {
                error === true &&
                (
                    <div className="alert alert-danger">
                        Some fields are missing
                    </div>
                )
            }
            <span className={isOnline ? "text-success" : "text-danger"}>online</span>
            <h1 className="text-primary">Hola desde React {persona.name} {persona.lastname}</h1>
            <ul>
                {
                    notas.map((valor, indice, arreglo) => {
                        return (
                            <li key={indice}>{valor}</li>
                        )
                    })
                }
            </ul>
            <button className="btn btn-success" onClick={(evento) => {
                console.log(evento);
                setPersona({
                    name: 'Frank',
                    lastname: 'Lobo'
                })
            }}>
                Cambiar Nombre
            </button>
            <h4>{name}</h4>
            <input type="text" placeholder="Insert name" onChange={(e) => setName(e.target.value)} />
            <button className={"btn btn-" + (isOnline ? "danger" : "success")} onClick={() => setIsOnline(!isOnline)}>
                {
                    isOnline ? "Logout" : "Login"
                } 
            </button>
            <button className="btn-btn-dark" onClick={() => setError(true)}>
                Set Error
            </button>
        </>
    )
}

export default App;