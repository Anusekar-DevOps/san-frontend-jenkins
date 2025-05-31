// import { BrowserRouter as Router, Navigate, Route, Routes, } from "react-router-dom";
// import { Suspense } from "react";
// import Dashboard from "../pages/dashboard-page/dashboard";
// import Header from "../layouts/header/header";
// import Country from "../pages/Master/Country/Country";
// import State from "../pages/Master/State/State";
// import Adminuserrights from "../pages/Adminuserrights/Adminuserrights";
// import AdminUser from "../pages/Master/Adminuser/adminuser";
// import AddEmp from "../pages/Master/Adminuser/addemp";
// import Viewnew from "../pages/View/Viewnew";
// import Insert from "../pages/View/Insert";
// import ChangePassword from "../pages/change-password/changepassword";
// import Details from "../pages/Insert/Details";
// import Aliase from "../pages/Insert/Aliase";
// import Login from "../pages/Login/login";

// const AppRouter = () => {
//     const isAuthenticated = () => {
//         const loginDetails = sessionStorage.getItem('loginDetails') || localStorage.getItem('loginDetails');
//         return loginDetails !== null;
//     };
//     return (
//         <Suspense fallback={<span>Loading....</span>}>
//             <Router>
//                 <Routes>
//                 <Route path="/" element={isAuthenticated() ? <Navigate to="/home" /> : <Navigate to="/Login" />} />
//                     <Route path="/" element={<Login />}/>
//                     <Route path="/dashboard" element={<Dashboard />} />
//                     <Route path="/header" element={<Header />} />
//                     <Route path="/Country" element={<Country />} />
//                     <Route path="/State" element={<State />} />
//                     <Route path="/adminuser" element={<AdminUser />} />
//                     <Route path="/addemp" element={<AddEmp />} />
//                     <Route path="/Adminuserrights" element={<Adminuserrights />} />
//                     <Route path="/ChangePassword" element={<ChangePassword />} />
//                     <Route path="/Viewnew" element={<Viewnew />} />
//                     <Route path="/Insert" element={<Insert />} />
//                     <Route path="/Details" element={<Details />} />
//                     <Route path="/Aliase/:id" element={<Aliase />} />
//                 </Routes>
//             </Router>
//         </Suspense>
//     );
// };

// export default AppRouter;
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from "react-router-dom";
import { Suspense } from "react";
import Dashboard from "../pages/dashboard-page/dashboard";
import Header from "../layouts/header/header";
import Country from "../pages/Master/Country/Country";
import State from "../pages/Master/State/State";
import Adminuserrights from "../pages/Adminuserrights/Adminuserrights";
import AdminUser from "../pages/Master/Adminuser/adminuser";
import AddEmp from "../pages/Master/Adminuser/addemp";
import Viewnew from "../pages/View/Viewnew";
import Insert from "../pages/View/Insert";
import ChangePassword from "../pages/change-password/changepassword";
import Details from "../pages/Insert/Details";
import Aliase from "../pages/Insert/Aliase";
import Login from "../pages/Login/login";
import Uitesting from "../pages/Insert/Uitesting";
// import Search from "../pages/Insert/Search";


import Result from "../pages/googelsearch/Result";


import SanctionSearch from "../pages/Insert/ReportSearch";

import SanLevel1FirstReview from "../pages/san_search/SanLevel1FirstReview";
import SanLevel2Search from "../pages/san_search/Sanlevel 2 search/SanLevel2Search";
import SanLevel3Search from "../pages/san_search/Sanlevel 3 search/SanLevel3Search";
import SanLevel1secReview from "../pages/san_search/Sanlevel 1 search/SanLevel1secReview";


import Notification from '../pages/san_search/Notification/Notification'
import Search from "../pages/san_search/Search";

const AppRouter = () => {
    const isAuthenticated = () => {
        const loginDetails = sessionStorage.getItem('loginDetails') || localStorage.getItem('loginDetails');
        return loginDetails !== null;
    };
    return (
        <Suspense fallback={<span>Loading....</span>}>
            <Router>
                <Routes>
                    {/* Protected Route */}
                    <Route
                        path="/"
                        element={
                            isAuthenticated() ? (
                                <Outlet /> // Renders the child routes if authenticated
                            ) : (
                                <Navigate to="/login" /> // Redirects to login if not authenticated
                            )
                        }
                    />
                    {/* Unprotected Route */}
                    <Route path="/login" element={<Login />} />
                    {/* Nested routes */}
                    <Route path="/" element={<Outlet />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/header" element={<Header />} />
                        <Route path="/Country" element={<Country />} />
                        <Route path="/State" element={<State />} />
                        <Route path="/adminuser" element={<AdminUser />} />
                        <Route path="/addemp" element={<AddEmp />} />
                        <Route path="/Adminuserrights" element={<Adminuserrights />} />
                        <Route path="/ChangePassword" element={<ChangePassword />} />
                        <Route path="/Viewnew" element={<Viewnew />} />
                        <Route path="/Insert" element={<Insert />} />
                        <Route path="/Details" element={<Details />} />
                        <Route path="/Aliase/:id" element={<Aliase />} />
                        <Route path="/Uitesting" element={<Uitesting />} />
                        <Route path="/Search" element={<Search />} />
                      




                        <Route path="/Details/:customerId" element={<Details />} />
                        <Route path="/Insert" element={<Insert />} />









                        <Route path="/Result" element={<Result />} />




                        <Route path="/SanctionSearch" element={<SanctionSearch />} />


                        <Route path="/SanLevel1FirstReview" element={<SanLevel1FirstReview />} />
                        <Route path="/SanLevel1secReview" element={<SanLevel1secReview />} />
                        <Route path="/SanLevel2Search" element={<SanLevel2Search />} />
                        <Route path="/SanLevel3Search" element={<SanLevel3Search />} />
                        <Route path="/Search" element={<Search />} />

                        <Route path="/Notification" element={<Notification />} />



                    </Route>
                </Routes>
            </Router>
        </Suspense>
    );
};

export default AppRouter;
