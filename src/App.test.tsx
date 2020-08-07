import React from "react";
import App, { useTodos } from "./App";
import { configure, shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import TodoCreator from "./components/TodoCreator";
import { TodoHeader } from "./components/TodoHeader";
import { TodoList } from "./components/TodoList";

configure({ adapter: new EnzymeAdapter() });

describe("App", () => { 
  describe("TodoHeader", () => {
    it("count pending tasks to do", () => {
      const todos: Array<Todo> = [
        { name: "read a book", done: true },
        { name: "to make dinner", done: false }
      ];
      const wrapper = shallow(<TodoHeader todos={todos} />);
      expect(wrapper.find("h6").text().includes("1")).toEqual(true);
    });
  });

  describe("TodoCreator", () => {
    it("addTodo when form contain a new value", () => {
      const addTodo = jest.fn();
      const prevent = jest.fn();
      const mockNewTodo = "new task";
      const wrapper = shallow(<TodoCreator addTodo={addTodo} />);
      wrapper
        .find("input")
        .simulate("change", { target: { value: mockNewTodo } });
      wrapper.find("form").simulate("submit", { preventDefault: prevent });

      expect(addTodo.mock.calls).toEqual([[mockNewTodo]]);
      expect(prevent.mock.calls).toEqual([[]]);
    });
  });

  describe("TodoList", () => {
    it("list tasks already done and to do", () => {
      const todos: Array<Todo> = [
        { name: "read a book", done: true }
      ];
      const toggleDone = jest.fn()
      const removeTodo = jest.fn()
      const wrapper = shallow(
        <TodoList 
          todos={todos}
          toggleDone={toggleDone}
          removeTodo={removeTodo}
        />);
      const response = wrapper.find(".table-default").at(0).text().includes(todos[0].name)
      
      expect(response).toEqual(true)
    });
  });

  describe("custom hook: useTodos", () => {
    it("addTodo", () => {
      const Test = (props: any) => {
        const hook = props.hook();
        return <div {...hook} />;
      };
      const mockNewTodo = "new task";
      const wrapper = shallow(<Test hook={useTodos} />);
      let props: any = wrapper.find("div").props();
      props.addTodo(mockNewTodo);
      props = wrapper.find("div").props();
      expect(props.todos[2].name).toEqual(mockNewTodo);
    });

    it("toggleDone", () => {
      const Test = (props: any) => {
        const hook = props.hook();
        return <div {...hook} />;
      };
      const wrapper = shallow(<Test hook={useTodos} />);
      let props: any = wrapper.find("div").props();
      props.toggleDone(1);
      props = wrapper.find("div").props();
      expect(props.todos[1].done).toEqual(true);
    });

  });
});
