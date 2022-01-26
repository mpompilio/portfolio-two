import React, { useEffect }  from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
    const {
        portfolioSelected,
        currentCategory,
        setPortfolioSelected,
        contactSelected,
        setContactSelected,
        setAboutSelected,
        resumeSelected, 
        setResumeSelected
      } = props;

      useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
      }, [currentCategory]);

  return (
    <header className="flex-row px-1">
        <h2>
    <a href="/">
      Matthew Pompilio
    </a>
    </h2>
    <nav>
        <ul className="flex-row">
          <li className="mx-2">
          <span onClick={() => { setPortfolioSelected(false); setContactSelected(false); setResumeSelected(false);}}>About me</span>
          </li>
          <li className={`mx-2 ${portfolioSelected && 'navActive'}`}>
            <span onClick={() => { setPortfolioSelected(true); setContactSelected(false); setAboutSelected(false); setResumeSelected(false);}}>Portfolio</span>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => { setContactSelected(true); setPortfolioSelected(false); setAboutSelected(false); setResumeSelected(false);}}>Contact</span>
          </li>
          <li className={`mx-2 ${resumeSelected && 'navActive'}`}>
            <span onClick={() => { setResumeSelected(true); setContactSelected(false); setPortfolioSelected(false); setAboutSelected(false);}}>Resume</span>
          </li>

        </ul>
      </nav>
    </header>
  );
}

export default Nav;