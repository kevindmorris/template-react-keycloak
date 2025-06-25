import type { KeycloakUser } from "@/lib";
import { authClient } from "@/lib";
import axios, { AxiosError, type AxiosInstance } from "axios";

export default class Api {
  private axios: AxiosInstance;

  constructor() {
    this.axios = axios.create({
      baseURL: `/auth`,
      headers: {
        Authorization: `Bearer ${authClient.token}`,
        "Content-Type": "application/json",
      },
    });
  }

  async getUsers(first = 0, max = 100): Promise<KeycloakUser[]> {
    try {
      return (
        await this.axios.get<KeycloakUser[]>("/admin/realms/template/users", {
          params: { first, max },
        })
      ).data;
    } catch (error) {
      const err = error as AxiosError;
      throw new Error(
        `Failed: ${err.response?.status} ${err.response?.statusText}`
      );
    }
  }
}
