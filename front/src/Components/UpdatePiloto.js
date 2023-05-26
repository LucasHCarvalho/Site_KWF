export function UpdatePiloto(id, nome, numero, posicao, categoria){
    fetch('http://localhost:3000/pilotos',
    {
        method: "PUT",
        body: JSON.stringify({ "id": id, "nome": nome, "numero": numero, "posicao": posicao, "categoria": categoria}),
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((data) => data.json())
    .then((json) => {
        alert(json);
    });

    
    alert("Piloto " + nome + " editado!")
}