import React from 'react'
import Button, { ButtonType, ButtonSize } from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'

const App: React.FC = () => {
  return (
    <div className="App">
      <Menu defaultIndex={0} mode={'vertical'}>
        <MenuItem index={0}>
          cool link
        </MenuItem>
        <MenuItem index={1} disabled>
          cool link1
        </MenuItem>
        <MenuItem index={2}>
          cool link2
        </MenuItem>
      </Menu>
      <Button className="tst" disabled> Hello </Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Small}> Hello </Button>
      <Button> Hello </Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}> Hello </Button>
      <Button btnType={ButtonType.Link} href='http://www.baidu.com'> Baidu Link </Button>
      <Button btnType={ButtonType.Link} href='http://www.baidu.com' disabled> Baidu Link </Button>
    </div>
  )
}
export default App
