import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsFillTaxiFrontFill } from "react-icons/bs";
import { useAuth } from "../context/AuthContext";
import { useState, useRef } from "react";
import { LuShieldClose } from "react-icons/lu";

export default function SignUp() {
  let { login, currentUser } = useAuth();
  let [isErr, setIsErr] = useState({
    status: false,
    content: "",
  });
  let navigate = useNavigate();
  let email = useRef();
  let password = useRef();
  useEffect(() => {
    if (currentUser) {
      navigate("/");
      return;
    }
  });
  async function handleClick(e) {
    e.preventDefault();
    if (!password.current.value || !email.current.value) {
      setIsErr({ status: true, content: "Please fill in all fields" });
      return;
    }

    let response = await login(email.current.value, password.current.value);
    console.log(response);
    if (!response.user && !response?.ok) {
      setIsErr({ status: true, content: "email or password is incorrect!" });
      return;
    }

    navigate("/");
  }

  return (
    <div className="">
      <section className="min-h-[90vh] flex items-center justify-center px-5 py-5 md:py-0">
        <div className="flex justify-center items-center lg:h-fit border rounded overflow-hidden w-fit">
          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-12 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:w-full">
              {isErr.status && (
                <p className="flex items-center gap-2">
                  <LuShieldClose />
                  {isErr.content}
                </p>
              )}
              <div className="w-full flex justify-center">
                <BsFillTaxiFrontFill className="text-6xl " />
              </div>
              <form action="#" className="mt-8 grid grid-cols-6 gap-6">
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

                <div className="col-span-6 sm:col-span-6">
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

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                    className="rounded-md border border-yellow-500 hover:bg-yellow-500 hover:text-black px-8 py-2 text-sm font-medium text-yellow-400 transition"
                    onClick={handleClick}
                  >
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
