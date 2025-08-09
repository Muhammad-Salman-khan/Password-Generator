import SpotlightCard from "./SpotlightCard/SpotlightCard.jsx";

const PassGen = ({
  length,
  addNumbers,
  addSpecialChar,
  Copied,
  CopyToClipBoard,
  LengthChange,
  Password,
  PasswordRef,
  toggleTonumber,
  toggleToSpecial,
}) => {
  return (
    <div className="flex justify-center items-center max-w-screen min-h-screen bg-stone-950">
      <SpotlightCard
        className="relative w-full max-w-md p-6 backdrop-blur-xl border border-white hover:border-purple-700 duration-150 bg-slate-950 rounded-2xl shadow-2xl m-4"
        spotlightColor="rgba(168, 85, 247, 0.25)"
      >
        <h1 className="text-3xl font-extrabold text-center text-white mb-6 tracking-wide">
          🔐 Password Generator
        </h1>
        <div className="mb-4">
          <label
            htmlFor="length"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            Password Length
          </label>
          <input
            type="range"
            min={0}
            max={20}
            value={length}
            onChange={LengthChange}
            className="w-full duration-100 scroll-smooth accent-blue-700 cursor-pointer"
          />
          <div className="text-sm text-right mt-1 text-gray-400">
            Length: <span className="font-semibold text-white">{length}</span>
          </div>
        </div>

        {/* Options */}
        <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-gray-200">
          <label
            htmlFor="numberAllowed"
            className="flex items-center gap-3 cursor-pointer group"
          >
            <input
              id="numberAllowed"
              type="checkbox"
              defaultChecked={addNumbers}
              onChange={toggleTonumber}
              className="peer hidden"
            />
            <div className="w-5 h-5 rounded-md border-2 border-blue-600 bg-gray-800 peer-checked:bg-blue-600 peer-checked:border-blue-500 transition duration-150 flex items-center justify-center">
              <svg
                className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span>Numbers</span>
          </label>

          <label
            htmlFor="charInput"
            className="flex items-center gap-3 cursor-pointer group"
          >
            <input
              type="checkbox"
              id="charInput"
              defaultChecked={addSpecialChar}
              onChange={toggleToSpecial}
              className="peer hidden"
            />
            <div className="w-5 h-5 rounded-md border-2 border-blue-600 bg-gray-800 peer-checked:bg-blue-600 peer-checked:border-blue-500 transition duration-150 flex items-center justify-center">
              <svg
                className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span>Symbols</span>
          </label>
        </div>

        {/* Output */}
        <div className="flex items-center justify-between px-3 py-2 mt-4 bg-white/10 backdrop-blur-lg rounded-xl text-sm border border-gray-700 shadow-md">
          <input
            value={Password}
            readOnly
            ref={PasswordRef}
            placeholder="Password"
            className="bg-transparent text-white w-full focus:outline-none border-none placeholder-gray-400"
          />
          <button
            onClick={CopyToClipBoard}
            className="text-blue-400 hover:underline text-sm ml-4 shrink-0"
          >
            {Copied ? "Copied" : "copy"}
          </button>
        </div>

        {/* Strength */}
        <p
          className={
            length > 4
              ? "text-center text-xl font-extrabold font-mono pt-3 text-green-600"
              : "text-center text-xl font-extrabold font-mono pt-3 text-red-800"
          }
        >
          {length > 4 ? `Password is Strong` : "Password is weak"}
        </p>
      </SpotlightCard>
    </div>
  );
};

export default PassGen;
