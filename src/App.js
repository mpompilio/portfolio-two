import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {

  const [categories] = useState([
    { name: 'contact', description: 'This is a page that allows you to contact me' },
    { name: 'resume', description: 'Page that shows my resume and my skills' },
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>

        <Nav
                categories={categories}
                setCurrentCategory={setCurrentCategory}
                currentCategory={currentCategory}
                portfolioSelected={portfolioSelected}
                setPortfolioSelected={setPortfolioSelected}
                contactSelected={contactSelected}
                setContactSelected={setContactSelected}
                >

        </Nav>
        <main>
        {!portfolioSelected ? (
          <>
        <About></About>
        </>

        ) : (
          <Portfolio></Portfolio>
        )}
        {!contactSelected ? (
          <>
          </>
        ) : (
          <Contact></Contact>
        )}

      </main>
    </div>
  );
}

export default App;