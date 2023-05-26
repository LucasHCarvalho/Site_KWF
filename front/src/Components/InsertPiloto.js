export function InsertPiloto(nome, numero, posicao, categoria){
    fetch('http://localhost:3000/pilotos',
    {
        method: "POST",
        body: JSON.stringify({ "nome": nome, "numero": numero, "posicao": posicao, "categoria": categoria }),
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((data) => data.json())

    alert("Piloto " + nome + " inserido!")
}