import './App.css';
import idPic from './assets/id-pic.jpeg'
import map from './assets/map.jpeg'

function App() {
  return (
    <div className="App bg-cyan-700 h-screen pt-12 px-8">
      <header className="App-header text-center mb-14 flex-wrap">
        <h1 className='font-light text-4xl tracking-wider w-full text-gray-100'>Termite or Pest Auto-Identifier?</h1>
        <p className='text-white'>Find Out Whether That Pest You Found is an Ant or a Termite Eating Your Home</p>
      </header>
      <section>
        <div className='grid grid-cols-5 gap-10 px-5'>
          <div className='bg-white rounded-lg shadow-lg px-12 py-10 col-span-3'>
            <h2 className='text-2xl font-light text-gray-700 mb-4'>Why Termites Matter</h2>
            <p className='text-gray-700 mb-8'>With termites causing an estimated $5 billion in damage to homes each year in the United States, it's clear that these pests are a major problem. And yet, many homeowners are unaware of the importance of termite control until it's too late.</p>
            <p className='text-gray-700'>That's why it's important to be proactive about termite control and to make sure that your home is covered by a comprehensive termite treatment plan. By catching termites early and preventing them from doing further damage, you can save yourself a lot of money – and a lot of headaches.</p>
          </div>
          <div className="col-span-2">
            <img src={map} alt="A map of termite activity in the USA" />
          </div>
        </div>
      </section>
      <section className='flex justify-center flex-wrap py-12'>
        <h2 className='font-light text-xl tracking-wider w-full text-gray-100 text-center'>How to Tell the Difference?</h2>
        <p className='text-white w-full text-center  mb-4'>How to visually ID the difference between termites and ants (or take a picture below!)</p>
        <img src={idPic} alt="A picture of a termite and an ant" className='w-1/2' />
      </section>
    </div>
  );
}

export default App;
