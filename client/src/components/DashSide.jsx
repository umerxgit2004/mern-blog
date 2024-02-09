import { Sidebar } from 'flowbite-react'
import {HiUser, HiArrowSmRight} from 'react-icons/hi'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'


function DashSide() {
    const location = useLocation()
    const [tab,setTab] = useState('')
    useEffect(()=>{
        const urlParams = new URLSearchParams(location.search)
        const tabFormUrl = urlParams.get('tab')
        if(tabFormUrl){
            setTab(tabFormUrl)
        }
    },[location.search])
    return(
   <Sidebar className='w-full md:w-56'>
    <Sidebar.Items>
        <Sidebar.ItemGroup>
            <Link to='/dashboard?tab=profile'>
            <Sidebar.Item as='div' active={tab ==='profile'} icon={HiUser} label={'User'} labelColor='dark'>
                Profile
            </Sidebar.Item>
            </Link>
        <Sidebar.Item  icon={HiArrowSmRight} className='cursor-pointer'>
                Sign Out
        </Sidebar.Item>
        </Sidebar.ItemGroup>
    </Sidebar.Items>
   </Sidebar>
  )
}

export default DashSide