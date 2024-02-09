import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import DashSide from "../components/DashSide"
import DashProfile from "../components/DashProfile"

function Dashboard() {
  const location = useLocation()
  const [tab,setTab] = useState('')
  useEffect(()=>{
    const urlParams = new URLSearchParams(location.search)
    const tabfromURL =urlParams.get('tab')
    if(tabfromURL){
      setTab(tabfromURL)
    }
  },[location.search])
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-56">
        {/*SideBar*/}
        <DashSide/>
      </div>
      {/*profile...*/}
      {tab === 'profile' && <DashProfile/>}
    </div>
  )
}

export default Dashboard