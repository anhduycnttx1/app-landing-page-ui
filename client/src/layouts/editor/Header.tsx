import { Row, Space, Typography, Button, Layout } from 'antd'
const { Header } = Layout
const HeaderLayout = (): React.ReactElement => {
  return (
    <Header
      style={{
        backgroundColor: 'white',
        borderBottom: '1px solid rgb(203 213 225)',
        width: '100%',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        zIndex: 100,
        minWidth: 800,
      }}
    >
      <Row justify="space-between" align="middle">
        <Typography.Title level={4}>Page Builder</Typography.Title>
        <Space size="small">
          <Button type="text">Lưu</Button>
          <Button type="text">Xem trước</Button>
          <Button type="primary">Xuất bản</Button>
        </Space>
      </Row>
    </Header>
  )
}

export default HeaderLayout
