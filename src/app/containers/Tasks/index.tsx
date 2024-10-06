import React, { useEffect, useState } from 'react';
import {
  Button,
  Card,
  Checkbox,
  Flex,
  Form,
  Input,
  Layout,
  Select,
  Table,
  Typography,
  message,
} from 'antd';
import { useRequest } from 'ahooks';
import { addTask, updateTask } from '../../services/task';
import { getQueryParams, updateQueryParams } from '../../../utils/url';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from './slice';
import { selectTasks } from './selectors ';

const { Content } = Layout;
const { Title } = Typography;

const Tasks: React.FC = () => {
  const dispatch = useDispatch();
  const {
    tasks,
    filter: taskFilter,
    listTaskLoading,
  } = useSelector(selectTasks);
  const { status } = getQueryParams();
  const [isRefetch, setIsRefetch] = useState<boolean>(true);
  const [filter, setFilter] = useState<string>(
    (status as string) || taskFilter
  );
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const { run: addNewTask, loading } = useRequest(addTask, {
    manual: true,
    onSuccess: () => {
      setIsRefetch(true);
      form.resetFields();
      messageApi.success('Add task successfully');
    },
    onError: () => {
      messageApi.error('Add task failed');
    },
  });

  const { run: updateTaskStatus } = useRequest(updateTask, {
    manual: true,
    onSuccess: () => {
      setIsRefetch(true);
      messageApi.success('Update task status successfully');
    },
    onError: () => {
      messageApi.error('Update task status failed');
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

  // const {
  //   run: getListTasks,
  //   loading: listLoading,
  //   data: tasks,
  // } = useRequest(getTasks);

  useEffect(() => {
    if (isRefetch) {
      dispatch(actions.fetchTasks(filter));
      setIsRefetch(false);
    }
  }, [isRefetch, dispatch, filter]);
  return (
    <Content style={{ padding: '24px', minHeight: 280 }}>
      {contextHolder}
      <Title level={2} style={{ marginTop: 0 }}>
        Task Management
      </Title>
      <Card bordered={false}>
        <Title level={3}>Add New Task</Title>
        <Form form={form} onFinish={onFinish} size="large">
          <Form.Item
            name="name"
            rules={[{ required: true, message: 'Please input the task name!' }]}
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
      </Card>
      <Card bordered={false} style={{ marginTop: 20 }}>
        <Flex justify="space-between" align="center">
          <Title level={2} style={{ marginTop: 0 }}>
            Tasks
          </Title>
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
        </Flex>
        <CardTableWrapper>
          <Table
            dataSource={tasks}
            columns={columns}
            loading={listTaskLoading}
            rowKey="id"
          />
        </CardTableWrapper>
      </Card>
    </Content>
  );
};

export default Tasks;

const CardTableWrapper = styled(Card)`
  .ant-card-body {
    padding: 0;
  }
`;
