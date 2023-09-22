import {render} from "@testing-library/react";
import React from 'react';
import SyntaxHighlighter from "react-syntax-highlighter";

describe("Syntax Highlighter", () => {
  let result;

  const pythonCode = `class PowTwo:
    """Class to implement an iterator
    of powers of two"""

    def __init__(self, max=0):
        self.max = max

    def __iter__(self):
        self.n = 0
        return self

    def __next__(self):
        if self.n <= self.max:
            result = 2 ** self.n
            self.n += 1
            return result
        else:
            raise StopIteration


# create an object
numbers = PowTwo(3)

# create an iterable from the object
i = iter(numbers)

# Using next to get to the next iterator element
print(next(i)) # prints 1
print(next(i)) # prints 2
print(next(i)) # prints 4
print(next(i)) # prints 8
print(next(i)) # raises StopIteration exception`

  beforeEach(() => {
     result = render(<SyntaxHighlighter language={'python'}>
       {pythonCode}
     </SyntaxHighlighter>);
  });

  it("should render the code", () => {
    expect(result.getByText("class")).toBeInTheDocument();
    expect(result.getAllByText("def")[0]).toBeInTheDocument();
    expect(result.getAllByText("print")[0]).toBeInTheDocument();
    expect(result.getByText("raise")).toBeInTheDocument();
  });
});
