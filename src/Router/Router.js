import { Routes, Route } from "react-router-dom";
import SignIn from "../component/SignIn";
import SignUp from "./../component/SignUp";
const Router = () => {
  return (
    <>
      <Routes>
        {/* product page */}
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
    </>
  );
};

export default Router;
