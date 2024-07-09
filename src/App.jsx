// import React from 'react'

import Proposal from "./Components/Proposal"
import Sidebar from "./Components/Sidebar"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <div >
      {/* <ContractTable onAddClick={handleDrawerOpen} />
      <ContractFormDrawer open={isDrawerOpen} onClose={handleDrawerClose} /> */}
      <Router>
      <div className="flex">
      <div className="bg-[#091143] text-white h-screen overflow-y-auto"> {/* Sidebar container */}
        <Sidebar />
      </div>
    
          <Routes>
    
            <Route path="/finance/proposal" element={<Proposal/>} />
            {/* Add other routes similarly */}
          </Routes>
        </div>
     
    </Router>
    </div>
  )
}

export default App