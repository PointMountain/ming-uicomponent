# Ming UIComponent
`create-react-app ming-uicomponent --template --typescript`

# jest使用
- `import { fireEvent, render } from '@testing-library/react'`
- 通过`render(<Component></Component>)`可以创建一个组件 进行测试
- 通过在src根目录下创建`setupTests.ts`里面引入`import '@testing-library/jest-dom/extend-expect'`即可在单元测试中使用jest-dom中对dom的操作语法
- 通过`jest.fn()`可以创建一个mock事件，通过`fireEvent`可以触发测试dom上的事件
