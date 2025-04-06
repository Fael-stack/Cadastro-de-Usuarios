import { useEffect, useState } from "react";
import "./style.css";
import Trash from "../../assets/icons8-lixo.svg";
import api from "../../services/api";

function Home() {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    const usersApi = await api.get("/users");
    setUsers(usersApi.data); 
    console.log(usersApi.data); 
  }

  useEffect(() => {
    getUsers();
  }, []);

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
            <p>
              Name: <span>{user.name}</span>
            </p>
            <p>
              Age: <span>{user.age}</span>
            </p>
            <p>
              Email: <span>{user.email}</span>
            </p>
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