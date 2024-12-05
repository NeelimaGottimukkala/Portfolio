'use client';

import { useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faSuitcase, faLightbulb, faAddressBook, faCertificate } from '@fortawesome/free-solid-svg-icons';


const navigation = [
  { name: 'Home', href: '/', icon: faHouse, current: false },
  { name: 'About', href: '/components/About', icon: faUser, current: false },
  { name: 'Projects', href: '/components/projects', icon: faSuitcase, current: false },
  { name: 'Skills', href: '/components/skills', icon: faLightbulb, current: false },
  { name: 'Certifications', href: '/components/Certifications', icon: faCertificate, current: false },
  { name: 'Contact', href: '/components/Contact', icon: faAddressBook, current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function SideNav() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div>
        {/* Mobile Sidebar */}
        <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 lg:hidden">
          <DialogBackdrop className="fixed inset-0 bg-gray-900/80" />
          <div className="fixed inset-0 flex">
            <DialogPanel className="relative flex w-full max-w-xs flex-1 flex-col bg-black p-6">
              <button type="button" onClick={() => setSidebarOpen(false)} className="self-end">
                <span className="sr-only">Close sidebar</span>
                <XMarkIcon className="h-8 w-8  text-white" />
              </button>

              {/* Logo at the top */}
              <div className="mb-6">
              <h1 className="text-pink-500 text-3xl font-bold mt-7">{'{NeelimaG}'}</h1>
              </div>

              {/* Navigation items */}
              <nav>
                <ul className="space-y-4 mt-10 ml-7">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className={classNames(
                          item.current ? 'text-white' : 'text-white hover:text-pink-500',
                          'flex items-center gap-x-3 rounded-md p-2 font-bold text-xl'
                        )}
                      >
                        <FontAwesomeIcon icon={item.icon} className="h-6 w-6 hover:text-pink-500" />
                        <span>{item.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </DialogPanel>
          </div>
        </Dialog>

        {/* Desktop Sidebar */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-72 lg:flex-col bg-black border-r border-pink-500 shadow-lg shadow-pink-500/30">
          <div className="flex h-16 items-center px-6">
            <h1 className="text-pink-500 text-4xl font-bold mt-7">{'{NeelimaG}'}</h1>
          </div>
          <nav className="flex flex-col flex-1 p-6 justify-between mt-8">
            <ul className="space-y-4 ml-10 mt-16">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={classNames(
                      item.current ? 'text-pink-500' : 'text-white hover:text-pink-500',
                      'flex items-center gap-x-3 rounded-md p-2 text-xl font-bold'
                    )}
                  >
                    <FontAwesomeIcon icon={item.icon} className="h-6 w-6 hover:text-pink-500" />
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Main Content */}
        <div className="lg:pl-72">
          <div className="sticky top-0 z-40 flex items-center bg-black px-4 shadow-sm sm:px-6 lg:px-8 h-16 lg:h-auto">
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
            >
              <Bars3Icon className="h-8 w-8 text-white " />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
