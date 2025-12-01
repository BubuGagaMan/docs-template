"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import "./styles.css"
import { RiArrowRightSLine } from "react-icons/ri";
import { LinkProps } from "./types";

type Props = {
    href: string
    label: string
    linkHeader: string
    currentSecondaryLink: string
    currentTertiaryLink: string
    tertiaryLinks: LinkProps[]
}

export default function SideNavGroup({ href, label, linkHeader, currentSecondaryLink, currentTertiaryLink, tertiaryLinks }: Props) {

    const [open, setOpen] = useState(false)

    const links = tertiaryLinks.map((link: LinkProps) => (
        <Link
            className={`tertiary-link ${currentTertiaryLink === link.linkHeader && currentSecondaryLink === linkHeader ? 'tertiary-link-active' : ''}`}
            key={link.label} href={link.href}>{link.label}
        </Link>
    ))
    useEffect(() => {
        setOpen(linkHeader === currentSecondaryLink ? true : false)
    }, [currentSecondaryLink])

    const expand = () => {
        setOpen(prevState => !prevState)
    }

    return (
        <div >
            <div
                className={`secondary-link ${currentSecondaryLink === linkHeader ? 'secondary-link-active' : ''}`}
                onClick={expand}
            >
                {tertiaryLinks.length > 0 && <RiArrowRightSLine color={'red'} size={25} style={{
                    transform: `rotate(${open ? 90 : 0}deg)`,
                    transition: 'all 0.25s ease'
                }}
                    className={`expansion-arrow ${open ? 'expasion-arrow-open' : ''}`}

                />}
                <Link className="secondary-link-text" href={href}>{label}</Link>
            </div>
            {open && <div className="grid sub-topics-container">{links}</div>}
        </div>
    );
}
