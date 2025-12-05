import { PropsWithChildren } from 'react'
import './styles.css'

type Props = PropsWithChildren<{
    header: string
}>

export default function ContentsView ({ header, children }: Props) {
    return (
        <main className='contents-main-container'>
            <h1 className="contents-header">{header}</h1>
            <hr/>
            <div className='contents-children-wrapper'>
                {children}
            </div>
        </main>
    )
}