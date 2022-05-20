/* eslint-disable */ 
declare global {
  namespace NodeJS {
      interface ProcessEnv {
        token: string;
        prefix: string;
      }
  }
}

export {}