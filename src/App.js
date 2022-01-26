import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';

function App() {

  const [categories] = useState([
    {
      name: 'portfolio',
      description: 'Page that shows my portfolio. This shows the projects that I have done.',
    },
    { name: 'contact', description: 'This is a page that allows you to contact me' },
    { name: 'resume', description: 'Page that shows my resume and my skills' },
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>

        <Nav
                categories={categories}
                setCurrentCategory={setCurrentCategory}
                currentCategory={currentCategory}>

        </Nav>
        <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;