import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { Navbar, Footer, Sidebar, ThemeSettings,Startup } from "./components";
import {
  Customers,
   Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Kanban,
  Area,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
  Resume,
  Services,
  Line,
} from "./pages";

import { useStateContext } from "./contexts/ContextProvider";

import "./App.css";
import EventsRobot from "./pages/EventsRobot";
import Home from "./pages/Home";

function App() {
  const {
    activeMenu,
    themeSettings,
    setActiveMenu,
    setThemeSettings,
    currentColor,
    currentMode,
  } = useStateContext();
  // console.log("app.js", themeSettings);
  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Configurações" position="Top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{ background: currentColor, borderRadius: "50%" }}
                onClick={() => setThemeSettings(true)}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar /> w-0
            </div>
          )}
          <div
            className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? "md:ml-72" : "flex-2"
            }  `}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>
            <div>
              {themeSettings && <ThemeSettings />}
              <Routes>
                {/* Dahboards */}
                <Route path="/" element={<Home />} />
                {/* <Route path="/eappresume" element={<Resume />} /> */}

                {/* Pages */}
                {/* Criar Contacts, Startups, News e substituir */}
                {/* <Route path="/contatos" element={<Services />} />   */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/contatos" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/startups" element={<Home />} />
                <Route path="/events-robot" element={<EventsRobot />} />

                {/* Apps */}
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/color-Picker" element={<ColorPicker />} />

                {/* Charts */}
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />

                {/* outros */}
                <Route path="startup/:id" element={<Startup />}></Route>
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
