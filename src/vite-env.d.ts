/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_BASE_WEB_SOCKET_URL: string;
    readonly VITE_BASE_WEB_SOCKET_ENABLED: boolean;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }