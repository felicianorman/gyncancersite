export interface Register {
  firstName: string;
  lastName: string;
  age: number;
  region: string;
  role: Role;
  email: string;
}

export enum Role {
  Drabbad = 'Drabbad',
  Närstående = 'Närstående',
  Stödmedlem = 'Stödmedlem',
}
