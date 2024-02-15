import "./App.css";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./Infrastructure/Routing/AppRouter";
import { ThemeProvider } from "@mui/material";
import { getTheme } from "Infrastructure/Themes/Themes";
import i18n from "i18next";
import { CzechResourcesDictionary } from "Infrastructure/Translations/CzechResourcesDictionary";
import { initReactI18next } from "react-i18next";
import { z } from "zod";
import { zodI18nMap } from "zod-i18n-map";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const theme = getTheme();
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
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ThemeProvider theme={theme}>
        <RouterProvider router={appRouter} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
