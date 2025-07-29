import { React, useState } from "react";
import { Link } from "react-router-dom";
import { Container, InputContainer, Logo, Title } from "./styles";
import githubLogo from "../../assets/imgs/github-logo-white.svg";
import InputSearch from "../../components/InputSearch";


function MainPage() {
  const [login, setLogin] = useState(" ");

  return (
    <Container>
      <InputContainer>
        <Logo src={githubLogo} alt="GitHub Logo" />
        <Title>Github API</Title>
        <Link to={`/${login}/repositories`}>
          <InputSearch
            placeholder="Usuário"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </Link>
      </InputContainer>
      
    </Container>
  );
}

export default MainPage;