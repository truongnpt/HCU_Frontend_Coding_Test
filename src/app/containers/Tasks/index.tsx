import React, { useEffect, useState } from 'react';
import {
  Button,
  Card,
  Checkbox,
  Divider,
  Flex,
  Form,
  Input,
  Layout,
  Select,
  Table,
  Typography,
} from 'antd';
import { useRequest } from 'ahooks';
import { addTask, getTasks, updateTask } from '../../services/task';
import { getQueryParams, updateQueryParams } from '../../../utils/url';

const { Content } = Layout;
const { Title } = Typography;

const Tasks: React.FC = () => {
  const { status } = getQueryParams();
  const [isRefetch, setIsRefetch] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>((status as string) || '');
  const [form] = Form.useForm();
  const { run: addNewTask, loading } = useRequest(addTask, {
    manual: true,
    onSuccess: () => {
      setIsRefetch(true);
      form.resetFields();
    },
    onError: (error) => {
      console.error('Add new task failed:', error);
    },
  });

  const { run: updateTaskStatus } = useRequest(updateTask, {
    manual: true,
    onSuccess: () => {
      setIsRefetch(true);
    },
    onError: (error) => {
      console.error('Update task status failed:', error);
    },
  });
  const onFinish = async (values: Task.Item) => {
    addNewTask({
      name: values.name,
      status: 'incomplete',
    });
  };

  const handleChangeStatus = (task: Task.Item, value: boolean) => {
    updateTaskStatus({
      id: task.id,
      status: value ? 'completed' : 'incomplete',
    });
  };

  const filterOptions = [
    {
      label: 'All',
      value: '',
    },
    {
      label: 'Completed',
      value: 'completed',
    },
    {
      label: 'Incomplete',
      value: 'incomplete',
    },
  ];

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Task Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Completed',
      key: 'completed',
      render: (record: Task.Item) => (
        <Checkbox
          checked={record.status === 'completed'}
          onChange={(e) => handleChangeStatus(record, e.target.checked)}
        />
      ),
    },
  ];

  const handleChangeFilter = (value: string) => {
    setFilter(value);
    updateQueryParams({ status: value });
    setIsRefetch(true);
  };

  const {
    run: getListTasks,
    loading: listLoading,
    data: tasks,
  } = useRequest(getTasks);

  useEffect(() => {
    getListTasks(filter);
    setIsRefetch(false);
  }, [isRefetch]);
  return (
    <Content style={{ padding: '24px', minHeight: 280 }}>
      <Card>
        <Title level={2}>Tasks</Title>
        <Card>
          <Title level={3}>Add Task</Title>
          <Form form={form} onFinish={onFinish}>
            <Form.Item
              name="name"
              rules={[
                { required: true, message: 'Please input the task name!' },
              ]}
            >
              <Input placeholder="Task name" />
            </Form.Item>
            <Form.Item>
              <Flex gap={10}>
                <Button onClick={() => form.resetFields()}>Reset</Button>
                <Button type="primary" htmlType="submit" loading={loading}>
                  Add Task
                </Button>
              </Flex>
            </Form.Item>
          </Form>
          <Divider />
          <Flex gap={10} align="center" style={{ marginBottom: 10 }}>
            <Title level={4} style={{ margin: 0 }}>
              Filters
            </Title>
            <Select
              style={{ width: 200 }}
              placeholder="Select filter"
              options={filterOptions}
              value={filter}
              onChange={(value) => {
                handleChangeFilter(value);
              }}
            />
          </Flex>
          <Table
            dataSource={tasks}
            columns={columns}
            loading={listLoading}
            rowKey="id"
          />
        </Card>
      </Card>
    </Content>
  );
};

export default Tasks;
