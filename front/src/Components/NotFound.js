export default function NotFound(){
    return <div className="row">
        <div className="col-6">
            <h1>Not Found</h1>
            <h3>The requested URL was not found on this server</h3>
            <h3>Test: /random</h3>
        </div>
        <div className="col-2">
        <img src="https://img.freepik.com/vetores-gratis/ups-erro-404-com-ilustracao-de-conceito-de-robo-quebrado_114360-5529.jpg?w=2000"
        width="400"
        height="600"/>
        </div>
    </div>;
}