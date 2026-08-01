import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import ProtectedRoute from "./components/auth/ProtectedRoute";
import RamayanaVersePage from "./pages/RamayanaVersePage";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";


import RamayanaKandaPage from "./pages/RamayanaKandaPage";

import Dashboard from "./pages/Dashboard";

import Home from "./pages/Home";
import BhagavadGita from "./pages/BhagavadGita";
import ChapterPage from "./pages/ChapterPage";
import Ramayana from "./pages/Ramayana";
import AskAI from "./pages/AskAI";
import About from "./pages/About";
import Profile from "./pages/Profile";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>

          {/* Public Routes */}
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Routes */}
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />

          <Route
            path="/gita"
            element={
              <ProtectedRoute>
                <BhagavadGita />
              </ProtectedRoute>
            }
          />

          <Route
            path="/gita/chapter/:id"
            element={
              <ProtectedRoute>
                <ChapterPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/ramayana"
            element={
              <ProtectedRoute>
                <Ramayana />
              </ProtectedRoute>
            }
          />

          <Route
            path="/ask-ai"
            element={
              <ProtectedRoute>
                <AskAI />
              </ProtectedRoute>
            }
          />

          <Route
            path="/about"
            element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          <Route
  path="/ramayana/:kanda"
  element={<RamayanaKandaPage />}
/>



          <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>

<Route
  path="/ramayana/:kanda/:chapter/:verse"
  element={<RamayanaVersePage />}
/>

          <Route path="*" element={<PageNotFound />} />

        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;