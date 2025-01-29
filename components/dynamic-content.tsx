import React from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface DynamicContentProps {
    content: string;
}

const DynamicContent: React.FC<DynamicContentProps> = ({ content }) => {
    return (
        <Markdown remarkPlugins={[[remarkGfm, { singleTilde: false }]]}>
            {content}
        </Markdown>
    )
}
export default DynamicContent; 