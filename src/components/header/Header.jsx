import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { calenderIcon, chatIcon, creditCardIcon, groupIcon, homeIcon, logoIcon, moreHorizontalIcon, moreIcon, settingIcon } from '../../assets/icons/Main'
import person4 from '../../assets/images/person4.png'


const navigation = [
    { name: 'Overview', href: '#', icon: homeIcon, statusId: 0 },
    { name: 'Patients', href: '#', icon: groupIcon, statusId: 1 },
    { name: 'Schedule', href: '#', icon: calenderIcon, statusId: 0 },
    { name: 'Message', href: '#', icon: chatIcon, statusId: 0 },
    { name: 'Transactions', href: '#', icon: creditCardIcon, statusId: 0 },
]

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-white rounded-full">
            <nav className="mx-auto flex items-center justify-between p-4 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <span>{logoIcon}</span>
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-6">
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} className={`text-sm leading-6 text-gray-900 font-bold flex items-center gap-2 px-4 py-3 rounded-full ${(item.statusId == 1) ? "bg-[#01F0D0]" : ""}`}>
                            <span className='h-[17px] w-auto min-w-4 *:size-full *:object-contain block'>{item.icon}</span>
                            {item.name}
                        </a>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <div className='flex divide-x gap-3'>
                        <div className={`flex items-center gap-3 cursor-pointer`}>
                            <div className='size-11'>
                                <img src={person4} alt="Patients" className='size-full object-cover' />
                            </div>
                            <div>
                                <h4 className='text-sm font-bold line-clamp-1'>Dr. Jose Simmons</h4>
                                <p className='text-sm text-[#707070]'>General Practitioner</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-3 pl-3'>
                            <button className='ml-auto'>
                                {settingIcon}
                            </button>
                            <button className='ml-auto'>
                                {moreIcon}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div className="py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}

export default Header
