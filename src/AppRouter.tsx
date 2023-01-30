import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { RootWrapper } from "./Styles/LayoutStyles/styles";
import AuthPage from "./Page/AuthPage";
import { RootStore } from "./Data/Store/Store";
import { useSelector } from "react-redux";
import MainPage from "./Page/MainPage";
import SignupPage from "./Page/SignupPage";
import Header from "./Component/Header";

const AppRouter = () => {
  const user = useSelector((state: RootStore) => state.AuthReducer);
  return (
    <Router>
      {user.isLoggedIn ? (
        <>
          <RootWrapper>
            <Header />
            <Routes>
              <Route path="/" element={<MainPage />} />
            </Routes>
          </RootWrapper>
        </>
      ) : (
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      )}
    </Router>
  );
};

export default AppRouter;
