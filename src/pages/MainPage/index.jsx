import React from "react";
import { Container, Logo, Title } from "./styles";
import githubLogo from "../../assets/imgs/github-logo-white.svg";
import InputSearch from "../../components/InputSearch";


function MainPage () {
  return (
    <Container>
      <Logo src={githubLogo} alt="GitHub Logo" />
      <Title>Github API</Title>
      <InputSearch />
    </Container>
  );
}

export default MainPage;