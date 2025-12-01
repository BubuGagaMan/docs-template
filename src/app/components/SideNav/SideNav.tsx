"use client"

import './styles.css'
import { usePathname } from "next/navigation";
import SideNavGroup from "./SideNavGroup";
import Link from 'next/link';
import { secondaryLink } from './types';

type Props = {
    // note that the primary links reside in the main, top nav bar...
    secondaryLinks: secondaryLink[]
}

export default function SideNav({ secondaryLinks }: Props) {

    const path = usePathname()
    const pathSplit = path.split('/')

    // this might require changing if the primary link still needs a - in the title...
    const currentPrimaryLinkLabel = pathSplit[1].split('-').join(' ')
    const currentSecondaryLink = pathSplit[2]
    const currentTertiaryLink = pathSplit[3]

    const links = secondaryLinks.map(link => (
        <SideNavGroup
            key={link.label}
            href={link.href}
            label={link.label}
            linkHeader={link.linkHeader}

            currentSecondaryLink={currentSecondaryLink}
            currentTertiaryLink={currentTertiaryLink}

            tertiaryLinks={link.tertiaryLinks}
        />
    ))

    return (
        <nav className="side-nav" >
            <h2 className='sidebar-nav-group'>
                <Link className='sidebar-nav-group-link' href={`/${pathSplit[1]}`}>
                    {currentPrimaryLinkLabel}
                </Link>
            </h2>
            {links}
        </nav>
    );
}
