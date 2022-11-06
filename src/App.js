import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppContextProvider } from "./components/contexts/AppContext";
import Loader from "./components/UI/atoms/Loader";
import DetailsView from "./components/views/DetailsView"
import ListView from "./components/views/ListView"

// const ListView = React.lazy(() => import("./components/views/ListView"))
// const DetailsView = React.lazy(() => import("./components/views/DetailsView"))

function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='/details/:title' element={<DetailsView />} />
            <Route path='/' element={<ListView />} />
          </Routes>
        </Suspense>
      </AppContextProvider>
    </BrowserRouter>

  );
}

export default App;
