import map from '../assets/map.jpeg'
import idPic from '../assets/id-pic.jpeg'
import { useState } from 'react';
import AiForm from '../components/AiForm';
import ManualForm from '../components/ManualForm';
import H2 from '../components/H2';
import Header from '../components/Header';
import ContentContainer from '../components/ContentContainer';
import Subheader from '../components/Subheader';

function Home() {
    const [idType, setIdType] = useState('ai');

    return (
        <div>
            <Header text='Termite or Pest Auto-Identifier'>
                <p className='text-white'>Find Out Whether That Pest You Found is an Ant or a Termite Eating Your Home</p>
            </Header>
            <ContentContainer>
                <section className='pt-12 px-16'>
                    <div className='grid grid-cols-5 gap-10 px-5'>
                        <div className='bg-white rounded-lg shadow-lg px-12 pt-10 pb-8 col-span-3'>
                            <h2 className='text-2xl text-gray-700 mb-4'>Why Termites Matter</h2>
                            <p className='text-gray-700 mb-8'>With termites causing an estimated $5 billion in damage to homes each year in the USA, it's clear that these pests are serious. But, many homeowners are unaware of the importance of termite control until it's too late.</p>
                            <p className='text-gray-700'>By catching termites early and preventing them from doing further damage, you can save yourself a lot of money – and a lot of headaches.</p>
                        </div>
                        <div className="col-span-2">
                            <img src={map} alt="A map of termite activity in the USA" />
                        </div>
                    </div>
                </section>
                <section className='flex justify-center flex-wrap py-12'>
                    <H2>How to Tell the Difference?</H2>
                    <Subheader>How to visually ID the difference between termites and ants (or take a picture below!)</Subheader>
                    <img src={idPic} alt="A picture of a termite and an ant" className='w-1/2' />
                </section>
                <section>
                    <H2>Help Me Identify My Pest</H2>
                    <div>
                        <div className='button flex justify-center py-2'>
                            <button className={`bg-gray-300  font-bold py-2 px-4 rounded-l ${idType === 'ai' ? 'bg-cyan-700 text-white' : 'text-gray-700'}`} onClick={() => setIdType('ai')}>AI</button>
                            <button className={`bg-gray-300  font-bold py-2 px-4 rounded-r ${idType === 'manual' ? 'bg-cyan-700 text-white' : 'text-gray-700'}`} onClick={() => setIdType('manual')}>Manual</button>
                        </div>
                        {idType === 'ai' ? <AiForm /> : <ManualForm />}
                    </div>
                </section>
            </ContentContainer>
        </div>
    )
}

export default Home;