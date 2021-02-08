import {
  fireEvent,
  render,
  screen
} from "@testing-library/react";
import App from "./App";

const CONST = {
  TODO1: "make pbj sandwich"
};

function createTodo() {
  // type in name
  const createInputEl = screen.getByLabelText(
    /create new todo/i
  );
  fireEvent.change(createInputEl, {
    target: { value: CONST.TODO1 }
  });
  // click create button
  const createButtonEl = screen.getByText(
    /save/i
  );
  fireEvent.click(createButtonEl);
}

function completeTodo() {
  const completeCheckboxEl = screen.getByTitle(
    `complete: ${CONST.TODO1}`
  );
  fireEvent.click(
    completeCheckboxEl,
    {}
  );
}

function deleteTodo() {
  // this could be hard to test with lots of todos
  // const deleteButtonEl = screen.getByText(/delete/i);
  const deleteButtonEl = screen.getByTitle(
    `delete: ${CONST.TODO1}`
  );
  fireEvent.click(deleteButtonEl, {});
}

test("create a todo", () => {
  // arrange
  render(<App />);

  // act
  createTodo();
  const todoEl = screen.getByText(
    CONST.TODO1
  );

  // assert
  expect(todoEl).toBeInTheDocument();
});

test("complete a todo", () => {
  // arrange
  render(<App />);

  // act
  createTodo();
  completeTodo();
  const comletedCheckboxEl = screen.getByLabelText(
    `COMPLETED: ${CONST.TODO1}`
  );

  // assert
  expect(
    comletedCheckboxEl
  ).toBeInTheDocument();
});

test("delete a todo", () => {
  // arrange
  render(<App />);

  // act
  createTodo();
  deleteTodo();
  const todoEl = screen.queryByText(
    CONST.TODO1
  );

  // assert
  expect(todoEl).toBeNull(); // not in the document
});
