/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly X_API_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
