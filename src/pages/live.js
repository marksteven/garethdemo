import React from "react";
import { Link } from "gatsby";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import Auth from "@aws-amplify/auth";

const [user, setUser] = useState(null);
const [admin, setAdmin] = useState(false);
const logger = new Logger("My-Logger");

const listener = (data) => {
  switch (data.payload.event) {
    case "signIn":
      logger.error("user signed in"); //[ERROR] My-Logger - user signed in
      getUser();
      break;
    case "signUp":
      logger.error("user signed up");
      break;
    case "signOut":
      logger.error("user signed out");
      //if the admin signs in and another non-admin signs in reset the state
      setAdmin(false);
      break;
    case "signIn_failure":
      logger.error("user sign in failed");
      break;
    case "configured":
      logger.error("the Auth module is configured");
  }
};

const Live = () => (
  useEffect(() => {
   
    getUser();
    Hub.listen('auth', listener)
  }, [])

//getUser function
async function getUser(){
      await Auth.currentAuthenticatedUser({
    bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
}).then(user => {
  console.log(user);
  setUser(user);
  let groups = user.signInUserSession.accessToken.payload["cognito:groups"]
  console.log(groups);
//check the groups claims
  if(groups.includes("admin")){
    setAdmin(true);
  }
})
.catch(err => console.log(err));
}
  <>
    <Layout>
     
      
        

      
    </Layout>
  </>
);

export default Live;
