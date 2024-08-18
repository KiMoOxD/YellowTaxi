import { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsFillTaxiFrontFill } from "react-icons/bs";
import { TextEffect } from "./TextEffect.tsx";
import { useAuth } from "../context/AuthContext.js";
import { LuShieldClose } from "react-icons/lu";

export default function SignUp() {
  let { signup, currentUser } = useAuth();
  let [isErr, setIsErr] = useState({
    status: false,
    content: "",
  });
  let name = useRef();
  let email = useRef();
  let password = useRef();
  let navigate = useNavigate();
  let confirmpassword = useRef();
  useEffect(() => {
    if (currentUser) {
      navigate("/");
      return;
    }
  });
  async function handleClick(e) {
    e.preventDefault();
    if (
      !password.current.value ||
      !confirmpassword.current.value ||
      !email.current.value ||
      !name.current.value
    ) {
      setIsErr({ status: true, content: "Please fill in all fields" });
      return;
    }
    if (password.current.value !== confirmpassword.current.value) {
      setIsErr({ status: true, content: 'Password doesn"t match!' });
      return;
    }
    if (password.current.value.length < 6) {
      setIsErr({
        status: true,
        content: "Password must be 6 characters or more",
      });
      return;
    }

    let response = await signup(
      email.current.value,
      password.current.value,
      name.current.value
    );

    if (response && !response?.ok) {
      setIsErr({ status: true, content: "email already in use" });
      return;
    }
    navigate("/");
  }

  return (
    <div className="">
      <section className="min-h-[90vh] flex items-center justify-center px-5 py-5 md:py-0">
        <div className="lg:grid lg:h-[600px] lg:grid-cols-12 border rounded overflow-hidden w-full md:w-3/4">
          <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className="absolute inset-0 h-full w-full object-cover opacity-80"
            />

            <div className="hidden lg:relative lg:block lg:p-12">
              <Link className="block text-white" to="/">
                <span className="sr-only">Home</span>
                <BsFillTaxiFrontFill className="text-6xl" />
              </Link>

              <TextEffect className="my-6 text-xl font-bold text-white sm:text-2xl md:text-4xl">
                Welcome to Yellow Taxi Trip Assistant
              </TextEffect>

              <TextEffect per="char" preset="fade">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
              </TextEffect>
            </div>
          </section>

          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-12 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:w-full">
              {isErr.status && (
                <p className="flex items-center gap-2">
                  <LuShieldClose />
                  {isErr.content}
                </p>
              )}
              <div className="relative -mt-16 block lg:hidden">
                <Link
                  className="inline-flex size-16 items-center justify-center rounded-full bg-white text-stone-900 sm:size-20"
                  to="/"
                >
                  <span className="sr-only">Home</span>
                  <BsFillTaxiFrontFill className="text-4xl" />
                </Link>

                <TextEffect className="my-2 text-xl font-bold text-white sm:text-2xl md:text-4xl">
                  Welcome to Yellow Taxi Trip Assistant
                </TextEffect>

                <TextEffect
                  per="char"
                  preset="fade"
                  className="mt-4 leading-relaxed text-stone-400"
                >
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
                </TextEffect>
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
                    ref={name}
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
                    ref={email}
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
                    ref={password}
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
                    ref={confirmpassword}
                  />
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                    className="inline-block shrink-0 rounded-md border border-white hover:bg-stone-50 hover:text-black px-8 py-2 text-sm font-medium text-white transition hover:bg-transparent focus:outline-none focus:ring active:text-blue-500"
                    onClick={handleClick}
                  >
                    Create an account
                  </button>

                  <p className="mt-4 text-sm text-stone-300 sm:mt-0">
                    Already have an account?
                    <Link to={"/signin"} className="text-blue-700 underline">
                      Log in
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
