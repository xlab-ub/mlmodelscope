import SyntaxHighlighter from "react-syntax-highlighter";
import React from "react";
import { atelierForestDark as theme } from "react-syntax-highlighter/dist/cjs/styles/hljs";

export function CodePreview(props) {
  return (
    <SyntaxHighlighter style={theme} showLineNumbers language="python">
      {props.children}
    </SyntaxHighlighter>
  );
}
