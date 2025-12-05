"use client"

import { useState } from 'react'
import './styles.css'
import { TiTickOutline } from 'react-icons/ti'

export default function CopyBtn({ nodes } : {nodes: React.ReactNode[]}) {

    const [copied, setCopied] = useState(false)

    const copy = () => {
        setCopied(true)
        // @TODO - fix this type error... or the implementation here altogether - maybe select the parent 
        // and then the child with the code-block-contents/text/whatever class
        const textContent = nodes.map(node => node?.props.children)
        const finalString = textContent.join('\n').trim()

        navigator.clipboard.writeText(finalString)

        setTimeout(() => {
            setCopied(false)
        } ,1500)

        
    }

    return (
        <button onClick={copy} className="copy-btn">{copied ? 'copied' : 'copy'} {copied && <TiTickOutline size={20}/>}</button>
    )
}

