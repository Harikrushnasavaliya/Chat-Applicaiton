import { useState } from "react";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const { loading, signup } = useSignup();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-100">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SignUp
          <span className="text-blue-500"> ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full input input-bordered h-10"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
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
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
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
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
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
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
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
                  value="male"
                  checked={inputs.gender === "male"}
                  onChange={(e) =>
                    setInputs({ ...inputs, gender: e.target.value })
                  }
                />
              </label>
              <label className="label cursor-pointer">
                <span className="label-text font d">Female</span>
                <input
                  type="radio"
                  name="gender"
                  className="radio radio-secondary"
                  value="female"
                  checked={inputs.gender === "female"}
                  onChange={(e) =>
                    setInputs({ ...inputs, gender: e.target.value })
                  }
                />
              </label>
            </div>
          </div>
          <Link
            to={"/login"}
            className="text-sm hover:underline hover:text-green-600 mt-2 inline-block font"
          >
            Already have an account?
          </Link>
          <div>
            <div className="pt-4 center flex justify-center items-center">
              <button className="btn btn-active btn-neutral" disabled={loading}>
                {loading ? (
                  <span className="loading loading-spinner">Loading...</span>
                ) : (
                  "SignUp"
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
