import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import Feed from "./components/Feed";
import UserLikedPosts from "./components/Feed/UserLikedPost";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/likes">
            <UserLikedPosts />
          </Route>
          <Route path="/">
            <Feed />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
