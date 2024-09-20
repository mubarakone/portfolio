"use client"
import Image from "next/image";
import { useState } from "react";

function ProjectsTab() {
  return (
    <div>
      {/* <!-- Card Blog --> */}
        <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* <!-- Grid --> */}
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* <!-- Card --> */}
            <div class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
              <div class="h-52 flex flex-col justify-center items-center bg-blue-600 rounded-t-xl">
                <Image alt='Logo' src={'/blue-wikipedia-logo.png'} width={100} height={100} />
              </div>
              <div class="p-4 md:p-6">
                <span class="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
                  Application
                </span>
                <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
                  Project Onchain Wikipedia
                </h3>
                <p class="mt-3 text-gray-500">
                  Created in a month during Onchain Summer. You can read, edit, discuss articles immutably all onchain.
                </p>
              </div>
              <div class="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
                <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="https://github.com/mubarakone/projectonchainwikipedia" target="_blank" rel="noopener noreferrer">
                  <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                  View GitHub
                </a>
                <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="https://projectonchainwikipedia.vercel.app/" target="_blank" rel="noopener noreferrer">
                  View App
                </a>
              </div>
            </div>
            {/* <!-- End Card --> */}

            {/* <!-- Card --> */}
            <div class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
              <div class="h-52 flex flex-col justify-center items-center bg-amber-600 rounded-t-xl">
                <Image alt='Logo' src={'/news-4303.svg'} width={100} height={100} />
              </div>
              <div class="p-4 md:p-6">
                <span class="block mb-1 text-xs font-semibold uppercase text-amber-600 dark:text-blue-500">
                  Application
                </span>
                <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
                  newspaper.tips
                </h3>
                <p class="mt-3 text-gray-500">
                  Read your favorite articles by tipping a small amount to the publisher. Each read will just require a very small tip.
                </p>
              </div>
              <div class="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
                <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="https://github.com/mubarakone/tailwind-css-starter-blog" target="_blank" rel="noopener noreferrer">
                  <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                  View GitHub
                </a>
                <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="https://newspaper.tips/" target="_blank" rel="noopener noreferrer">
                  View App
                </a>
              </div>
            </div>
            {/* <!-- End Card --> */}

            {/* <!-- Card --> */}
            <div class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
              <div class="h-52 flex flex-col justify-center items-center bg-black rounded-t-xl">
                <Image alt='Logo' src={'/web3player-next logo(2).PNG'} width={100} height={100} />
              </div>
              <div class="p-4 md:p-6">
                <span class="block mb-1 text-xs font-semibold uppercase text-black dark:text-white">
                  Project
                </span>
                <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
                  web3player-next
                </h3>
                <p class="mt-3 text-gray-500">
                  A Web3 enabled video player that utilizes microtransactions for users to only pay for what they consume.
                </p>
              </div>
              <div class="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
                <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="https://github.com/mubarakone/web3player-next" target="_blank" rel="noopener noreferrer">
                  <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                  View GitHub
                </a>
                <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="https://web3player-next.vercel.app/" target="_blank" rel="noopener noreferrer">
                  View App
                </a>
              </div>
            </div>
            {/* <!-- End Card --> */}

            {/* <!-- Card --> */}
            <div class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
              <div class="h-52 flex flex-col justify-center items-center bg-gray-900 rounded-t-xl">
                <Image alt='Logo' src={'/Instagram post - 1.png'} width={100} height={100} />
              </div>
              <div class="p-4 md:p-6">
                <span class="block mb-1 text-xs font-semibold uppercase text-gray-700">
                  Streaming
                </span>
                <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
                  JukeBox
                </h3>
                <p class="mt-3 text-gray-500">
                  A Web3 enabled streaming service that utilizes microtransactions for payments. Uses web3player-next as its backend.
                </p>
              </div>
              <div class="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
                <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="https://github.com/mubarakone/JUKEBOX" target="_blank" rel="noopener noreferrer">
                  <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                  View GitHub
                </a>
                <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="https://ethglobal.com/showcase/seceret-name-3gjhb" target="_blank" rel="noopener noreferrer">
                  View App
                </a>
              </div>
            </div>
            {/* <!-- End Card --> */}
          </div>
          {/* <!-- End Grid --> */}
        </div>
      {/* <!-- End Card Blog --> */}
    </div>
  )
}

