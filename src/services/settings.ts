import { Store } from "@tauri-apps/plugin-store";

interface ISettings {
    appState: "new" | "old"
}
export default class Settings {
    private store: Store
    private settingsPath = "settings.dat"
    constructor() {
        this.store = new Store(this.settingsPath)
    }
    async appState(): Promise<ISettings['appState']> {
        const state = await this.store.get("appState") as any
        return state ? state : "new"
    }
}