import { useState } from 'react'
import { Header } from './assets/components/Header';
import { Tasks } from './assets/components/Tasks';
import "./global.css";



function App() {
  return (
    <div className="App">
          <Header />
          <Tasks />
    </div>
  )
}

export default App
