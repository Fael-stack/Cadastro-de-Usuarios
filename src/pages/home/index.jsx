import "./style.css";
import Trash from "../../assets/icons8-lixo.svg";

function Home() {
  const users = [
    {
      id: "0000",
      name: "Rafael",
      age: 17,
      email: "rafaelguerra@gmail.com",
    },
    {
      id: "0001",
      name: "Laura",
      age: 18,
      email: "lauraguerra@gmail.com",
    },
  ];

  return (
    <div className="container">
      <form>
        <h1>Cadastro</h1>
        <input placeholder="Name" name="name" type="text" />
        <input placeholder="Age" name="age" type="number" />
        <input placeholder="Email" name="email" type="email" />
        <button type="button">Cadastrar</button>
      </form>

      {users.map((user) => (
        <div key={user.id} className="card">
          <div>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
          </div>
          <button>
            <img src={Trash} />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
