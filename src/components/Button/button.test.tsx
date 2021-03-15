import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import Button, { ButtonType, ButtonSize, ButtonProps } from './button'

const defaultProps: ButtonProps = {
  onClick: jest.fn() // 创建一个模拟点击事件
}

const testProps: ButtonProps = {
  size: ButtonSize.Large,
  btnType: ButtonType.Primary,
  className: 'klass'
}

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn()
}

describe('test Button component', () => {
  it('should render the correct default button', () => {
    const wrapper = render(<Button {...defaultProps}>Nice</Button>)
    const element = wrapper.getByText('Nice') as HTMLButtonElement // 使用getByText而不是 queryByText 因为queryByText返回的是联合类型HTMLElement | null，会导致下面element使用内部属性报错
    expect(element).toBeInTheDocument() // 判断是否存在于文档中
    expect(element.tagName).toEqual('BUTTON')
    expect(element).toHaveClass('btn btn-default')
    expect(element.disabled).toBeFalsy()
    fireEvent.click(element)
    expect(defaultProps.onClick).toHaveBeenCalled()
  })
  it('should render the correct component based on different props', () => {
    const wrapper = render(<Button {...testProps}>Nice</Button>)
    const element = wrapper.getByText('Nice')
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('btn-primary btn-lg klass')
  })
  it('shoule render a link when btnType equals link and href is provided', () => {
    const wrapper = render(<Button btnType={ButtonType.Link} href='http://www.baidu.com'>link</Button>)
    const element = wrapper.getByText('link')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('A')
    expect(element).toHaveClass('btn btn-link')
    expect(element).toHaveAttribute('href')
  })
  it('shoule render disabled button when disabled set to true', () => {
    const wrapper = render(<Button {...disabledProps}>Nice</Button>)
    const element = wrapper.getByText('Nice') as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element.disabled).toBeTruthy()
    fireEvent.click(element)
    expect(disabledProps.onClick).not.toHaveBeenCalled()
  })
})