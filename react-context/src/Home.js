import React from 'react'
import { useGlobalContext } from './context';
const Home = () => {
    const { openModal } = useGlobalContext();
    return (
      <main>
        <button onClick={openModal} >show modal</button>
      </main>
    );
}

export default Home