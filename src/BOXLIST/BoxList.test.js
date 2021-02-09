import React from "react";
import {render } from '@testing-library/react';
import BoxList from "./BoxList"


// SMOKE TEST 
it('render without crashing', () => {
    render(<BoxList />);
});

// SNAPSHOT TEST 
it('it matches snapshot', () =>{
    const {asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
})


