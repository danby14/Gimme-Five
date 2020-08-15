import React, { useState, useCallback, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { Container, Row, Col } from './styled/Grid';
import { AppContainer, MainContainer } from './styled/AppStyles';
import { AuthContext } from './context/auth-context';

import Auth from './auth/Auth';
import MainNavbar from './navbar/MainNavbar';
import GimmeFive from './gimme-five/GimmeFive';
import MyFives from './my-fives/MyFives';
import ViewAllLists from './social/ViewAllLists';
import SelectedList from './social/SelectedList';
import Account from './account/Account';

let logoutTimer;

function App() {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState(false);
  const [userId, setUserId] = useState(false);
  const [userName, setUserName] = useState();

  console.log('base', BASE_URL);

  const login = useCallback((uid, username, token) => {
    setUserId(uid);
    setUserName(username);
    setToken(token);
  }, []);

  const logout = useCallback(() => {
    setUserId(null);
    setUserName(null);
    setToken(null);
    try {
      fetch(`${BASE_URL}/user/logout`, { credentials: 'include' });
    } catch (err) {
      console.log(err);
    }
  }, [BASE_URL]);

  const refresh = useCallback(() => {
    fetch(`${BASE_URL}/refresh_token`, { method: 'POST', credentials: 'include' }).then(async x => {
      const { id, username, accessToken, ok } = await x.json();
      if (ok) {
        setUserName(username);
        setUserId(id);
        setToken(accessToken);
      } else {
        setToken(false);
      }
      setIsLoading(false);
    });
  }, [BASE_URL]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  // the countdown to silently refresh access token
  useEffect(() => {
    if (token) {
      const remainingTime = 840000; // match token exp time - 1 minute (currently 15min - 1min)
      clearTimeout(logoutTimer);
      logoutTimer = setTimeout(refresh, remainingTime);
    }
  }, [refresh, token]);

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
          <MainNavbar />
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
