import React, { useState } from 'react';

import Layout from './containers/hoc/Layout/Layout';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Stack from './components/Stack/Stack';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Toolbar from './components/Navigation/Toolbar/Toolbar';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <Layout>
        <Toolbar onClick={() => {setOpen(!open)}} open={open}/>
        <Header />
        <main>
          <About />
          <Projects />
          <Stack />
          <Contact />
        </main>
        <Footer />
      </Layout>
    </React.Fragment>  
  
  );
}

export default App;
