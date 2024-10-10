import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./pages/authentication/login/Login";
import SignUp from "./pages/authentication/signUp/SignUp";
import WebHome from "./pages/webHome/WebHome";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import ForgotPassword from "./pages/authentication/forgotPassword/ForgotPassword";
import ResetPassword from "./pages/authentication/resetPassword/ResetPassword";
import Sessions from "./pages/sessions/Sessions";
import ContactUs from "./pages/contactUs/ContactUs";
import Faq from "./pages/faq/Faq";
import Pricing from "./pages/pricing/Pricing";
import HowItWorks from "./pages/howItWorks/HowItWorks";
import Knowledge from "./pages/knowledge/Knowledge";
import Search from "./pages/search.js/Search";
import Payment from "./pages/payment/Payment";
import SearchProgram from "./pages/searchProgram/SearchProgram";
import CreateProfile from "./pages/createProfile/CreateProfile";
import HomePage from "./pages/homePage/HomePage";
import MentorProgram from "./pages/mentorProgram/MentorProgram";
import AccountSettings from "./pages/accountSetting/AccountSetting";
import EditProfile from "./pages/editProfile/EditProfile";
import Profile from "./pages/profile/Profile";

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
    location.pathname === "/mentorprogram" ||
    location.pathname === "/profile" ||
    location.pathname === "/editprofile" ||
    location.pathname === "/forgotpassword" ||
    location.pathname === "/resetpassword" ||
    location.pathname === "/sessions" ||
    location.pathname === "/search" ||
    location.pathname === "/payment" ||
    location.pathname === "/searchprogram" ||
    location.pathname === "/accountsetting";

  return (
    <div className="App w-full h-full overflow-auto">
      {!hideHeaderFooter && <Header />}
      <Routes>
        <Route path="/webhome" element={<WebHome />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createprofile" element={<CreateProfile />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/mentorprogram" element={<MentorProgram />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/accountsetting" element={<AccountSettings />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/sessions" element={<Sessions />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/howitworks" element={<HowItWorks />} />
        <Route path="/knowledge" element={<Knowledge />} />
        <Route path="/search" element={<Search />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/searchprogram" element={<SearchProgram />} />

        <Route path="/" element={<Navigate to="/webhome" />} />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
}

export default App;
