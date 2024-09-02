"use client";

import ThemeService from "@/shared/services/theme/theme.service";
import ThemeSvcContext from "@/shared/services/theme/theme.context";
import { ReactNode } from "react";
import appStorage from "@/shared/app-storage/app-storage";

const themeSvc = new ThemeService(appStorage);

type ContextComponentProps = {
  children: ReactNode;
};

export default function ContextComponent({ children }: ContextComponentProps) {
  return (
    <ThemeSvcContext.Provider value={themeSvc}>
      {children}
    </ThemeSvcContext.Provider>
  );
}
