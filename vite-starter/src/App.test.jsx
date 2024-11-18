import { render, screen } from "@testing-library/react";
import { logRoles } from "@testing-library/react";
import App from "./App";

test("button start with correct color ", () => {
const {container} = render(<App />)
// logRoles(container)
const buttonElement = screen.getByRole('button',{name:/blue/i})
expect(buttonElement).toHaveClass('red')
});
