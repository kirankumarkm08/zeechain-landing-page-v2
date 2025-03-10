"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { subscribeToNewsletter } from "@/app/actions/Newsletter";
import Image from "next/image";
import Send from "/public/assets/send.svg";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="bg-button_bg p-2 md:px-6 md:py-3 rounded-full text-white-300 uppercase font-semibold text-sm md:text-16 flex items-center"
      disabled={pending}
    >
      {pending ? (
        <div className="w-4 h-4 border-2 border-white-300 border-t-transparent rounded-full animate-spin" />
      ) : (
        <>
          <Image
            src={Send}
            alt="send image"
            className="md:hidden   "
            width={20}
            height={20}
          />
          <span className="hidden md:inline ">Subscribe Now</span>
        </>
      )}
    </button>
  );
}

const initialState = {
  success: false,
  message: "",
};

const Newsletter = () => {
  const [state, formAction] = useActionState(
    subscribeToNewsletter,
    initialState
  );

  return (
    <div className="mx-auto  py-5 md:py-20 relative">
      <Image
        src={"/assets/background-assets/Circle.svg"}
        alt={"Circle"}
        width={290}
        height={290}
        className=" absolute w-[100px] h-[100px] md:w-auto md:h-auto "
      />
      <div className="flex flex-col items-center pt-10 relative">
        <h1 className="bg-text-top-buttom-linear bg-clip-text text-transparent text-20 md:text-40 font-semibold font-display leading-166">
          Newsletter Section
        </h1>
        <h3 className="font-light text-14 md:text-24 leading-60 text-white-50 font-inter">
          Subscribe to our newsletter
        </h3>
        <form
          action={formAction}
          className="mt-10 font-inter gap-2 flex relative items-center justify-center"
        >
          <input
            type="email"
            name="email"
            className="bg-black rounded-full px-6 py-4 w-[300px] md:w-[400px] outline-none text-white-300 relative"
            placeholder="Enter your email"
            required
          />
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 md:relative md:right-auto md:top-auto md:transform-none">
            <SubmitButton />
          </div>
        </form>
        {state?.message && (
          <p
            className={`mt-4 text-sm ${
              state.success ? "text-green-500" : "text-red-500"
            }`}
          >
            {state.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default Newsletter;
