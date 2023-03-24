import { ConnectWallet } from "@thirdweb-dev/react";
import { Route, Routes } from 'react-router-dom'
import "./styles/Home.css";
import { CampaignDetails, CreateCampaign, Home, Profile} from './pages';
import {Sidebar, Navbar} from './components'

export default function App() {
  return (
    <div className="relative p-4 sm:p-8 bg-[#13131a] min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>
      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />
      </div>
      {/* <Routes>
        <Route path='/' element={<Home />}/>
      </Routes> */}
    </div>
    
  );
}
