import SyntaxHighlighter from "react-syntax-highlighter";
import React from "react";
import { atelierForestDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

export function CodePreview(props) {
  return (
    <SyntaxHighlighter
      style={atelierForestDark}
      showLineNumbers
      language="python"
    >
      {props.children}
    </SyntaxHighlighter>
  );
}
