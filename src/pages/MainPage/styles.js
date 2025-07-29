import styled from "styled-components";

export const Container = styled.div`
  dispay: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  padding: 0 2rem;
`;

export const Logo = styled.img`
  width: 130px;
  height: auto;
  margin-bottom: 1rem;
`;

export const Title = styled.h1`
  font-size: 2.2rem;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 1rem;
`;