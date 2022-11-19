import React from 'react';
import { CodeProps } from 'react-markdown/lib/ast-to-react';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import SyntaxHighlighter from 'react-syntax-highlighter';

const CodeBlock = ({ className, children, ...props }: CodeProps) => {
  const match = /language-(\w+)/.exec(className || '');
  return (
    <SyntaxHighlighter
      {...props}
      style={atomOneDark}
      PreTag="div"
      language={match ? match[1] : 'language-shell'}
    >
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
