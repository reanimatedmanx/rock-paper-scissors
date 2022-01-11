import { render, screen } from './../test-utils';
import App from './App';

test('Renders app layout', () => {
   render(<App />);

   const headerComponent = screen.getByTestId('Header');
   expect(headerComponent).toBeInTheDocument();

   const playgroundComponent = screen.getByTestId('Playground');
   expect(playgroundComponent).toBeInTheDocument();

   const footerComponent = screen.getByTestId('Footer');
   expect(footerComponent).toBeInTheDocument();

   const wrapperComponent = screen.getByTestId('Wrapper');
   expect(wrapperComponent).toBeInTheDocument();
   expect(wrapperComponent).toContainElement(headerComponent);
   expect(wrapperComponent).toContainElement(playgroundComponent);
   expect(wrapperComponent).toContainElement(footerComponent);
});
