import './App.css';

function App() {
  return (
    <div className="App">
      <section>
        <div className='planet-1-container'>
          <img className='planet-1' src='70.png' alt='astronauta' />
        </div>
        <div className='planet-2-container'>
          <img className='planet-2' width='20px' height='20px' src='70.png' alt='astronauta' />
        </div>
        <section className='center-container'>
          <article className='oops-container'>
            <img src='404.png' alt='astronauta' />
            <h1>OOPS!</h1>
            <p>PAGE NOT FOUND</p>
            <div className='buttons-container'>
              <button>GO HOME</button>
              <button>GO BACK</button>
            </div>
          </article>
          <div className='rocket-container'>
            <div className='roquet' />
          </div>
        </section>
        <div className='planet-3-container'>
          <img className='planet-3' width='50px' height='50px' src='70.png' alt='astronauta' />
        </div>
      </section>
    </div>
  );
}

export default App;
