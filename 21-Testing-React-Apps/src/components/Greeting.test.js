import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Greeting from './Greeting';

//Test Suite
describe('>> Greeting component tests', () => {
  test('renders "Hello World" as a text', () => {
    //Arrange
    render(<Greeting />);

    //Act
    //...nothing

    //Assert
    const hwElement = screen.getByText('Hello World', { exact: false });
    expect(hwElement).toBeInTheDocument();
  });

  test('renders "It\'s good to see you!" as a text', () => {
    render(<Greeting />);
    const textElement = screen.getByText("It's good to see you!");
    expect(textElement).toBeInTheDocument();
  });

  test('renders "Oh you changed me!" as text instead of hello world message', () => {
    //Arrange
    render(<Greeting/>);

    //Act 
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);


    const changedParagraph = screen.getByText('Oh you changed me!');
    expect(changedParagraph).toBeInTheDocument();
  });

  test('does not render "It\'s good to see you" if the button was clicked', () => {
    //Arrange
    render(<Greeting/>);

    //Act 
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);


    const defaultParagraph = screen.queryByText('It\'s good to see you!');
    expect(defaultParagraph).toBeNull();
  });
});
