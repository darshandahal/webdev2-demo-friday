export default function Dog(props) {
    return (
        <section className="m-3 bg-neutral-100">
            <h3 className="text-2xl font-bold text-blue-900">{props.name}</h3>
            <p><span className="font-bold">Breed: </span>{props.breed}</p>
            <p>Age: {props.age}</p>
            <p>Colour: {props.color}</p>
        </section>
    );
}