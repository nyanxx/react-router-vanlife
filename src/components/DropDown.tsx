import { Children, cloneElement, isValidElement, useState, type JSX, type PropsWithChildren, type ReactElement, type ReactNode } from "react";

type DropDownProps = {
    svg?: boolean,
}

type DropDownOptionProps = {
    children: ReactNode
    onSelect?: () => void
}

function DropDownOption({ children, onSelect }: DropDownOptionProps) {
    return (
        <div
            onClick={onSelect}
            className="py-2 px-4 block hover:bg-button cursor-pointer"
        >
            {children}
        </div>
    )
}

export default function DropDown({
    children,
    svg = true,
}: PropsWithChildren<DropDownProps>): JSX.Element {

    const [isActive, setIsActive] = useState(false)
    const childArray = Children.toArray(children)
    const label = childArray[0] || "select"
    const options = childArray.slice(1);

    return (
        <div className="relative">

            <button
                className={`cursor-pointer bg-[#f7c59b] text-[#161616] font-bold py-2 px-[0.8rem] rounded-lg text-[0.9rem] transition hover:bg-[#ffb476]`}
                onClick={() => { setIsActive(prevState => !prevState) }}
            >
                {label}
                {
                    svg && (<svg
                        viewBox="0 0 256 256"
                        className="pl-[0.10rem] inline-block w-5 h-5 stroke-5 fill-current stroke-current"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z"></path>
                    </svg>)
                }
            </button>

            {
                isActive && (
                    <div className="absolute overflow-hidden bg-white text-nowrap shadow-lg z-99 mt-2 rounded-md">
                        {
                            options.map((child, id) =>
                                isValidElement(child)
                                    ?
                                    cloneElement(child as ReactElement<DropDownOptionProps>, {
                                        key: id,
                                        onSelect: () => {
                                            console.log("Selected:", (child as ReactElement<DropDownOptionProps>).props.children);
                                            console.log(Object.prototype.toString.call(child));
                                            setIsActive(false)
                                        }
                                    }) : null
                            )
                        }
                    </div>
                )
            }

        </div>
    )
}

DropDown.Option = DropDownOption