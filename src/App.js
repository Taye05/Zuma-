import React from 'react';
import './App.css';
import Hero from '../src/components/Hero/Hero';
import Nav from '../src/components/Nav/Nav';
import Scroll from '../src/components/Scroll/Scroll';

function App() {
  return (
    <div style = {{
      backgroundImage: "url('https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')",
      height: "100vh",
      width: "100vw",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    }}>
      <Nav />
      <Hero />
      <Scroll />
    </div>
  );
}

export default App;
