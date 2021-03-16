import React, { createContext, useState } from 'react'
import classNames from 'classnames'

type SelectCallback = (selectIndex: number) => void
type MenuMode = 'vertical' | 'horizontal'  // 字符串字面量


export interface MenuProps {
  defaultIndex: number
  className?: string
  mode?: MenuMode
  style?: React.CSSProperties
  onSelect?: SelectCallback
}
interface IMenuContext {
  index: number
  onSelect?: SelectCallback
}
export const MenuContext = createContext<IMenuContext>({index: 0})

const Menu: React.FC<MenuProps> = (props) => {
  const {
    className,
    onSelect,
    mode = 'horizontal',
    defaultIndex = 0,
    children,
    style
  } = props
  const [currentActive, setActive] = useState(defaultIndex)
  const classes = classNames('ming-menu', className, {
    [`menu-${mode}`]: mode
  })
  const handleClick = (index: number) => {
    setActive(index)
    if (onSelect) {
      onSelect(index)
    }
  }
  const passContext: IMenuContext = {
    index: currentActive,
    onSelect: handleClick
  }
  return (
    <ul className={classes} style={style}>
      <MenuContext.Provider value={passContext}>
        { children }
      </MenuContext.Provider>
    </ul>
  )
}

export default Menu