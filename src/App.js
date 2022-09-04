import "./App.css";
import Home from "./Home";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SuperTokens, {
  SuperTokensWrapper,
  getSuperTokensRoutesForReactRouterDom,
} from "supertokens-auth-react";
import ThirdPartyEmailPassword, {
  Google,
  ThirdPartyEmailPasswordAuth,
} from "supertokens-auth-react/recipe/thirdpartyemailpassword";
import Session from "supertokens-auth-react/recipe/session";
import * as reactRouterDom from "react-router-dom";

SuperTokens.init({
  appInfo: {
    appName: "super-token",
    apiDomain: "http://localhost:3001",
    websiteDomain: "http://localhost:3000",
  },
  recipeList: [
    ThirdPartyEmailPassword.init({
      signInAndUpFeature: {
        providers: [
          // Github.init(),
          Google.init(),
          // Facebook.init(),
          // Apple.init(),
        ],
      },
    }),
    Session.init(),
  ],
});

class App extends React.Component {
  render() {
    return (
      <SuperTokensWrapper>
      
        <BrowserRouter>
          <Routes >
            {getSuperTokensRoutesForReactRouterDom(reactRouterDom)}

            //! This is the route that will be rendered when the user is logged in
       <Route path="/" element={<Home/>} />

      
           
          </Routes>
        </BrowserRouter>
      </SuperTokensWrapper>
    );
  }
}
export default App;
