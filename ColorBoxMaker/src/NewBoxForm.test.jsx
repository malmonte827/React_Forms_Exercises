import React from "react"
import NewBoxForm from "./NewBoxForm"

it("renders without crashing", function() {
    render(<NewBoxForm />);
  });
  
  it("matches snapshot", function() {
    const { asFragment } = render(<NewBoxForm />);
    expect(asFragment()).toMatchSnapshot();
  });