declare namespace NodeJS {
  interface ProcessEnv {
    readonly GOOGLE_LOGIN_SECRET: string | undefined;
    readonly GOOGLE_LOGIN_ID: string | undefined;
  }
}
