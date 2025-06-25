import { authClient, router } from "@/lib";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import { RouterProvider } from "react-router";

function App() {
  return (
    <ReactKeycloakProvider
      authClient={authClient}
      LoadingComponent={<div>Loading...</div>}
    >
      <RouterProvider router={router} />
    </ReactKeycloakProvider>
  );
}

export default App;
