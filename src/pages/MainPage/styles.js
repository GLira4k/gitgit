import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  min-height: 100vh;
  width: 100%;
  overflow: hidden;

  background-color: ${(props) => props.theme.colors.background};
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  width: 30vw;
  
`;

export const Logo = styled.img`
  width: 130px;
  height: auto;
  margin-bottom: 1rem;
`;

export const Title = styled.h1`
  font-size: 2.2rem;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 2rem;
`;