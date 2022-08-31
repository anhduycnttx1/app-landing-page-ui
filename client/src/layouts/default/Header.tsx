import { Row, Space, Image, Dropdown, Menu, Avatar, MenuProps, Layout } from 'antd'
import { IoColorWand, IoLanguage } from 'react-icons/io5'
import { menuAccount, menuLanguage } from '../../commons/constants'

const menu = (items: MenuProps['items']) => <Menu className="px-2 min-w-[150px]" items={items} />

const HeaderLayout = (): React.ReactElement => {
  const urlLogo = 'https://cdn-icons-png.flaticon.com/512/5240/5240868.png'
  const user = 'Serati Maf'
  const urlAvt = 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png'
  return (
    <Layout.Header
      style={{
        // borderBottom: '1px solid rgb(203 213 225)',
        width: '100%',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        zIndex: 100,
        minWidth: 800,
      }}
    >
      <Row className="h-16 text-white shadow" justify="space-between" align="middle">
        <Space className="logo" align="center">
          <Image preview={false} width={30} src={urlLogo} alt="logo" />
          <span className="block text-lg font-bold">Landing Pages</span>
        </Space>

        <Space align="center" size="large">
          {/* Change Setting Account */}
          <Dropdown overlay={menu(menuAccount)} placement="bottomCenter">
            <Space size={10} className="cursor-pointer ">
              <Avatar size={25} src={urlAvt} />
              <span>{user}</span>
            </Space>
          </Dropdown>
        </Space>
      </Row>
    </Layout.Header>
  )
}

export default HeaderLayout
