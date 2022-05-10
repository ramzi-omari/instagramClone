import Image from "next/image"
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline"
import { HomeIcon } from "@heroicons/react/solid"
import { useSession } from "next-auth/react"

const Header = () => {
  const { data: session } = useSession()

  console.log("ss" + session)

  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
        <div className="relative hidden lg:inline-grid w-24 cursor-pointer">
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          ></Image>
        </div>
        <div className="relative w-10 h-10 lg:hidden self-center flex-shrink-0 cursor-pointer">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* center */}
        <div className="max-width-xm">
          <div className="relative mt-1 p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500"></SearchIcon>
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black rounded-md focus:border-black"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        {/* right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn"></HomeIcon>
          <MenuIcon className="h-6 md:hidden cursor-pointer"></MenuIcon>

          <div className="relative navBtn">
            <PaperAirplaneIcon className="navBtn rotate-45"></PaperAirplaneIcon>
            <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">
              3
            </div>
          </div>
          <PlusCircleIcon className="navBtn"></PlusCircleIcon>
          <UserGroupIcon className="navBtn"></UserGroupIcon>
          <HeartIcon className="navBtn"></HeartIcon>

          <img
            className="rounded-full w-10 h-10 cursor-pointer"
            src="https://img-19.commentcamarche.net/WNCe54PoGxObY8PCXUxMGQ0Gwss=/480x270/smart/d8c10e7fd21a485c909a5b4c5d99e611/ccmcms-commentcamarche/20456790.jpg"
          ></img>
        </div>
      </div>
    </div>
  )
}

export default Header
