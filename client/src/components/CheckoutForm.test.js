  
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);
});

test("form shows success message on submit with form details", async () => {
  render(<CheckoutForm />);
  /// query for diff inputs

  const firstName = screen.getByLabelText(/first name:/i);
  const lastName = screen.getByLabelText(/last name:/i);
  const address = screen.getByLabelText(/Address:/i);
  const city = screen.getByLabelText(/City:/i);
  const state = screen.getByLabelText(/State:/i);
  const zip = screen.getByLabelText(/Zip:/i);
  const submitBtn = screen.getByRole("button", { name: /Checkout/i });

  // fill out the inputs
  fireEvent.change(firstName, { target: { value: "Hammed" } });

  fireEvent.change(lastName, { target: { value: "Azeez" } });

  fireEvent.change(address, { target: { value: "123 park ave" } });

  fireEvent.change(city, { target: { value: "Yonkers" } });

  fireEvent.change(state, { target: { value: "NY" } });

  fireEvent.change(zip, { target: { value: "10705" } });

  // query for submit button/////

  // on submit click button

  fireEvent.click(submitBtn);

  // assert that the success message has posted

  expect(await screen.findByTestId("successMessage")).toBeInTheDocument();
});