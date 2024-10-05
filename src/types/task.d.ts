declare module Task {
  type Item = {
    id?: number | string;
    name?: string;
    status?: 'completed' | 'incomplete';
  };
}
