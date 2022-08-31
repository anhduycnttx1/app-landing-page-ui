import { Button, Dropdown, Input, Menu, Row, Select, Space, Typography, Image } from 'antd'
import React from 'react'
import { PlusOutlined, SearchOutlined, SmileOutlined } from '@ant-design/icons'
import TableLadiPages from './table-page-panel'
const { Title, Text } = Typography
const { Option } = Select
type PropsHomeContainer = {}

const menuNewLadi = (
  <Menu
    className="max-w-[400px] px-5 py-2"
    items={[
      {
        key: '1',
        label: (
          <Space align="center" size="large">
            <Image
              width={35}
              preview={false}
              src="https://cdn-icons-png.flaticon.com/512/1324/1324930.png"
              alt="menu-1"
            />
            <div>
              <Title level={5}>Sử dụng giao diện mẫu</Title>
              <Text>Sử dụng các giao diện đã có trong thư viện của chúng tôi</Text>
            </div>
          </Space>
        ),
      },
      {
        key: '2',
        label: (
          <Space align="center" size="large">
            <Image
              width={35}
              preview={false}
              src="https://cdn-icons-png.flaticon.com/512/227/227066.png"
              alt="menu-2"
            />
            <div>
              <Title level={5}>Sử dụng trang mới</Title>
              <Text>Tự thiết kế LadingPage theo ý tưởng của bạn</Text>
            </div>
          </Space>
        ),
      },
    ]}
  />
)

const HomeContainer = (props: PropsHomeContainer) => {
  const columns = [
    {
      title: 'Tên Trang',
      dataIndex: 'title',
      key: 'name',
      width: 650,
      render: (text: string) => (
        <Space direction="vertical" size={2}>
          <span className="font-medium cursor-default">{text}</span>
          <a>http://ldp.page/630f80df3ee1b50021d4b44d</a>
        </Space>
      ),
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      width: 200,
      render: (item: boolean, record: any) => (
        <Space direction="vertical" size={1}>
          <Space align="baseline">
            <span
              className={`relative inline-flex w-2 h-2 rounded-full ${item ? 'bg-green-400' : 'bg-gray-300'}  `}
            ></span>
            <span>{item ? 'Hoạt động' : 'Tạm dừng'}</span>
          </Space>
          <span className="text-xs opacity-70">{record.updateAt}</span>
        </Space>
      ),
    },

    {
      title: 'Hành động',
      key: 'action',
      width: 200,
      render: (_: any, record: any) => (
        <Space size={1}>
          <Button type="link" className="inline">
            Cập nhật
          </Button>
          <Button type="link" disabled={!record.status}>
            Xem trước
          </Button>
        </Space>
      ),
    },
  ]

  const datas = [
    {
      key: 1,
      title: 'Trang bán hàng',
      status: true,
      updateAt: '09:02 01/09/2022',
    },
    {
      key: 2,
      title: 'Test',
      status: false,
      updateAt: '14:23 31/09/2022',
    },
  ]
  const handleChange = (value: string) => {
    console.log(`selected ${value}`)
  }
  return (
    <Space direction="vertical" className="w-full p-8 bg-white shadow-sm min-h-[456px]">
      <Row justify="space-between">
        <Title level={4}>Danh sách Landing Page</Title>
        <Dropdown overlay={menuNewLadi}>
          <Button type="primary" icon={<PlusOutlined />}>
            Tạo Landing Page
          </Button>
        </Dropdown>
      </Row>
      <Space size="large">
        <Input
          placeholder="Tìm kiếm"
          style={{ width: 300 }}
          suffix={
            <SearchOutlined
              style={{
                fontSize: 16,
                color: '#bfbfbf',
              }}
            />
          }
        />
        <Select defaultValue="all" style={{ width: 200 }} onChange={handleChange}>
          <Option value="all">Tất cả</Option>
          <Option value="active">Đang hoạt động</Option>
          <Option value="disabled">Tạm dừng</Option>
          <Option value="clear">Đã xoá</Option>
        </Select>
      </Space>
      <TableLadiPages columns={columns} datas={datas} />
    </Space>
  )
}

export default HomeContainer
