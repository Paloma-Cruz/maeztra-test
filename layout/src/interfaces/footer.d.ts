export interface SessionFooterProps {
    title: string
    links: LinkType[]
}

export type LinkType = {
    path: string
    text: string
}