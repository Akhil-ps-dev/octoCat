import React from 'react'
import { ThirdPartyEmailPasswordAuth,  } from "supertokens-auth-react/recipe/thirdpartyemailpassword";

export default function Home() {
    const signout = async()=> {

    }
    let userId = "";



  return (
    <ThirdPartyEmailPasswordAuth>
<div className='App'>
    <header>
    <p>
        your user id is {userId}
    </p>
    <a className='App-link'>
        onClick={signout}
        Sign out
    </a>
    
    </header>
    
</div>
    </ThirdPartyEmailPasswordAuth>
  )
}
