import React from "react";
import {render, fireEvent, getByLabelText } from '@testing-library/react';
import TodoList from "./TodoList"


// SMOKE TEST 
it('render without crashing', () => {
    render(<TodoList />);
});

// SNAPSHOT TEST 
it('it matches snapshot', () =>{
    const {asFragment } = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
})