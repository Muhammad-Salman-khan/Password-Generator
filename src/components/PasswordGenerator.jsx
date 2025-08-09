import { useRef, useCallback, useEffect, useState } from "react";
import PassGen from "./PassGen.jsx";
const PasswordGenerator = () => {
  const [length, setlength] = useState(4);
  const [addNumbers, setNumbers] = useState(false);
  const [addSpecialChar, setSepChar] = useState(false);
  const [Password, setPassword] = useState("");
  const [Copied, setCopy] = useState(false);
  const Passwordref = useRef(null);
  const PasswordGenerate = useCallback(() => {
    let Password = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (addNumbers) str += `1234567890`;
    if (addSpecialChar) str += `!@#$%^&*()_+-=/.`;
    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);
      Password += str.charAt(char);
    }
    setPassword(Password);
  }, [length, addNumbers, addSpecialChar, setPassword]);
  useEffect(() => {
    PasswordGenerate();
  }, [length, addNumbers, addSpecialChar, setPassword, PasswordGenerate]);
  const CopyToClipBoard = () => {
    window.navigator.clipboard.writeText(Password);
    setCopy(true);
    setTimeout(() => setCopy(false), 1000);
  };
  const LengthtoCheck = (e) => {
    setlength(Number(e.target.value));
  };

  return (
    <div>
      <PassGen
        length={length}
        addNumbers={addNumbers}
        addSpecialChar={addSpecialChar}
        Copied={Copied}
        CopyToClipBoard={CopyToClipBoard}
        LengthChange={LengthtoCheck}
        Password={Password}
        PasswordRef={Passwordref}
        toggleTonumber={() => setNumbers((e) => !e)}
        toggleToSpecial={() => setSepChar((e) => !e)}
      />
    </div>
  );
};

export default PasswordGenerator;
