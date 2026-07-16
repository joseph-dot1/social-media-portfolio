"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Persona = "brand" | "recruiter";

interface PersonaContextValue {
  persona: Persona;
  setPersona: (p: Persona) => void;
}

const PersonaContext = createContext<PersonaContextValue>({
  persona: "brand",
  setPersona: () => {},
});

const STORAGE_KEY = "persona";

function readInitial(): Persona | null {
  const param = new URLSearchParams(window.location.search).get("for");
  if (param === "recruiters" || param === "recruiter") return "recruiter";
  if (param === "brands" || param === "brand") return "brand";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "brand" || stored === "recruiter") return stored;
  return null;
}

export function PersonaProvider({ children }: { children: ReactNode }) {
  // SSR renders the "brand" view; ?for= or localStorage may swap it on mount.
  const [persona, setPersonaState] = useState<Persona>("brand");

  useEffect(() => {
    const initial = readInitial();
    if (initial) setPersonaState(initial);
  }, []);

  const setPersona = useCallback((p: Persona) => {
    setPersonaState(p);
    try {
      window.localStorage.setItem(STORAGE_KEY, p);
    } catch {
      // private mode — persona just won't persist
    }
  }, []);

  return (
    <PersonaContext.Provider value={{ persona, setPersona }}>
      {children}
    </PersonaContext.Provider>
  );
}

export function usePersona() {
  return useContext(PersonaContext);
}
