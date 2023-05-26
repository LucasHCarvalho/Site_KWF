import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DropPiloto } from './DropPiloto';

function Piloto({ id, nome, numero, posicao, categoria }) {
    const navigate = useNavigate();
    return (
        <div className="headerList">
        <div className="piloto">
            <p>Piloto: {nome}</p>
            <p>Nº {numero}</p>
            <p>Posição: {posicao}</p>
            <p>Categoria: {categoria}</p>
            
        </div>
        <button onClick={() => navigate('/editar/'+id)}>Editar</button>
        <button onClick={() => DropPiloto(id)}>Excluir</button>
        </div>
    );
}

export default Piloto;