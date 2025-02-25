import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="h-screen text-white-200 flex  flex-col justify-center items-center">
      page is not found
      <Link href={"/"}>please click here to home page</Link>
    </div>
  );
};

export default page;
