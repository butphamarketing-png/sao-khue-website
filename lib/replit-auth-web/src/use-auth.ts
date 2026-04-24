import { useState, useEffect, useCallback } from "react";
import type { AuthUser } from "@workspace/api-client-react";

export type { AuthUser };

const LOCAL_DEV_AUTH_KEY = "sao-khue-local-dev-auth-user";

function isLocalDevHost(): boolean {
  if (typeof window === "undefined") return false;
  return (
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1"
  );
}

function readLocalDevUser(): AuthUser | null {
  if (!isLocalDevHost() || typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(LOCAL_DEV_AUTH_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as AuthUser;
  } catch {
    return null;
  }
}

function writeLocalDevUser(user: AuthUser | null): void {
  if (!isLocalDevHost() || typeof window === "undefined") return;

  if (!user) {
    window.localStorage.removeItem(LOCAL_DEV_AUTH_KEY);
    return;
  }

  window.localStorage.setItem(LOCAL_DEV_AUTH_KEY, JSON.stringify(user));
}

interface AuthState {
  user: AuthUser | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

export function useAuth(): AuthState {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    fetch("/api/auth/user", { credentials: "include" })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json() as Promise<{ user: AuthUser | null }>;
      })
      .then((data) => {
        if (!cancelled) {
          setUser(data.user ?? null);
          setIsLoading(false);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setUser(readLocalDevUser());
          setIsLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const login = useCallback(() => {
    if (isLocalDevHost()) {
      const localUser: AuthUser = {
        id: "local-dev-admin",
        email: "admin@localhost",
        firstName: "Local",
        lastName: "Admin",
        profileImageUrl: null,
      };
      writeLocalDevUser(localUser);
      setUser(localUser);
      setIsLoading(false);
      return;
    }

    const base = import.meta.env.BASE_URL.replace(/\/+$/, "") || "/";
    window.location.href = `/api/login?returnTo=${encodeURIComponent(base)}`;
  }, []);

  const logout = useCallback(() => {
    if (isLocalDevHost()) {
      writeLocalDevUser(null);
      setUser(null);
      setIsLoading(false);
      return;
    }

    window.location.href = "/api/logout";
  }, []);

  return {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    logout,
  };
}
