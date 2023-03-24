import { useState, useEffect } from 'react'
import { useStateContext } from '../context'
import { DisplayCampaigns } from '../components';

const Profile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const {address, contract, getUserCampaigns} = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getUserCampaigns();
    setCampaigns(data);
    // console.log('campaigns', campaigns);
    setIsLoading(false);
  }

  // we can't await inside useEffect
  useEffect(() => {
    if(contract) fetchCampaigns();
  }, [address, contract]);
  return (
    <DisplayCampaigns
      title='All Campaigns'
      isLoading={isLoading}
      campaigns={campaigns}
    />
  )
}

export default Profile