import React from "react";
import { Link } from "react-router-dom";
import { BsFillTaxiFrontFill } from "react-icons/bs";

export default function SignUp() {
  return (
    <div className="">
      <section className="min-h-[90vh] flex items-center justify-center px-5 py-5 md:py-0">
        <div className="flex justify-center items-center lg:h-fit border rounded overflow-hidden w-fit">
          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-12 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:w-full">
              <div className="w-full flex justify-center">
                <BsFillTaxiFrontFill className="text-6xl " />
              </div>
              <form action="#" className="mt-8 grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="FirstName"
                    className="block text-sm font-medium text-stone-200"
                  >
                    First Name
                  </label>

                  <input
                    type="text"
                    id="FirstName"
                    name="first_name"
                    className="mt-1 p-2 outline-none w-full rounded-md border bg-transparent text-sm text-stone-300 shadow-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="LastName"
                    className="block text-sm font-medium text-stone-200"
                  >
                    Last Name
                  </label>

                  <input
                    type="text"
                    id="LastName"
                    name="last_name"
                    className="mt-1 p-2 outline-none w-full rounded-md border bg-transparent text-sm text-stone-300 shadow-sm"
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="Email"
                    className="block text-sm font-medium text-stone-200"
                  >
                    {" "}
                    Email{" "}
                  </label>

                  <input
                    type="email"
                    id="Email"
                    name="email"
                    className="mt-1 p-2 outline-none w-full rounded-md border bg-transparent text-sm text-stone-300 shadow-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="Password"
                    className="block text-sm font-medium text-stone-200"
                  >
                    {" "}
                    Password{" "}
                  </label>

                  <input
                    type="password"
                    id="Password"
                    name="password"
                    className="mt-1 p-2 outline-none w-full rounded-md border bg-transparent text-sm text-stone-300 shadow-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="PasswordConfirmation"
                    className="block text-sm font-medium text-stone-200"
                  >
                    Password Confirmation
                  </label>

                  <input
                    type="password"
                    id="PasswordConfirmation"
                    name="password_confirmation"
                    className="mt-1 p-2 outline-none w-full rounded-md border bg-transparent text-sm text-stone-300 shadow-sm"
                  />
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button className="inline-block shrink-0 rounded-md border border-white hover:bg-stone-50 hover:text-black px-8 py-2 text-sm font-medium text-white transition hover:bg-transparent focus:outline-none focus:ring active:text-blue-500">
                    Log In
                  </button>

                  <p className="mt-4 text-sm text-stone-300 sm:mt-0">
                    Doesn't Have an Account ?
                    <Link to={"/signup"} className="text-blue-700 underline">
                      Register
                    </Link>
                    .
                  </p>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
}
