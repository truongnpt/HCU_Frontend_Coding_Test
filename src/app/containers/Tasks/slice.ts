import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const initialState: Task.TaskState = {
  form: null,
  tasks: [],
  createTaskLoading: false,
  updateTaskLoading: false,
  listTaskLoading: false,
  error: null,
  filter: '',
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    fetchTasks: (state, action: PayloadAction<any>) => {
      state.filter = action.payload;
      state.listTaskLoading = true;
      state.error = null;
    },
    fetchTasksSuccess: (state, action: PayloadAction<any>) => {
      state.listTaskLoading = false;
      state.tasks = action.payload;
    },
    fetchTasksFailure: (state, action) => {
      state.listTaskLoading = false;
      state.error = action.payload;
    },
    resetForm: (state) => {
      state.form = null;
    },
    resetState: (state) => {
      state.tasks = initialState.tasks;
      state.error = initialState.error;
      state.filter = initialState.filter;
      state.listTaskLoading = initialState.listTaskLoading;
      state.createTaskLoading = initialState.createTaskLoading;
      state.updateTaskLoading = initialState.updateTaskLoading;
    },
  },
});

export const { actions } = tasksSlice;
export default tasksSlice.reducer;
