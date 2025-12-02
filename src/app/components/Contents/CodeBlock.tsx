import { PropsWithChildren } from "react"
import CopyBtn from "./CopyBtn"

type Props = PropsWithChildren<{
    language: string;
    children: React.ReactNode[]
}>

export default function CodeBlock({ children, language }: Props) {

    return (
        <div className="code-block-container">
            <div className="code-block-header"><h3 >{language}</h3> 
            <CopyBtn nodes={children}/></div>
            <div className="code-block-code-wrapper">{children}</div>
        </div>
    )
}

