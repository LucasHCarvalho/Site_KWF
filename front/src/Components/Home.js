import Pilotos from "./Pilotos";
import Header from "./Header";

export default function Home(){
    return <div className="row">
        <Header/>
        <Pilotos/>
    </div>;
}