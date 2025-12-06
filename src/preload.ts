// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electron", {
  store: {
    get: (key: string) => ipcRenderer.invoke("electron-store-get", key),
    set: (key: string, val: any) => ipcRenderer.invoke("electron-store-set", key, val),
    delete: (key: string) => ipcRenderer.invoke("electron-store-delete", key),
  },
});
