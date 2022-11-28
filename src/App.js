import publicRouter from "./routes/PublicRouter";
import NotFound from "./layout/NotFound";
import { Routes, useNavigate, Route } from "react-router-dom";

const App = () => {
  let navigate = useNavigate();

  const handleNavigate = (link) => {
    navigate(link);
  };

  return (
    <>
      <Routes>
        {publicRouter(handleNavigate)}
        <Route
          path="*"
          element={<NotFound handleNavigate={handleNavigate} />}
        />
      </Routes>
    </>
  );
};

export default App;
