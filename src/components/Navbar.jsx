import React from "react";

const Navbar = () => {
    return <div className="flex justify-between py-2">

        <h1 className="text-red-600 pl-4 font-bold text-3xl cursor-pointer">NETFLIX</h1>

        <div className="flex pr-4">
            <button className="text-white mr-4">Sign in</button>
            <button className="bg-red-600 text-white rounded-lg py-2 px-4 ">Sign up</button>
        </div>

    </div>;
};

export default Navbar;
