"use client";

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { emptyDraft, type RegistrationDraft } from "./model";

const STORAGE_KEY = "poorna-registration-v1";

type RegistrationContextValue = {
  draft: RegistrationDraft;
  ready: boolean;
  saved: boolean;
  update: (patch: Partial<RegistrationDraft>) => void;
};

const RegistrationContext = createContext<RegistrationContextValue | null>(null);

export function RegistrationProvider({ children }: { children: ReactNode }) {
  const [draft, setDraft] = useState<RegistrationDraft>(emptyDraft);
  const [ready, setReady] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    let active = true;
    queueMicrotask(() => {
      if (!active) return;
      try {
        const raw = sessionStorage.getItem(STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw) as Partial<RegistrationDraft>;
          setDraft({ ...emptyDraft, ...parsed });
          setSaved(true);
        }
      } catch {
        sessionStorage.removeItem(STORAGE_KEY);
      }
      setReady(true);
    });
    return () => {
      active = false;
    };
  }, []);

  const update = useCallback((patch: Partial<RegistrationDraft>) => {
    setDraft((current) => {
      const next = { ...current, ...patch };
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
    setSaved(true);
  }, []);

  return (
    <RegistrationContext.Provider value={{ draft, ready, saved, update }}>
      {children}
    </RegistrationContext.Provider>
  );
}

export function useRegistration() {
  const value = useContext(RegistrationContext);
  if (!value) {
    throw new Error("Registration steps must render inside the registration layout.");
  }
  return value;
}
