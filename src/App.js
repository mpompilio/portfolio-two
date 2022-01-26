import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/footer';

function App() {

  const [categories] = useState([
    { name: 'contact', description: 'This is a page that allows you to contact me' },
    { name: 'resume', description: 'Page that shows my resume and my skills' },
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);
  const [aboutSelected, setAboutSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);

  return (
    <div>

        <Nav
                categories={categories}
                setCurrentCategory={setCurrentCategory}
                currentCategory={currentCategory}
                aboutSelected = {aboutSelected}
                setAboutSelected = {setAboutSelected}
                portfolioSelected={portfolioSelected}
                setPortfolioSelected={setPortfolioSelected}
                contactSelected={contactSelected}
                setContactSelected={setContactSelected}
                resumeSelected={resumeSelected}
                setResumeSelected={setResumeSelected}
                >

        </Nav>

        <main> 

        {!portfolioSelected ? (
          <>
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
        {!resumeSelected ? (
          <>
          </>
        ) : (
          <Resume></Resume>
        )}
        <About></About>
      </main>
      <Footer></Footer>
    </div>

  );
}

export default App;