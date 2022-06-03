import type { NextPage } from 'next'
import Head from 'next/head'
import { FaSearch ,FaTwitter } from 'react-icons/fa';
import {GoLocation} from 'react-icons/go'
import {ImLink} from 'react-icons/im'
import {TbBuilding} from 'react-icons/tb'


const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen py-2 bg-ebony-clay-500">
      <Head>
        <title>DevFinder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <div className="">
          <div className="text-white font-bold flex text-2xl mb-5">Devfinder</div>
        </div>
        
        <div className=" bg-cloud-burst-500 rounded-xl shadow-2xl pb-4 mb-6 w-2/5">
              <div className="flex items-center  content-between gap-3 mt-5">
                <div className=''>
                  <FaSearch className='ml-5 '/>
                </div>
                <div className='text-slate-400  flex-1 '>
                  Search Github Username . . . .
                </div>
                <div className='mr-3'>
                <button className="btn inline-block px-6 py-2 border-2 bg-blue-500 text-white border-blue-600 text-whited text-xs leading-tight font-extrabold rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" type="button" id="button-addon3">Search</button>
                </div>
              </div>
        </div>

        <div className=" bg-cloud-burst-500 rounded-2xl shadow-2xl flex pb-4 w-2/5">
          <div className=" w-2/5 mt-4 ml-4 p-10" >
            <img src='/images/cat.jpeg' className="rounded-full" ></img>
          </div>

          <div className="w-full h-full text-white pl-20 flex flex-auto">
            <div>
              <div className="pt-5 mt-5 flex ">
                <div className="font-bold text-2xl">The Octocat</div >
                <div className="float right ml-40 ">Joined</div> 
                <div className='ml-2 font-bold'>Jan 26 2011</div>
              </div>
              <div className="float-left text-custom-blue-500 font-bold">@Octocat</div>
              <br></br>
              <div className="justify-center pt-9 font-bold"> Bio-Not Available</div>
            <div className=" bg-ebony-clay-500 rounded-xl shadow-2xl pb-4 mr-6">
              <div className="grid grid-cols-3 gap-3 mt-5">
                <div className='mt-2'>Repos
                  <div className="font-bold border-r">
                    8
                  </div>
                </div>
                <div className='mt-2'>Followers
                  <div className="font-bold border-r">
                    2423
                  </div>
                </div>
                <div className='mt-2'>Following
                  <div className="font-bold">
                    8
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-6 text-left pt-9 pb-5">
              <div className='flex gap-1 items-center'>
                
                <GoLocation/>
                  San Francisco
              </div>
              <div className="flex gap-1 items-center">
                
                <FaTwitter className=''></FaTwitter>
                Not Avaialable
              </div>
              <div className="flex gap-1 items-center">
                
                <ImLink/>
                https://github.blog
              </div>
              <div className="flex gap-1 items-center">
                
                <TbBuilding/>
                @github
              </div>
            </div>
            
            <div className="flex gap-52">
              
            </div>
            </div>

          </div>

        </div>

      </main>

    </div>
  )
}

export default Home
