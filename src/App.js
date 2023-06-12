import React from 'react';
import './App.css';
import Welcome from './components/welcome/Welcome';
import Content from './Content';
import Scroll from './Scroll';
import Socialmedia from './Socialmedia';

//<a href="http://www.onlinewebfonts.com">oNline Web Fonts</a> //must include this on final page for use of fonts

function App() {
  return (
    <div className='bg-fixed'>
      <Scroll>
        <Welcome />
        <Content />
        <Socialmedia />
        <div>
        <a className='f7' href="http://www.onlinewebfonts.com">oNline Web Fonts</a>
        </div>
      </Scroll>
    </div>
  );
}

export default App;
