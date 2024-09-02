import { signal, type Signal } from "@preact/signals-react";

import STORAGE_KEYS from "@/static/storage.keys";
import { type AppStorage } from "@/shared/global/app-storage.model";

export enum THEMES {
  LIGHT = "light",
  DARK = "dark",
}

type ThemeSettings = {
  theme: Theme;
};
export type Theme = "light" | "dark";

export default class ThemeSettingsService {
  private theme: Signal<Theme> = signal(THEMES.LIGHT);

  constructor(private storage: AppStorage) {}

  init() {
    const settings = this.storage.get<ThemeSettings>(
      STORAGE_KEYS.themeSettings
    );

    if (settings) {
      this.theme.value = settings.theme;
    }

    document.querySelector("html")!.classList.add(this.theme.value);
  }

  save() {
    const settings: ThemeSettings = {
      theme: this.theme.value,
    };

    this.storage.set(STORAGE_KEYS.themeSettings, settings);
  }

  // *~~*~~*~~ svc api *~~*~~*~~ //

  toggleTheme() {
    const newTheme =
      this.theme.value === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
    const html = document.querySelector("html");

    html?.classList.replace(this.theme.value, newTheme);

    this.theme.value = newTheme;
    this.save();
  }

  getTheme() {
    return this.theme.value;
  }
}
