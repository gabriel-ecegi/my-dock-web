import "./App.css";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./Pages/Routing/AppRouter";
import { ThemeProvider } from "@mui/material";
import { getTheme } from "Components/Layout/Themes/Themes";
import i18n from "i18next";
import { CzechResourcesDictionary } from "Translations/CzechResourcesDictionary";
import { initReactI18next } from "react-i18next";
import { z } from "zod";
const theme = getTheme();
import { zodI18nMap } from "zod-i18n-map";

i18n.use(initReactI18next).init({
  resources: {
    cs: CzechResourcesDictionary,
  },
  lng: "cs",
  fallbackLng: "cs",
  interpolation: {
    escapeValue: false,
  },
});

z.setErrorMap(zodI18nMap);

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterProvider router={appRouter} />
      </ThemeProvider>
    </>
  );
}

export default App;
