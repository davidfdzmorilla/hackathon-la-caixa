import { useState } from 'react';

import { Header } from './components/Header';
import { Message } from './components/Message';
import { Footer } from './components/Footer';

import './App.css'


function App() {

  const [message, setMessage] = useState({})

  return (
    <div className="App">
      <Header setMessage={setMessage} />
      <hr />
      <Message message={message} />
      <Footer />
    </div>
  );
}

export default App
