import  people  from './data';
//import { getImageUrl } from "../funciones/utils";

export default function Lista() {
    console.log("people:", people);
    const listItems = Array.isArray(people) ? people.map(person =>(
        <li key={person.id}>
            { /* <img src={getImageUrl(person)} 
            Esto es un comentario 
                alt={person.id}
            />*/}
            <p>
                <b>
                    {person.name}
                    {" " + person.profession + " "}
                    {"Conocido como " + person.accomplishment}
                </b>
            </p>
        </li>
    )): <p>  No hay lista  </p> ;
    return (
        <article>
            <h1> Lista de cientificos</h1>
            <ul>{listItems}</ul>
        </article>
    );
}
