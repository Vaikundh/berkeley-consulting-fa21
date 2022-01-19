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
  console.log(a)
  if (a == true) { //need to fix
      return <Navigate to="/congratulations" />
  }
  return <>{a==true ? <Navigate to="/congratulations" /> : <Outlet />}</>;
  
}
export default ProtectedCongratulations;
// const ProtectedCongrats = () => {
// 	const [submitted, setSubmitted] = useState(false);
  
// 	const checkIfSubmitted = async (): Promise<boolean> => {
// 		const db = getDatabase();
//     const uid = sessionStorage.getItem('uid');
//     const application = await get(ref(db, "/SubmittedApps/" + uid));
//     const submitted = application.val().isSubmitted;
//     return submitted;
//   }

//   useEffect(() => {
// 		checkIfSubmitted().then(res => res && setSubmitted(true))
//   }, []);
  
//   return <>
//     {submitted ? 
//       <Navigate to="/congratulations" /> : <Outlet />}
//     </>

// };

// const ProtectedCongrats = () => {
//     const [submitted, setSubmitted] = useState(false);

//     const checkIfSubmitted = async (): Promise<boolean> => {
//       const db = getDatabase();
//       const uid = sessionStorage.getItem('uid');
//       const application = await get(ref(db, "/SubmittedApps/" + uid));
//       const submitted = application.val().isSubmitted;
//       return submitted;
//     }

//     useEffect(() => {
//       checkIfSubmitted().then(res => res && setSubmitted(true))
//     }, []);
  
//     return submitted ? (
//       <Navigate
//         to="/congratulations"
//         replace={true}
//       />
//     ) : (
//       <Outlet />
//     );

//   };
// export default ProtectedCongrats;
