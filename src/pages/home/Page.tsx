import { useKeycloak } from "@react-keycloak/web";

export default function HomePage() {
  const { keycloak } = useKeycloak();

  return (
    <div>
      <h1>Home</h1>
      <hr />
      {keycloak.authenticated ? (
        <p>Welcome, {keycloak.tokenParsed?.given_name}!</p>
      ) : (
        <p>Welcome, please sign in for access!</p>
      )}
    </div>
  );
}
