import { request } from '../../utils/request';

export const addTask = async (task: Task.Item): Promise<Task.Item[]> => {
  const response = await request('/tasks', {
    method: 'POST',
    body: task,
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const updateTask = async (task: Task.Item): Promise<Task.Item[]> => {
  const response = await request(`/tasks/${task.id}`, {
    method: 'PUT',
    body: task,
  });
  return response.json();
};

export const getTasks = async (filter: string): Promise<Task.Item[]> => {
  const response = await request(`/tasks?filter=${filter}`, {
    method: 'GET',
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};