function WorkTab() {
  return (
    <div className="grid lg:grid-cols-4 lg:gap-4 md:grid-cols-2 md:gap-4 sm:grid-cols-1 sm:gap-4 xs:gap-4">

      <div class="bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
        <div class="p-4 md:p-5">
          <h3 class="text-lg font-bold text-gray-800 dark:text-white">
            Frontend Intern
          </h3>
          <p class="mt-1 text-gray-500 dark:text-gray-400">
            Worked as a Web3 Frontend Developer on the Sentinel project, a DeFi application (has not been released yet). Was in charge of web2-Web3 integrations. Used Next.js as the framework, Typescript as the primary language, and Firebase as the backend database to call from.
          </p>
          <p class="mt-5 text-xs text-gray-500 dark:text-gray-500">
            Aug 2022 - Nov 2022
          </p>
        </div>
        <Image width={500} height={500} className="rounded-b-xl" src={'/Nethermind_Open_Roles_(1).png'} alt="Image Description" />
      </div>

      <div class="bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
        <div class="p-4 md:p-5">
          <h3 class="text-lg font-bold text-gray-800 dark:text-white">
            Support Engineer Intern
          </h3>
          <p class="mt-1 text-gray-500 dark:text-gray-400">
            3 months of providing support and troubleshoot for developers integrating WalletConnect's clients to their applications. Support would be facilitated through platforms such as Discord, GitHub, Reddit, and StackOverflow.
          </p>
          <p class="mt-5 text-xs text-gray-500 dark:text-gray-500">
            Apr 2022 - Jun 2022
          </p>
        </div>
        <Image width={500} height={500} className="rounded-b-xl" src={'/walletconnect5023.jpg'} alt="Image Description" />
      </div>

      <div class="bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
        <div class="p-4 md:p-5">
          <h3 class="text-lg font-bold text-gray-800 dark:text-white">
            Freelance Web3 Developer
          </h3>
          <p class="mt-1 text-gray-500 dark:text-gray-400">
            Frequent DAO member. Contributed on projects such as web3uikit and ethereum-boilerplate. Used Moralis for many freelance projects.
          </p>
          <p class="mt-5 text-xs text-gray-500 dark:text-gray-500">
            Feb 2022 - Present
          </p>
        </div>
        <Image width={500} height={500} className="rounded-b-xl" src={'/moralisLogoBrand2.png'} alt="Image Description" />
      </div>

      <div class="bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
        <div class="p-4 md:p-5">
          <h3 class="text-lg font-bold text-gray-800 dark:text-white">
            Blockchain Security Analyst Apprentice
          </h3>
          <p class="mt-1 text-gray-500 dark:text-gray-400">
            3-month apprenticeship program. Reviewing Solidity-based smart contracts for vulnerabilities and exploits while being mentored.
          </p>
          <p class="mt-5 text-xs text-gray-500 dark:text-gray-500">
            Aug 2021 - Oct 2021
          </p>
        </div>
        <Image width={500} height={500} className="rounded-b-xl" src={'/FbbYmQT__400x400.png'} alt="Image Description" />
      </div>

    </div>
  )
  
}

