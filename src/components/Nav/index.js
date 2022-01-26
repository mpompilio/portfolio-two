import React, { useEffect }  from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        portfolioSelected,
        currentCategory,
        setPortfolioSelected,
        contactSelected,
        setContactSelected
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
            <a data-testid="about" href="#about">
              About me
            </a>
          </li>
          <li className={`mx-2 ${portfolioSelected && 'navActive'}`}>
            <span onClick={() => setPortfolioSelected(true)}>Portfolio</span>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>

        </ul>
      </nav>
    </header>
  );
}

export default Nav;