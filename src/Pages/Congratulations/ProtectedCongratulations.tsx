import React from 'react';

import {Navigate, Outlet} from 'react-router-dom';
import { getDatabase, ref, get } from "firebase/database";

function ProtectedCongratulations(): JSX.Element {
  //Check user, if it's submitted navigate to Congratulations
  // need to find user in database
  // if isSubmitted == true then navigate(/congratulations)
  // else --> application
  const db = getDatabase()
  const uid = sessionStorage.getItem("uid");
  let a;
  async () => {
      const application = await get(ref(db, "/SubmittedApps/" + uid))
      a = application.val().isSubmitted;
  }

  if (a == true) { //need to fix
      return <Navigate to="/congratulations" />
  }
  return <>{a==true ? <Navigate to="/congratulations" /> : <Outlet />}</>;
  
}
export default ProtectedCongratulations;
