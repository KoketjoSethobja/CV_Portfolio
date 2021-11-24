import React, { useState } from 'react';
import { Transition } from "@headlessui/react";
 
const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full md:fixed h-1/6">
            <nav>
            </nav>
        </div>
    )
}
 
export default Navbar;