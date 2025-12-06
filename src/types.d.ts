export interface IElectronAPI {
  store: {
    get: (key: string) => Promise<any>;
    set: (key: string, val: any) => Promise<void>;
    delete: (key: string) => Promise<void>;
  };
}

declare global {
  interface Window {
    electron: IElectronAPI;
  }
}
