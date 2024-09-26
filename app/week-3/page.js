import Dog from "./dog";

export default function page() {
    let dog1 = {
        name: "Jenny",
        breed: "Nepali Shephard",
        age: 11,
        color: "brown",
    }
    let dog2 = {
        name: "Dingo",
        breed: "Indian shephard",
        age: 12,
        color: "brown"
    }
    let dog3 = {
        name: "Panity",
        breed: "china pup",
        age: 5,
        color: "pink"
    }
    return (
        <main className="m-6">
            <h2 className="text-3xl font-bold">Meet the asian dogs</h2>
            <Dog 
                name = {dog1.name}
                breed = {dog1.breed}
                age = {dog1.age}
                color = {dog1.color}
            />
            <Dog
                name = {dog2.name}
                breed = {dog2.breed}
                age = {dog2.age}
                color = {dog2.color}
            />
            <Dog
                name = {dog3.name}
                breed = {dog3.breed}
                age = {dog3.age}
                color = {dog3.color}
            />
        </main>
    )
}