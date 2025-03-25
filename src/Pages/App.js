import { useState } from "react";
import gitlogo from "../Assets/github-mark-white.png";
import Input from "../Components/Input";
import ItemRepo from "../Components/ItemRepo";
import { Container } from "./styles";
import Button from "../Components/Button";
import { API } from "../Services/API";

function App() {
  const [currentRepo, setCurrentRepo] = useState("");
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    try {
      const { data } = await API.get(`repos/${currentRepo}`);
      if (data.id && !repos.some((repo) => repo.id === data.id)) {
        setRepos((prev) => [...prev, data]);
        setCurrentRepo(""); 
      } else if (repos.some((repo) => repo.id === data.id)) {
          alert("Repositório já adicionado.");
      } else {
          alert("Repositório não encontrado.");
      }
    } catch (error) {
      console.error("Erro ao buscar repositório:", error);
      alert("Erro ao buscar repositório.");
    }
  };

  const handleRemoveRepo = (id) => {
    setRepos(repos.filter((repo) => repo.id !== id));
  };

  return (
    <Container>
      <img src={gitlogo} width={72} height={72} alt="Logo do GitHub" />
      <Input
        value={currentRepo}
        onChange={(e) => setCurrentRepo(e.target.value)}
      />
      <Button onClick={handleSearchRepo}>Buscar</Button>
      {repos.map((repo) => (
        <ItemRepo key={repo.id} repo={repo} onRemove={handleRemoveRepo} />
      ))}
    </Container>
  );
}

export default App;