import { useRef } from "react";
import { useParams } from "react-router-dom";
import { UpdatePiloto } from "./UpdatePiloto";
import { useNavigate } from 'react-router-dom';

export default function NovoPiloto(){
    const navigate = useNavigate();
    const nome = useRef(null);
    const numero = useRef(null);
    const posicao = useRef(null);
    const categoria = useRef(null);
    const {id} = useParams();

    return(
        <>
        <h1>Editar Piloto - {id}</h1>
        <span>nome</span>
        <input type='text' ref={nome} placeholder="Nome"/>
        <span>numero</span>
        <input type='text' ref={numero} placeholder="Número"/>
        <span>posicao</span>
        <input type='text' ref={posicao} placeholder="Posicao"/>
        <span>categoria</span>
        <input type='text' ref={categoria} placeholder="Categoria"/>
        <button onClick={() => UpdatePiloto(id, nome.current.value, numero.current.value, posicao.current.value, categoria.current.value)}>Editar</button>
        <button onClick={() => navigate('/')}>Página Inicial</button>
        </>
    );
}