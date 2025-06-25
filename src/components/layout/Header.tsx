import { useKeycloak } from "@react-keycloak/web";
import { NavLink } from "react-router";

export default function Header() {
  const { keycloak } = useKeycloak();

  return (
    <header style={{ display: "flex", gap: 8 }}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/users">Users</NavLink>
      <div style={{ marginLeft: "auto" }}>
        {keycloak.authenticated ? (
          <button onClick={() => keycloak.logout()}>Sign Out</button>
        ) : (
          <button onClick={() => keycloak.login()}>Sign In</button>
        )}
      </div>
    </header>
  );
}
