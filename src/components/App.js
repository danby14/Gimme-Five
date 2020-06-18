import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { Container, Row, Col } from './styled/Grid';
import { AppContainer, Navbar, MainContainer } from './styled/AppStyles';
import { AuthContext } from './context/auth-context';

import Auth from './auth/Auth';
import MainNavbar from './navbar/MainNavbar';
import GimmeFive from './gimme-five/GimmeFive';
import MyFives from './my-fives/MyFives';
import ViewAllLists from './social/ViewAllLists';
import SelectedList from './social/SelectedList';
import Account from './account/Account';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState(false);
  const [userId, setUserId] = useState(false);
  const [userName, setUserName] = useState();

  const login = useCallback((uid, username, token) => {
    setUserId(uid);
    setUserName(username);
    setToken('add real token later');
  }, []);

  const logout = useCallback(() => {
    setUserId(null);
    setUserName(null);
    setToken(null);
  }, []);

  let routes;
  if (!isLoading) {
    if (token) {
      routes = (
        <Switch>
          <Route path='/' exact component={GimmeFive} />
          <Route path='/myfives' component={MyFives} />
          <Route
            path='/social'
            render={({ match: { url } }) => (
              <>
                <Route path={`${url}/`} component={ViewAllLists} exact />
                <Route path={`${url}/:id`} component={SelectedList} />
              </>
            )}
          />
          <Route path='/account' component={Account} />
          <Redirect to='/' />
        </Switch>
      );
    } else {
      routes = (
        <Switch>
          <Route path='/' exact component={GimmeFive} />
          <Route
            path='/social'
            render={({ match: { url } }) => (
              <>
                <Route path={`${url}/`} component={ViewAllLists} exact />
                <Route path={`${url}/:id`} component={SelectedList} />
              </>
            )}
          />
          <Route path='/auth' exact component={Auth} />
          <Redirect to='/' />
        </Switch>
      );
    }
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        login: login,
        logout: logout,
        userId: userId,
        userName: userName,
      }}
    >
      <Router>
        <AppContainer>
          <Navbar>
            <MainNavbar />
          </Navbar>
          <Container>
            <Row>
              <Col size={1} collapse='xs'></Col>
              <Col size={8}>
                <MainContainer>{routes}</MainContainer>
              </Col>
              <Col size={1} collapse='xs'></Col>
            </Row>
          </Container>
        </AppContainer>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
