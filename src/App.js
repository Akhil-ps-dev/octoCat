import './App.css';
import React from 'react';
import {BrowserRouter , Route, Routes} from 'react-router-dom';
import SuperTokens, { SuperTokensWrapper, getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react";
import ThirdPartyEmailPassword, {Google, } from "supertokens-auth-react/recipe/thirdpartyemailpassword";
import Session from "supertokens-auth-react/recipe/session";
import * as reactRouterDom from "react-router-dom";

SuperTokens.init({
    appInfo: {
        // learn more about this on https://supertokens.com/docs/thirdpartyemailpassword/appinfo
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
                ]
            }
        }),
        Session.init()
    ]
});

class App extends React.Component {
  render() {
      return (
          <SuperTokensWrapper>
              <BrowserRouter>
                  <Routes>
                      {/*This renders the login UI on the /auth route*/}
                      {getSuperTokensRoutesForReactRouterDom(reactRouterDom)}
                      {/*Your app routes*/}
                  </Routes>
              </BrowserRouter>
          </SuperTokensWrapper>
      );
  }
}
export default App;
