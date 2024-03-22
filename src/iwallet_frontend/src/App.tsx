import { useState } from "react";
// import { iwallet_backend } from "declarations/iwallet_backend";
import { SignIn } from './components/Forms/SignIn/Index'
import {SignUp} from "./components/Forms/SignUp/Index";

function App() {
  const [registrationMessage, setRegistrationMessage] = useState("");
  const [lookupResult, setLookupResult] = useState("");

  // async function handleRegister(event) {
  //   event.preventDefault();
  //   const email = event.target.elements.email.value;
  //   const name = event.target.elements.name.value;
  //   const message = await iwallet_backend.register(email, name);
  //   setRegistrationMessage(message);
  //   return false;
  // }
  //
  // async function handleLookup(event) {
  //   event.preventDefault();
  //   const email = event.target.elements.lookupEmail.value;
  //   const result = await iwallet_backend.lookup(email);
  //   if (result.ok) {
  //     setLookupResult(`Name: ${result.ok}`);
  //   } else {
  //     setLookupResult(`Error: ${result.err}`);
  //   }
  //   return false;
  // }

  const onSignIn = (values: any) => {
    console.log('onSignIn', values)
  }

  const onSignUp = (values: any) => {
    console.log('onSignUp', values)
  }

  return (
    <main className="flex justify-center items-center h-[100vh]">
      <div className="w-full max-w-md px-8">
        <SignUp onSignUp={onSignUp} />
      </div>
    </main>
  );
}

export default App;
