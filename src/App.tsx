import React from 'react'
import Button, { ButtonType, ButtonSize } from './components/Button/button'

const App: React.FC = () => {
  return (
    <div className="App">
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
