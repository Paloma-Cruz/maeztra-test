export interface DrawerProps {
    direction: string
    children: React.ReactComponentElement
    open: boolean
    control: (value) => void
}
