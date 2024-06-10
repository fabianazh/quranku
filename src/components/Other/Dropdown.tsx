'use client'

import {
    useState,
    createContext,
    useContext,
    Fragment,
    PropsWithChildren,
    Dispatch,
    SetStateAction,
} from 'react'
import Link from 'next/link'
import { LinkProps } from 'next/link'
import { Transition } from '@headlessui/react'

const DropDownContext = createContext<{
    open: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
    toggleOpen: () => void
}>({
    open: false,
    setOpen: () => {},
    toggleOpen: () => {},
})

export default function Dropdown({ children }: PropsWithChildren) {
    const [open, setOpen] = useState(false)

    const toggleOpen = () => {
        setOpen((previousState) => !previousState)
    }

    return (
        <DropDownContext.Provider value={{ open, setOpen, toggleOpen }}>
            <div className="relative">{children}</div>
        </DropDownContext.Provider>
    )
}

function Trigger({ children }: PropsWithChildren) {
    const { open, setOpen, toggleOpen } = useContext(DropDownContext)

    return (
        <>
            <div onClick={toggleOpen}>{children}</div>

            {open && (
                <div
                    className="fixed inset-0 z-40"
                    onClick={() => setOpen(false)}
                ></div>
            )}
        </>
    )
}

function Content({
    align = 'right',
    width = 'sm',
    contentClasses = 'p-1.5 bg-white',
    children,
}: PropsWithChildren<{
    align?: 'left' | 'right'
    width?: 'xs' | 'sm' | 'md'
    contentClasses?: string
}>) {
    const { open, setOpen } = useContext(DropDownContext)

    let alignmentClasses = 'origin-top'

    if (align === 'left') {
        alignmentClasses = 'ltr:origin-top-left rtl:origin-top-right start-0'
    } else if (align === 'right') {
        alignmentClasses = 'ltr:origin-top-right rtl:origin-top-left end-0'
    }

    let widthClasses = ''

    if (width === 'xs') {
        widthClasses = 'min-w-[5rem]'
    } else if (width === 'sm') {
        widthClasses = 'min-w-[7rem] lg:min-w-[9rem]'
    } else if (width === 'md') {
        widthClasses = 'min-w-[8rem] lg:min-w-[10rem]'
    }

    return (
        <>
            <Transition
                as={Fragment}
                show={open}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <div
                    className={`absolute z-[5000] mt-1 border whitespace-nowrap rounded-md shadow-lg ${alignmentClasses} ${widthClasses}`}
                    onClick={() => setOpen(false)}
                >
                    <div
                        className={`rounded-md p-1.5 bg-white whitespace-nowrap ring-1 ring-black ring-opacity-5 flex flex-col gap-1 ${contentClasses} z-50`}
                    >
                        {children}
                    </div>
                </div>
            </Transition>
        </>
    )
}

function DropdownLink({
    className = '',
    children,
    active = false,
    ...props
}: LinkProps & {
    className?: string
    children: React.ReactNode
    active?: boolean
}) {
    const { open, setOpen } = useContext(DropDownContext)
    return (
        <>
            <Link
                {...props}
                onClick={() => setOpen(false)}
                className={`block w-full z-50 rounded font-medium px-3 lg:px-4 py-1.5 lg:py-2 text-start text-xs lg:text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition-all duration-200 ease-in-out ${className} ${
                    active ? 'bg-stone-100/80 hover:bg-stone-200' : ''
                }`}
            >
                {children}
            </Link>
        </>
    )
}

function DropdownButton({
    className = '',
    children,
    active = false,
    handleClick,
    value,
    ...props
}: {
    className?: string
    children: React.ReactNode
    handleClick: (value: string) => void
    value: string
    active?: boolean
}) {
    const { open, setOpen } = useContext(DropDownContext)
    return (
        <>
            <button
                type="button"
                onClick={() => {
                    setOpen(false)
                    handleClick(value)
                }}
                className={`block w-full z-50 rounded font-bold px-4 py-2 text-start text-xs lg:text-sm leading-5 text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition-all duration-200 ease-in-out ${className} ${
                    active ? 'bg-stone-100 hover:bg-stone-200' : ''
                }`}
            >
                {children}
            </button>
        </>
    )
}

Dropdown.Trigger = Trigger
Dropdown.Content = Content
Dropdown.Link = DropdownLink
Dropdown.Button = DropdownButton
