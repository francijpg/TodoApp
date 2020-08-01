import React from "react";
import { shallow, configure } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import TodoCreator from "./components/TodoCreator";
configure({ adapter: new EnzymeAdapter() });

describe("App", () => {
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
});
