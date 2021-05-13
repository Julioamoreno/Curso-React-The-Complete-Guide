import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting Component', () => {
	test('renders "Hello World" as a text', () => {
		// Arrange
		render(<Greeting />);

		// Act

		// Assert
		const helloWorldElement = screen.getByText('Hello World!');
		expect(helloWorldElement).toBeInTheDocument();
	});

	test('renders "good to see you" a text', () => {
		//Arrange
		render(<Greeting />);

		//act

		//Assert
		const goodToSeeYou = screen.getByText("It's good to see you!");
		expect(goodToSeeYou).toBeInTheDocument();
	});
	test('render "Changed!" if the button was clicked', () => {
		//Arrange
		render(<Greeting />);

		//act
		const buttonElement = screen.getByRole('button');
		userEvent.click(buttonElement);

		//Assert
		const ChangedElement = screen.getByText('Changed!', { exact: false });
		expect(ChangedElement).toBeInTheDocument();
	});
	test('does not render "good to see you" if the button was clicked', () => {
		//Arrange
		render(<Greeting />);

		//act
		const buttonElement = screen.getByRole('button');
		userEvent.click(buttonElement);

		//Assert
		const goodToSeeYou = screen.queryByText('good to see you', {
			exact: false,
		});
		expect(goodToSeeYou).toBeNull();
	});
});
