import React from "react";
import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";
import { LogoImage } from "@/components/atoms/LogoImage";

export function LoadingPage() {
  return (
    <Container>
      <AppName>Plangoab</AppName>
      <LogoContainer>
        <LogoImage />
      </LogoContainer>
      <div>
        <CircularProgress />
      </div>
    </Container>
  );
}

const AppName = styled.h2`
  font-weight: 900;
  font-family: var(--font-design1);
  color: var(--logo);
`;

const Container = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  align-content: center;
  gap: 2rem;
`;

const LogoContainer = styled.div`
  width: 10rem;
  height: 10rem;
`;
