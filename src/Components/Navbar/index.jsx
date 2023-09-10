import { HeartOutlined, SmileOutlined, LogoutOutlined } from "@ant-design/icons"
import { PageContainer, ProConfigProvider, ProLayout } from "@ant-design/pro-components"
import { ConfigProvider } from 'antd';
import React, { useEffect, useState } from 'react'
import Loader from "../Loader/index.jsx";
import { Link, useNavigate } from "react-router-dom";
import HoverButton from "../HoverButton/index.jsx";
import LoginInfo from "../LoginInfo/index.jsx";
import {
  Button,
  Divider,
  Dropdown,
  Input,
  Popover,
  theme,
} from 'antd';
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { NotificationType } from "../../utils/const.jsx";
import { disconnectSocket } from "../../utils/socket.jsx";
const IconMap = {
  smile: <SmileOutlined />,
  heart: <HeartOutlined />
}

let Menu = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/play',
    name: 'Play',

    routes: [
      {
        path: '/multi-player',
        name: 'multi Player',

      },
      {
        path: '/custom-room ',
        name: 'Play With Friend',

      },
      {
        path: '/single-player',
        name: 'Single Player',

      },
    ],
  },
  {
    path: '/top',
    name: 'Top Players',

  },
  {
    path: '/learn-chess',
    name: 'Learn Chess',

  },
  {
    path: '/support',
    name: 'Support',

  },

];

export default function Navbar({ route, component: Component }) {
  let userInfo = useSelector((state) => state.userInfo);
  let fail = useSelector((state) => state.fail)
  let dispatch = useDispatch()
  const [colsaped, setcolsaped] = useState(true)
  const [user, setuser] = useState({})
  const [token, settoken] = useState(localStorage.getItem('token'))
  const [loader, setloader] = useState(true)
  useEffect(() => {
    if (!token || userInfo.error) {
      handleNevi('/auth')
    }
    dispatch({ type: 'req@auth:userInfo', payload: { token } })
  }, []);

  useEffect(() => {
    if (userInfo.error ?? true) {
      disconnectSocket()
      handleNevi('/auth')
    }
    setuser({...userInfo})
    setloader(userInfo.isLoading)
  }, [userInfo])

  useEffect(() => {
    if (!fail.error) return
    if (fail.msg == NotificationType.FAIL.PLAYER_NOT_FOUND)
      handleNevi('/auth')
    if (fail.msg == NotificationType.FAIL.PLAYER_IS_OFFLINE)
      handleNevi('/play')
  }, [fail])

  let nevi = useNavigate()
  let handleNevi = (filePath) => {
    nevi(filePath)
  }
  const loopMenuItem = menus =>
    menus.map(({ icon, routes, ...item }) => ({
      ...item,
      icon: icon && IconMap[icon],
      children: routes && loopMenuItem(routes),
    }))

  function handleItemRender(item, dom) {
    let blockPerent = (prop) => prop?.some(ele => Array.isArray(ele?.children) && blockPerent(ele.children) || ele.path === route);
    return (
      <div className={route !== item.path && !blockPerent(item.children)
        ? "button-hover" : "selected-hover"} onClick={() => { handleNevi(item.path) }}>
        {dom}
      </div>
    )
  }
  function handleDropDownOpt(ele) {
    localStorage.removeItem('token')
    window.location.reload();
    // handleNevi(ele.key)
  }

  return (

    <>
      {loader ? <Loader /> :
        <ProConfigProvider token={{
          layout: {
            colorBgAppListIconHover: 'none'
          }
        }}  >
          <ProLayout
            location={{
              pathname: route
            }}
            menu={{ request: async (ele) => loopMenuItem(Menu), autoClose: true }}
            pageTitleRender={false}
            subMenuItemRender={handleItemRender}
            menuItemRender={handleItemRender}
            collapsed={colsaped}
            onCollapse={e => setcolsaped(!colsaped)}
            onPageChange={e => setcolsaped(true)}
            avatarProps={{
              src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
              size: 'small',
              title: user?.username || 'Guest',
              render: (props, dom) => {
                return (
                  <Dropdown
                    menu={{
                      items: [
                        {
                          key: '/logout',
                          icon: <LogoutOutlined />,
                          label: 'Log Out',
                          danger: true
                        },
                      ],
                      selectable: true,
                      onSelect: handleDropDownOpt
                    }}
                  >
                    {dom}
                  </Dropdown>
                );
              },
              onClick: (e) => { console.log('this is click', e) }
            }}
            title={false}
            logo={< img src={require('../../assets/logos/Logo (2).png')} />}
            layout={'top'}
            style={{
              paddingLeft: "10px",
              paddingRight: "10px"
            }}
            token={{
              // bgLayout: '#051028',
              header: {
                colorBgMenuItemHover: "none",
                colorTextMenu: 'black',
                colorBgMenuItemSelected: 'rgba(121, 80, 149, 1)',
                colorTextMenuSelected: "white",
              },
              sider: {
                colorBgMenuItemHover: "none",
                colorTextMenu: 'black',
                colorBgMenuItemSelected: 'rgba(121, 80, 149, 1)',
                colorTextMenuItemHover: 'black',
              }
            }}

          >
            <PageContainer style={{ maxHeight: '100%' }} >
              <React.Suspense fallback={<Loader />}>
                <Component />
              </React.Suspense>
            </PageContainer>
          </ProLayout >

        </ProConfigProvider >
      }
    </>





  )
}




// {
//   "navTheme": "light",
//   "layout": "side",
//   "contentWidth": "Fluid",
//   "fixedHeader": false,
//   "fixSiderbar": true,
//   "colorPrimary": "#1677FF",
//   "splitMenus": false
// }