"use client";
import { signOut } from "next-auth/react";
import router, { useRouter } from "next/router";
import Link from "next/link";
import { ImUser } from "react-icons/im";

export async function logout() {
  console.log("Sign out successful!");
  await signOut();
  router.push("/api/auth/signin");
}

export const Header = () => {
  return (
    <header className="antialiased">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex justify-start items-center">
            <button
              id="toggleSidebar"
              aria-expanded="true"
              aria-controls="sidebar"
              className="hidden p-2 mr-3 text-gray-600 rounded cursor-pointer lg:inline hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h14M1 6h14M1 11h7"
                />
              </svg>
            </button>
            <a href="" className="flex mr-4">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Harbor
              </span>
            </a>
            <form action="#" method="GET" className="hidden lg:block lg:pl-2">
              <label htmlFor="topbar-search" className="sr-only">
                Search
              </label>
              <div className="relative mt-1 lg:w-96">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  name="email"
                  id="topbar-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-9 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Search"
                />
              </div>
            </form>
          </div>
          <div className="flex items-center lg:order-2">
            <div className="relative hidden lg:block ml-6">
              <div className="flex gap-2">
                <Link
                  href="/all"
                  className="border border-blue-500 text-blue-500 rounded-md px-4 py-2 hover:bg-blue-500 hover:text-white hover:border-transparent transition-colors duration-300"
                >
                  All-Posts
                </Link>
                <Link
                  href="/create-post"
                  className="border border-blue-500 text-blue-500 rounded-md px-4 py-2 hover:bg-blue-500 hover:text-white hover:border-transparent transition-colors duration-300"
                >
                  Create-post
                </Link>

                <Link
                  href={"/api/auth/signin"}
                  className="border border-blue-500 text-blue-500 rounded-md px-4 py-2 hover:bg-blue-500 hover:text-white hover:border-transparent transition-colors duration-300 px-2"
                  onClick={logout}
                >
                  SignIn/SignOut
                </Link>
              </div>
            </div>
            <div className="relative ml-12">
              <div>
                <ImUser
                  className="bg-white border rounded-full cursor-pointer"
                  style={{ fontSize: "24px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
