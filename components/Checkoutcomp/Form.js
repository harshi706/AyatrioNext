'use client'
import { useRouter } from "next/navigation";
import React from "react";
// import { useFormContext } from "./FormContext";
export default function Form() {
  // const { updateFormData } = useFormContext();
  // const navigate = useNavigate();
  const router = useRouter();
  const [form, setForm] = React.useState({
    first: "",
    last: "",
    add1: "",
    add2: "",
    add3: "",
    postal: "",
    local: "",
    state: "",
    country: "",
    email: "",
    number: "",
    pan: "",
  });
  console.log(form);
  function handlefunc(event) {
    setForm((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handleData(event) {
    event.preventDefault();
    console.log(form);
    updateFormData(form);
    // navigate("/shipping");
    router.push("/shipping");
  }

  return (
    <>
      <form onSubmit={handleData} className="w-1/2">
        <h3 className="mt-12">Enter your name and address:</h3>
        <div className="mb-4">
          <label htmlFor="first" className="form-label relative"></label>
          <br />
          <input
            type="text"
            onChange={handlefunc}
            name="first"
            placeholder="first name"
            value={form.first}
            className="px-5 form-input border border-gray-600 h-10 sm:w-96 w-[70vw] rounded-md" //for controlled components
          />
        </div>
        <div className="mb-4">
          <label htmlFor="last" className="form-label relative"></label>
          <br />
          <input
            type="text"
            onChange={handlefunc}
            name="last"
            placeholder="Last Name"
            value={form.last}
            className="px-5 form-input border border-gray-600 h-10 sm:w-96 w-[70vw] rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="add1" className="form-label relative"></label>
          <br />
          <input
            type="text"
            onChange={handlefunc}
            name="add1"
            placeholder="Address Line 1"
            value={form.add1}
            className="px-5 form-input border border-gray-600 h-10 sm:w-96 w-[70vw] rounded-md"
          />

          <h6 className="text-xs text-blue-600 ">
            We do not ship to P.O. boxes
          </h6>
        </div>
        <div className="mb-4">
          <label htmlFor="add2" className="form-label relative"></label>
          <br />
          <input
            type="text"
            onChange={handlefunc}
            name="add2"
            placeholder="Address Line 2"
            className="px-5 form-input border border-gray-600 h-10 sm:w-96 w-[70vw] rounded-md"
            value={form.add2}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="add3" className="form-label relative"></label>
          <br />
          <input
            type="text"
            onChange={handlefunc}
            name="add3"
            placeholder="Address Line 3"
            value={form.add3}
            className="px-5 form-input border border-gray-600 h-10 sm:w-96 w-[70vw] rounded-md"
          />
        </div>
        <div className="mb-4 flex space-x-4">
          <div>
            <label htmlFor="postal" className="form-label relative"></label>
            <br />
            <input
              type="number"
              placeholder="Postal Code"
              onChange={handlefunc}
              name="postal"
              value={form.postal}
              className="px-5 form-input border border-gray-600 h-10 w-[37vw] rounded-md"
            />
          </div>
          <div className="relative">
            <label htmlFor="local" className="form-label relative"></label>
            <br />
            <input
              type="text"
              placeholder="Locality"
              onChange={handlefunc}
              name="local"
              value={form.local}
              className="px-5 form-input border border-gray-600 h-10 w-[37vw] rounded-md"
            />
          </div>
        </div>
        <div className="mb-4 flex space-x-4">
          <div>
            <label htmlFor="local" className="form-label relative"></label>
            <br />
            <input
              type="text"
              onChange={handlefunc}
              placeholder="State/Territory"
              name="state"
              value={form.state}
              className="px-5 form-input border border-gray-600 h-10 w-[37vw] rounded-md"
            />
          </div>
          <div className="relative">
            <label htmlFor="country" className="form-label relative"></label>
            <br />
            <input
              type="text"
              onChange={handlefunc}
              placeholder="Country"
              name="country"
              value={form.country}
              className="px-5 form-input border border-gray-600 h-10 w-[37vw] rounded-md relative"
            />
          </div>
        </div>
        <br />
        <div className="mb-4">
          <h3>What's your contact information?</h3>
          <label htmlFor="email" className="form-label relative"></label>
          <br />
          <input
            type="email"
            placeholder="Email"
            onChange={handlefunc}
            name="email"
            value={form.email}
            className="px-5 form-input border border-gray-600 h-10 sm:w-96 w-[70vw] rounded-md "
          />

          <h6 className="text-xs w-[70vw]">
            A confirmation mail will be sent after checkout.
          </h6>
        </div>
        <div className="mb-4">
          <label htmlFor="number" className="form-label relative"></label>
          <br />
          <input
            type="number"
            onChange={handlefunc}
            name="number"
            placeholder="Mobile Number"
            value={form.number}
            className="px-5 form-input border border-gray-600 h-10 sm:w-96 w-[70vw] rounded-md"
          />

          <h6 className="text-xs w-[70vw]">
            A carrier might contact you to confirm delivery.
          </h6>
        </div>
        <div className="mb-4">
          <h3>What's your PAN?</h3>
          <label htmlFor="pan" className="form-label relative"></label>
          <br />
          <input
            type="text"
            placeholder="PAN"
            onChange={handlefunc}
            name="pan"
            value={form.pan}
            className="px-5 form-input border border-gray-600 h-10 sm:w-96 w-[70vw] rounded-md"
          />

          <h6 className="text-xs w-[70vw]">
            Enter your PAN to enable payment with UPI,Net Banking or local card
            methods.
          </h6>
        </div>
        <br />
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            checked={form.value}
            name="isForm"
            onChange={handlefunc}
            className="mr-2"
          />
          <span>
            <h6 className="text-xs w-[70vw]">
              I have read and consent to eShopWorld processing my info in
              accordance with the &nbsp;
              <a href="#" className="text-blue-500">
                Privacy Statement
              </a>{" "}
              and &nbsp;
              <a href="#" className="text-blue-500">
                Cookie Policy
              </a>
              . "eShopWorld is a trusted Nike partner".
            </h6>
          </span>
        </div>
        <br />
        <button className="mt-4 bg-black text-white py-2 px-4 rounded-full sm:w-96 w-[70vw] ">
          Continue
        </button>
      </form>
      <br />
      <br />
      <hr />
    </>
  );
}
