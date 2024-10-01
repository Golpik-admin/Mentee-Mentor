import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./pages/authentication/login/Login";
import SignUp from "./pages/authentication/signUp/SignUp";
import Home from "./pages/home/Home";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import CreateProfile from "./pages/mentor/createProfile/CreateProfile";
import HomePage from "./pages/mentor/hoemPage/HomePage";
import MentorProgram from "./pages/mentor/mentorProgram/MentorProgram";
import CreateProgram from "./pages/mentor/createprogram/CreateProgram";
import MentorProfile from "./pages/mentor/mentorProfile/MentorProfile";
import EditProfileMentor from "./pages/mentor/editProfileMentor/EditProfileMentor";
import AccountSetting from "./pages/mentor/accountSetting/AccountSetting";

function App() {
  // const dispatch = useDispatch();
  const location = useLocation();
  // const authToken = localStorage.getItem("authToken");

  // useEffect(() => {
  //   axios.get("/api/sanctum/csrf-cookie");
  //   if (authToken) {
  //     dispatch(loadUserAction());
  //   }
  // }, [dispatch]);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  //   dispatch(clearErrors());
  // }, [location.pathname]);

  const hideHeaderFooter =
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname === "/createprofile" ||
    location.pathname === "/homepage" ||
    location.pathname === "/createprogram" ||
    location.pathname === "/mentorprogram" ||
    location.pathname === "/mentorprofile" ||
    location.pathname === "/editprofilementor" ||
    location.pathname === "/accountsetting";
  return (
    <div className="App w-full h-full overflow-auto">
      {!hideHeaderFooter && <Header />}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createprofile" element={<CreateProfile />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/createprogram" element={<CreateProgram />} />
        <Route path="/mentorprogram" element={<MentorProgram />} />
        <Route path="/mentorprofile" element={<MentorProfile />} />
        <Route path="/editprofilementor" element={<EditProfileMentor />} />
        <Route path="/accountsetting" element={<AccountSetting />} />

        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
}

export default App;