function EducationTab() {
  return (
    <div>
      <div class="relative bg-white border shadow-sm rounded-xl w-200 dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
        <Image width={200} height={200} className="rounded-b-xl" src={"/swclogo.jpg"} alt="Image Description" />
        <div class="absolute top-0 start-0 end-0">
          <div class="p-4 md:p-5">
            <h3 class="text-lg font-bold text-gray-800">
              Computer Science
            </h3>
            <p class="mt-1 text-gray-800">
              Associate of Science/Transfer - AS/T
            </p>
            <p class="mt-5 text-xs text-gray-500">
              In Progress...
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Home() {

  const [activeTab, setActiveTab] = useState('Projects');

  const BaseTabClasses = "-mb-px py-3 px-4 text-sm font-medium text-center border-b text-gray-500 rounded-t-lg hover:text-gray-700 focus:z-10 dark:border-gray-700 dark:hover:text-gray-400"
  const ActiveTabClasses = "bg-white border border-b-transparent focus:z-10 dark:bg-slate-900 dark:border-b-gray-800"

  const ProjectsTabClasses = `${BaseTabClasses} ${(activeTab == 'Projects') && ActiveTabClasses}`
  const WorkTabClasses = `${BaseTabClasses} ${(activeTab == 'Work') && ActiveTabClasses}`
  const EducationTabClasses = `${BaseTabClasses} ${(activeTab == 'Education') && ActiveTabClasses}`

  const renderTab = () => {
    switch(activeTab) {
      case 'Work':
        return <WorkTab />;
      case 'Education':
        return <EducationTab />;
      default:
        return <ProjectsTab />;
    }
  };


  return (
    <main> 

        {/* <!-- Hero --> */}
        <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/squared-bg-element.svg')]">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
            {/* <!-- Announcement Banner --> */}
            <div className="flex justify-center">
              <a className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-xs text-gray-600 p-2 px-3 rounded-full transition hover:border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-gray-600 dark:text-gray-400" href="https://3d-portfolio-eight-delta.vercel.app/" target="_blank" rel="noopener noreferrer">
                Explore my New (and much cooler) 3D Website!
                <span className="flex items-center gap-x-1">
                  <span className="border-s border-gray-200 text-blue-600 ps-2 dark:text-blue-500">Explore</span>
                  <svg className="flex-shrink-0 size-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </span>
              </a>
            </div>
            {/* <!-- End Announcement Banner --> */}
            {/* <!-- Title --> */}
            <div className="mt-5 max-w-xl text-center mx-auto">
              <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
                Mubarak Usmane
              </h1>
            </div>
            {/* <!-- End Title --> */}
            <div className="mt-5 max-w-3xl text-center mx-auto">
              <p className="text-lg text-gray-600 dark:text-gray-400">Web3 Frontend Engineer | Full-Stack Web Developer | Computer Science Undergraduate</p>
            </div>
            {/* <!-- Buttons --> */}
            <div className="grid grid-rows-3 gap-3 mt-8 lg:grid-cols-3 lg:gap-3 lg:mx-16 md:grid-cols-3 md:gap-3 md:mx-16 justify-center">
              <a className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white px-4 dark:focus:ring-offset-gray-800" href="https://github.com/mubarakone" target="_blank" rel="noopener noreferrer">
                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
                View GitHub
              </a>
              <a className="inline-flex justify-center items-center gap-x-3 text-center bg-red-300 hover:bg-red-400 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-white px-4 dark:focus:ring-offset-gray-800" href="New Resume.pdf" target="_blank" rel="noopener noreferrer">
                <svg height="16px" width="16px" version="1.1" id="Layer_1" viewBox="0 0 512 512" xmlSpace="preserve" fill="#000000">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                  <g id="SVGRepo_iconCarrier">
                    <path style={{ fill: "#E2E5E7" }} d="M128,0c-17.6,0-32,14.4-32,32v448c0,17.6,14.4,32,32,32h320c17.6,0,32-14.4,32-32V128L352,0H128z" />
                    <path style={{ fill: "#B0B7BD" }} d="M384,128h96L352,0v96C352,113.6,366.4,128,384,128z" />
                    <polygon style={{ fill: "#CAD1D8" }} points="480,224 384,128 480,128" />
                    <path style={{ fill: "#F15642" }} d="M416,416c0,8.8-7.2,16-16,16H48c-8.8,0-16-7.2-16-16V256c0-8.8,7.2-16,16-16h352c8.8,0,16,7.2,16,16V416z" />
                    <g>
                      <path style={{ fill: "#FFFFFF" }} d="M101.744,303.152c0-4.224,3.328-8.832,8.688-8.832h29.552c16.64,0,31.616,11.136,31.616,32.48 c0,20.224-14.976,31.488-31.616,31.488h-21.36v16.896c0,5.632-3.584,8.816-8.192,8.816c-4.224,0-8.688-3.184-8.688-8.816V303.152z M118.624,310.432v31.872h21.36c8.576,0,15.36-7.568,15.36-15.504c0-8.944-6.784-16.368-15.36-16.368H118.624z" />
                      <path style={{ fill: "#FFFFFF" }} d="M196.656,384c-4.224,0-8.832-2.304-8.832-7.92v-72.672c0-4.592,4.608-7.936,8.832-7.936h29.296 c58.464,0,57.184,88.528,1.152,88.528H196.656z M204.72,311.088V368.4h21.232c34.544,0,36.08-57.312,0-57.312H204.72z" />
                      <path style={{ fill: "#FFFFFF" }} d="M303.872,312.112v20.336h32.624c4.608,0,9.216,4.608,9.216,9.072c0,4.224-4.608,7.68-9.216,7.68 h-32.624v26.864c0,4.48-3.184,7.92-7.664,7.92c-5.632,0-9.072-3.44-9.072-7.92v-72.672c0-4.592,3.456-7.936,9.072-7.936h44.912 c5.632,0,8.96,3.344,8.96,7.936c0,4.096-3.328,8.704-8.96,8.704h-37.248V312.112z" />
                    </g>
                    <path style={{ fill: "#CAD1D8" }} d="M400,432H96v16h304c8.8,0,16-7.2,16-16v-16C416,424.8,408.8,432,400,432z" />
                  </g>
                </svg>
                View Resume
              </a>
              <a className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-300 hover:bg-blue-400 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white px-4 dark:focus:ring-offset-gray-800" href="https://www.linkedin.com/in/mubarak-usmane/" target="_blank" rel="noopener noreferrer">
                <svg width="48px" height="48px" viewBox="0 0 48 48" version="1.1">
                  <g id="Icon/Social/linkedin-color" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <path d="M20.9716667,33.5527338 L25.001,33.5527338 L25.001,27.1328007 C25.001,25.439485 25.3213333,23.7988354 27.4206667,23.7988354 C29.491,23.7988354 29.517,25.7351486 29.517,27.2404662 L29.517,33.5527338 L33.5506667,33.5527338 L33.5506667,26.4341413 C33.5506667,22.9381777 32.796,20.2505391 28.711,20.2505391 C26.7483333,20.2505391 25.432,21.3265278 24.8943333,22.3471839 L24.839,22.3471839 L24.839,20.5725357 L20.9716667,20.5725357 L20.9716667,33.5527338 Z M16.423,14.1202696 C15.1273333,14.1202696 14.0823333,15.1682587 14.0823333,16.4595785 C14.0823333,17.7508984 15.1273333,18.7992208 16.423,18.7992208 C17.7133333,18.7992208 18.761,17.7508984 18.761,16.4595785 C18.761,15.1682587 17.7133333,14.1202696 16.423,14.1202696 L16.423,14.1202696 Z M14.4026667,33.5527338 L18.4406667,33.5527338 L18.4406667,20.5725357 L14.4026667,20.5725357 L14.4026667,33.5527338 Z M9.76633333,40 C8.79033333,40 8,39.2090082 8,38.2336851 L8,9.76631493 C8,8.79065843 8.79033333,8 9.76633333,8 L38.234,8 C39.2093333,8 40,8.79065843 40,9.76631493 L40,38.2336851 C40,39.2090082 39.2093333,40 38.234,40 L9.76633333,40 Z" id="Shape" fill="#007BB5"></path>
                  </g>
                </svg>
                View LinkedIn
              </a>
            </div>
            {/* <!-- End Buttons --> */}
          </div>

          <div className="border rounded-xl shadow-sm p-6 dark:bg-slate-900 dark:border-gray-700">
            <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
              <div className="bg-gray-100 border-b rounded-t-xl pt-3 px-4 md:pt-4 md:px-5 dark:bg-slate-800 dark:border-gray-700">
                <nav className="flex space-x-2" aria-label="Tabs">
                  <a className={ProjectsTabClasses} onClick={() => setActiveTab('Projects')}>
                    Projects & Apps
                  </a>

                  <a className={WorkTabClasses} onClick={() => setActiveTab('Work')}>
                    Work Experience
                  </a>

                  <a className={EducationTabClasses} onClick={() => setActiveTab('Education')}>
                    Education
                  </a>
                </nav>
              </div>
              <div className="p-4 text-center md:py-7 md:px-5">
                {renderTab()}
              </div>
            </div>
          </div>

        </div>
        {/* <!-- End Hero --> */}

    </main>
  );
}
