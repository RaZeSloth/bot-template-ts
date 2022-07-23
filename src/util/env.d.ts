/* eslint-disable */ 
declare global {
  namespace NodeJS {
      interface ProcessEnv {
        token: string;
        testGuild?: string;
      }
  }
}

export {}