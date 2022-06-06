import type { NextPage } from 'next'
import Head from 'next/head'
import { FaSearch ,FaTwitter } from 'react-icons/fa';
import {GoLocation} from 'react-icons/go'
import {ImLink} from 'react-icons/im'
import {TbBuilding} from 'react-icons/tb'


const Home: NextPage = () => {
return (
    <div className="min-h-screen py-24 bg-ebony-clay-500">

    <Head>
      <title>DevFinder</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

      {/* Header */}
      <header className="font-bold text-xl mx-auto max-w-full md:max-w-2xl mt-4">
        <h1 className="text-white p-3 font-bold text-2xl">
          devfinder
        </h1>
      </header>

    <div className=" bg-cloud-burst-500 duration-300 rounded-lg space-x-2 flex items-center justify-between max-w-full md:max-w-2xl mx-3 md:mx-auto mt-4 shadow-2xl mb-6 transition p-2 ease-in">
        
              <div className=''>
                <FaSearch className='h-6 w-6 ml-2'/>
              </div>
              <input name="username" type="text" placeholder='Search Github username. . . '
              className='text-slate-400 w-[250px] font-medium p-2 bg-transparent text-base rounded-md'/>
              
              <div className='mr-3'>
              <button className="btn inline-block px-6 py-2 border-2 bg-blue-500 text-white border-blue-600 text-whited text-xs leading-tight font-extrabold rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" type="button" id="button-addon3">Search</button>
              </div>
           
      </div>

    <main className="mx-3 md:mx-auto max-w-full md:max-w-2xl py-6 min-h-[470px] md:max-h-fit rounded-lg flex flex-col items-end justify-between bg-secondary mt-6">

        <div className="flex flex-col md:flex-row mt-5  md:justify-evenly w-full space-y-6 space-x-4 md:space-x-6 items-center">
          <div className="w-[120px] h-[120px] flex ring-[5px] rounded-full md:ml-8" >
            <img src='/images/cat.jpeg' className="rounded-full w-full" ></img>
          </div>
          <div className="flex md:flex-1 items-center md:items-start w-full px-2 space-x-6 justify-around md:justify-between ">
            <div className="w-32 md:w-44 font-bold">
              <h2 className="text-lg md:text-2xl text-gray-50">The Octocat</h2>
              <p className="inline-block text-sm text-blue-400">
                @Octocat
              </p>
            </div>

            <div className="text-xs md:text-sm text-gray-300 font-normal -mt-2 md:mt-0 md:pt-2 md:p-6">
              Joined{" "}
              <span className="font-semibold flex md:inline-block text-xs md:text-sm">
                26 June 2011
              </span>
            </div>
          </div>
        </div>

            <br></br>
            

        <div className="flex w-full flex-col md:max-w-lg space-y-5 px-6 py-5">
            <div className="text-center text-sm text-gray-300 font-medium"> Bio-Not Available</div>

          <div className=" bg-ebony-clay-500 rounded-xl shadow-2xl pb-4 mr-6 text-center">
    
            <div className="rounded-lg bg-primary-dark grid grid-cols-3 divide-x divide-gray-50 py-4">
              <div className='mt-2 text-xs font-semibold text-gray-400'>Repos
                <div className="text-lg font-extrabold text-gray-50">
                  8
                </div>
              </div>
              <div className='mt-2 text-xs font-semibold text-gray-400'>Followers
                <div className="text-lg font-extrabold text-gray-50">
                  2423
                </div>
              </div>
              <div className='mt-2 text-xs font-semibold text-gray-400'>Following
                <div className="text-lg font-extrabold text-gray-50">
                  8
                </div>
              </div>
            </div>
          </div>

        
          <div className="grid grid-cols-1 md:grid-cols-2 px-2 py-4 gap-6 md:gap-x-10">
            <div className='flex gap-1 items-center font-semibold text-white transition-colors duration-150 hover:text-blue-400'>
              <GoLocation className="w-5 h-5 text-gray-100"/>
              <div className='text-sm font-medium text-gray-300'>
                San Francisco
              </div>
            </div>

            <div className="flex gap-1 items-center font-semibold text-white transition-colors duration-150 hover:text-blue-400">
              <FaTwitter className="w-5 h-5 text-gray-100"></FaTwitter>
              <div className='text-sm font-medium text-gray-300 hover:cursor-pointer'>
                TheOctocat
              </div>
            </div>
            <div className="flex gap-1 items-center font-semibold text-white transition-colors duration-150 hover:text-blue-400">
              <ImLink className="w-5 h-5 text-gray-100"/>
              <div className='text-sm font-medium text-gray-300'>
                https://github.blog
              </div>
            </div>

            <div className="flex gap-1 items-center font-semibold text-white transition-colors duration-150 hover:text-blue-400">
              <TbBuilding className="w-5 h-5 text-gray-100"/> 
              <div className='text-sm font-medium text-gray-300'>
                @github
              </div>
            </div>
          </div>
        </div>
    
    </main>

  </div>
)
}

export default Home
