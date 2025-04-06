import { useEffect, useState, useRef } from "react";
import "./style.css";
import Trash from "../../assets/icons8-lixo.svg";
import api from "../../services/api";

function Home() {
  const [users, setUsers] = useState([]);

  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  async function getUsers() {
    const usersApi = await api.get("/users");
    setUsers(usersApi.data);
  }

  async function newUsers(e) {
    e.preventDefault();

    await api.post("/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value,
    });

    // Atualiza a lista após cadastro
    await getUsers();
  }

  async function deleteUsers(id) {
    await api.delete(`/users/${id}`);
    await getUsers(); // Atualiza a lista após deletar
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      <form>
        <h1>Cadastro</h1>
        <input placeholder="Name" name="name" type="text" ref={inputName} />
        <input placeholder="Age" name="age" type="number" ref={inputAge} />
        <input placeholder="Email" name="email" type="email" ref={inputEmail} />
        <button type="button" onClick={newUsers}>
          Cadastrar
        </button>
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
          <button onClick={() => deleteUsers(user.id)}>
            <img src={Trash} alt="Delete" />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
