import React from 'react';
import { marked } from 'marked';
import './App.css';

marked.setOptions({
  breaks: true,
});
function App() {
  const [markdown, setMarkdown] = React.useState(`# H1 Heading
## H2 Subheading

**This is bold text**

Here is a [link](https://www.freecodecamp.org)

Here is some \`inline code\`

\`\`\`js
// This is a code block
function greet(name) {
  return "Hello, " + name;
}
\`\`\`

- List item 1
- List item 2
- List item 3

> This is a blockquote

![React Logo](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)
`);
  return (
    <div className="container">
      <div className="firstSection">
        <div className="bars">Editor</div>
        <textarea id="editor" value={markdown}
        onChange={(e) => setMarkdown(e.target.value)} name="editor" /> 
      </div>
      <div className="secondSection">
        <div className="bars">Previewer</div>
        <div id="preview" name="preview" dangerouslySetInnerHTML={{ __html: marked.parse(markdown) }}></div> 
      </div>
    </div>
  );
}
export default App;