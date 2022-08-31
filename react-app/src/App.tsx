import { createContext, useContext } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";
import Home from "./pages/Home";

interface IAppContext {}
const AppContext = createContext<IAppContext>({});

export const useAppContext = () => useContext(AppContext);
const App = () => {
  return (
    <BrowserRouter>
      <AppContext.Provider value={{}}>
        <Routes>
          <Route path="/" element={<BaseLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </AppContext.Provider>
    </BrowserRouter>
  );
};

export default App;
