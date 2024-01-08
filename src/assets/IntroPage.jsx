import React, { useState } from 'react';
import IntroPage from './IntroPage';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

//keep track of current page
function App() {
  const [currentPage, setCurrentPage] = useState('intro');

  // Function to advance to the next page
  const nextPage = () => {
    // You can implement logic here to determine the next page based on the current page
    // For simplicity, we'll just go sequentially
    switch (currentPage) {
      case 'intro':
        setCurrentPage('page1');
        break;
      case 'page1':
        setCurrentPage('page2');
        break;
      case 'page2':
        setCurrentPage('page3');
        break;
      // Add more cases for additional pages
      default:
        // Handle reaching the end of the story
        break;
    }
  };

  // Render the appropriate page component based on the current page state
  let pageContent;
  switch (currentPage) {
    case 'intro':
      pageContent = <IntroPage nextPage={nextPage} />;
      break;
    case 'page1':
      pageContent = <Page1 nextPage={nextPage} />;
      break;
    case 'page2':
      pageContent = <Page2 nextPage={nextPage} />;
      break;
    case 'page3':
      pageContent = <Page3 nextPage={nextPage} />;
      break;
    // Add more cases for additional pages
    default:
      // Handle reaching the end of the story
      pageContent = <div>The end of the story.</div>;
      break;
  }

  return <div className="App">{pageContent}</div>;
}

export default App;