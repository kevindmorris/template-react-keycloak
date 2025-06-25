import { Api, type KeycloakUser } from "@/lib";
import { useKeycloak } from "@react-keycloak/web";
import moment from "moment";
import React from "react";

export default function Page() {
  const api = new Api();
  const { keycloak } = useKeycloak();

  const [users, setUsers] = React.useState<KeycloakUser[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    (async () => {
      if (!keycloak.authenticated) return;

      try {
        setLoading(true);
        setUsers(await api.getUsers());
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    })();
  }, [keycloak.authenticated]);

  return (
    <div>
      <h1>Users</h1>
      <hr />
      {!keycloak.authenticated ? (
        <p>Please log in to view users.</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              Username: <strong>{user.username}</strong>
              <br />
              First Name: {user.firstName}
              <br />
              Last Name: {user.lastName}
              <br />
              Email: {user.email}
              <br />
              Created: {moment(user.createdTimestamp).format("LLLL")}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
