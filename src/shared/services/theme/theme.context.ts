import appStorage from "@/shared/app-storage/app-storage";
import { createContext } from "react";
import ThemeSettingsService from "./theme.service";

const def = new ThemeSettingsService(appStorage);

const themeSettingsSvcContext = createContext<ThemeSettingsService>(def);

export default themeSettingsSvcContext;
