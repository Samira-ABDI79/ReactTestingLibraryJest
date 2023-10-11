import {render,screen} from "@testing-library/react"
import Comment from "./Comment"

function RenderComponent(){
    const item = {
        name: 'John Doe',
        email: 'john@example.com',
        body: 'This is a comment.',
      };
      render(<Comment item={item} />)
      return { item };
}


test('Display values', () => { 
  const { item } = RenderComponent();

  for (let key in item) {
    const value = item[key];
    const element = screen.getByText(new RegExp(value));

    expect(element).toBeInTheDocument();
  }
  

 })