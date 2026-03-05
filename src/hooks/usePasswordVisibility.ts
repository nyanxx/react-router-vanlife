import { useState } from "react";

/**
 * const { isPasswordVisible, inputType, togglePasswordVisibility } = usePasswordVisibility();
 * const passwordField = usePasswordVisibility();
 * const confirmPasswordField = usePasswordVisibility();
 */
export function usePasswordVisibility() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    function togglePasswordVisibility() {
        setIsPasswordVisible(prev => !prev);
    }

    return {
        isPasswordVisible,
        inputType: isPasswordVisible ? "text" : "password",
        togglePasswordVisibility,
    };
}

// <input
//     id="password"
//     name="password"
//     className="py-2 px-[0.6rem] pr-9 rounded-md border border-[#696969] border-solid w-full"
//     type={inputType}
//     placeholder="Password"
//     aria-label="Enter your password"
//     required
// />

// <button
//     className="absolute cursor-pointer flex justify-center items-center right-3 top-1/2 -translate-y-1/2"
//     type="button"
//     onClick={togglePasswordVisibility}>
//     {!isPasswordVisible ? <EyeOpenIcon /> : <EyeNoneIcon />}
// </button>