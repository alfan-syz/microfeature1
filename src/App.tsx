import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeLog from "./Pages/HomeLog";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import DetailPages from "./Pages/DetailPages";
import AdminPage from "./Pages/AdminPage";
import AddPaslonPage from "./Pages/AddPaslonPage";
import AddPartaiPage from "./Pages/AddPartaiPage";
import ListPaslonPage from "./Pages/ListPaslonPage";
import ListPartaiPage from "./Pages/ListPartaiPage";
import ModalVotePage from "./Pages/ModalVotePage";
import VotePage from "./Pages/VotePage";
import HomeNotLog from "./Pages/HomeNotLog";
import React from "react";
import NotFound from "./Pages/NotFound";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const App: React.FC = () => {
  const isLogin: boolean = true;

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomeNotLog />}></Route>
          <Route path="/home" element={<HomeLog isLogin={isLogin} />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/detail/:id" element={<DetailPages />}></Route>
          <Route path="/modalvote" element={<ModalVotePage />}></Route>
          <Route path="/vote" element={<VotePage />}></Route>
          <Route path="*" element={<NotFound />}></Route>

          <Route
            path="/admin-listpartai"
            element={
              <PrivateRoute>
                <ListPartaiPage />
              </PrivateRoute>
            }
          ></Route>

          <Route
            path="/admin-listpaslon"
            element={
              <PrivateRoute>
                <ListPaslonPage />
              </PrivateRoute>
            }
          ></Route>

          <Route
            path="/admin-addpartai"
            element={
              <PrivateRoute>
                <AddPartaiPage />
              </PrivateRoute>
            }
          ></Route>

          <Route
            path="/admin-addpaslon"
            element={
              <PrivateRoute>
                <AddPaslonPage />
              </PrivateRoute>
            }
          ></Route>

          <Route
            path="/admin-home"
            element={
              <PrivateRoute>
                <AdminPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>

      <div></div>
    </>
  );
};

export default App;
