export function DropPiloto(id){    
    fetch('http://localhost:3000/pilotos',
        {
            method: "DELETE",
            body: JSON.stringify({ "id": id}),
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((data) => data.json())
        .then((json) => {
            alert(json);
        });
}