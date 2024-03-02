import { Suspense, lazy, useEffect, useState } from "react";
// import WholeApp from "WholeApp";

const ClientsTableModule = lazy(
  () => import("./Clients/Infrastructure/ExportedModules/ClientsTableModule")
);

const WholeApp = lazy(() => import("./WholeApp"));

type Module = "ClientsModule" | null;

function App() {
  const [module, setModule] = useState<Module>(null);

  useEffect(() => {
    const rootElement = document.getElementById("root");
    const dataModule = rootElement?.getAttribute("data-module") as Module;

    setModule(dataModule);
  }, []);

  return (
    <Suspense>
      {module === "ClientsModule" && <ClientsTableModule />}
      {module === null && <WholeApp />}
    </Suspense>
  );
}

export default App;
