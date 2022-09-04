const express = require('express')
const app = express()
const cors = require('cors');
// import { middleware, errorHandler } from 'supertokens-node/framework/express'
// import ThirdPartyEmailPassword from "supertokens-node/recipe/thirdpartyemailpassword";
// let { Google, Github, Apple } = ThirdPartyEmailPassword;
// import supertokens from "supertokens-node";
// import Session from "supertokens-node/recipe/session";
// import ThirdPartyEmailPassword from"supertokens-node/recipe/thirdpartyemailpassword";


// SuperTokens.init({
//     appInfo: {
//         apiDomain: "http://localhost:3001",
//         appName: "super-token",
//         websiteDomain: "http://localhost:3000",
//     },
//     supertokens: {
//         connectionURI: "https://try.supertokens.io",
//     },

//     recipeList: [
//         ThirdPartyEmailPassword.init({
//             providers: [
//                 // We have provided you with development keys which you can use for testing.
//                 // IMPORTANT: Please replace them with your own OAuth keys for production use.
//                 Google({
//                     clientId: process.env.GOOGLE_CLIENT_SECRET
// ,                    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//                 }),
              
//                 // Facebook({
//                 //     clientSecret: "FACEBOOK_CLIENT_SECRET",
//                 //     clientId: "FACEBOOK_CLIENT_ID"
//                 // })
//             ]
//         }),
//     ]
// });


import supertokens from "supertokens-node";
import Session from "supertokens-node/recipe/session";
import ThirdPartyEmailPassword from"supertokens-node/recipe/thirdpartyemailpassword";
let { Google } = ThirdPartyEmailPassword;


supertokens.init({
    framework: "express",
    supertokens: {
        // try.supertokens.com is for demo purposes. Replace this with the address of your core instance (sign up on supertokens.com), or self host a core.
        connectionURI: "https://89c758812c4211ed90e79b78e64c7774-ap-southeast-1.aws.supertokens.io:3571",
        // apiKey: "IF YOU HAVE AN API KEY FOR THE CORE, ADD IT HERE",
    },
    appInfo: {
        // learn more about this on https://supertokens.com/docs/thirdpartyemailpassword/appinfo
        appName: "super-token",
        apiDomain: "http://localhost:3001",
        websiteDomain: "http://localhost:3000",
     
    },
    recipeList: [
        ThirdPartyEmailPassword.init({
            providers: [
     
                Google({
                    clientId: process.env.GOOGLE_CLIENT_SECRET
,                    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                }),
            ]            
        }),
        Session.init() 
    ]
});


app.use(cors({
    origin: 'http://localhost:3000',
    allowedHeaders: ['content-type', ...supertokens.getAllCORSHeaders()],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,

}));

///
app.use(supertokens.middleware());
//!
app.use(supertokens.errorHandler());
///

app.use((err,req,res,next) => {
res.status(500).send("Internal Server Error" + err.message);
});
app.listen(3001, () => console.log(`Example app listening on port ${3001}!`))