import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Piloto from "./Piloto";

export default function Pilotos() {
    const [pilotos, setPilotos] = useState();
    const navigate = useNavigate();

    function SelectPilotos() {
        fetch('http://localhost:3000/pilotos',
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((data) => data.json())
            .then((json) => {
                setPilotos(json);
            });
    }
    return (
    <div>
    '    <div className="d-flex justify-content-between">
            <div className="col-4"><h2>Lista de Pilotos</h2></div>
            <div className="col-2"><button onClick={() => navigate('/criar')}>Criar Piloto</button></div>
            <button onClick={SelectPilotos}>Listar Pilotos</button>
        </div>
        <div>
            {pilotos && pilotos.map((piloto) => {
                    return <Piloto key={piloto._id} id={piloto._id} nome={piloto.nome} numero={piloto.numero} posicao={piloto.posicao} categoria={piloto.categoria}/>
            
                })
                }
        </div>
    </div>);
}