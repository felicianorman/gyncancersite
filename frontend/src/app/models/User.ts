export interface User {
  firstName: string;
  lastName: string;
  age: number;
  region: string;
  role: {
    drabbad: string;
    närståede: string;
    stödmedlem: string;
  };
  email: string;
}
