import React from 'react'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'

const App: React.FC = () => {
  return (
    <div className="App">
      <Menu defaultIndex={'0'} mode='vertical' defaultOpenSubMenus={['3']}>
        <MenuItem>
          cool link
        </MenuItem>
        <MenuItem disabled>
          cool link1
        </MenuItem>
        <MenuItem>
          cool link2
        </MenuItem>
        <SubMenu title='dropdown'>
          <MenuItem>
            dropdown link1
          </MenuItem>
          <MenuItem>
            dropdown link2
          </MenuItem>
        </SubMenu>
      </Menu>
    </div>
  )
}
export default App
