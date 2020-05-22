import React from 'react';

import IdeaGenerators from './components/IdeaGenerators';
import ListOfFive from './components/ListOfFive';
import { Container, Row, Col } from './components/styled/Grid';
import {
  AppContainer,
  Navbar,
  MainContainer,
  MainHeading,
  RowOfButtons,
} from './components/styled/AppSyles';

function App() {
  function handleClick() {
    const thoughtsList = document.getElementById('list-of-five');
    thoughtsList.classList.toggle('hidden');
  }

  return (
    <AppContainer>
      <Navbar>
        <div>Gimme Five</div>
        <div>My 5's</div>
        <div>Vote</div>
        <div>Me</div>
      </Navbar>
      <Container>
        <Row>
          <Col size={1} collapse='xs'></Col>
          <Col size={8}>
            <MainContainer>
              <MainHeading onClick={handleClick}>Gimme Five</MainHeading>
              <ListOfFive />
              <RowOfButtons>
                <IdeaGenerators startCount={0} />
                <IdeaGenerators startCount={3} />
                <IdeaGenerators startCount={7} />
              </RowOfButtons>
            </MainContainer>
          </Col>
          <Col size={1} collapse='xs'></Col>
        </Row>
      </Container>
    </AppContainer>
  );
}

export default App;
