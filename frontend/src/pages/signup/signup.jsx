import React from "react";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-100">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SignUp
          <span className="text-blue-500"> ChatApp</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text text-white">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text text-white">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label cursor-pointer">
              <span className="text-base label-text text-white">Gender</span>
            </label>
            <div>
              <label className="label cursor-pointer">
                <span className="label-text font d">Male</span>
                
                <input
                  type="radio"
                  name="gender"
                  className="radio radio-warning"
                />
              </label>
              <label className="label cursor-pointer">
                <span className="label-text font d">Female</span>
                <input
                  type="radio"
                  name="gender"
                  className="radio radio-secondary"
                />
              </label>
            </div>
          </div>
          <a
            href="#"
            className="text-sm hover:underline hover:text-green-600 mt-2 inline-block font"
          >
            Already have an account?
          </a>
          <div>
            <div className=" pt-4 center display: flex; justify-content: center; align-item: center;">
              <button className="btn btn-active btn-neutral">SignUp</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
