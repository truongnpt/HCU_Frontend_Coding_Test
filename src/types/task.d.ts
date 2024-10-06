declare module Task {
  type Item = {
    id?: number | string;
    name?: string;
    status?: 'completed' | 'incomplete';
  };

  type TaskState = {
    tasks: Task.Item[];
    createTaskLoading: boolean;
    updateTaskLoading: boolean;
    listTaskLoading: boolean;
    error: string | null;
    form: Task.Item | null;
    filter: string;
  };
}
