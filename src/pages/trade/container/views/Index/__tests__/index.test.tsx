import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { BrowserRouter } from 'react-router-dom';
import Index from "../index";

describe("Index", () => {
  test("抓取快照", () => {
    // 创建模拟的 store
    const mockStore = configureStore();
    const initialState = {counter: {
      value: 1
    } }; // 根据你的需求设置初始状态
    const store = mockStore(initialState);

    // 使用 Provider 包裹你的组件
    const { baseElement } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Index />
        </BrowserRouter>
      </Provider>
    );

    expect(baseElement).toMatchSnapshot();
  });
});
