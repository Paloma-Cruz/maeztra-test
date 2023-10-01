// INTERFACE
import { DrawerProps } from '../../interfaces/drawer';

import style from './style.module.scss'

const Drawer = ({children, direction, open, control}: DrawerProps) => {
    const modifyStyle = () => {
        let style = {};
        if (open) {
            if (direction === 'left') {
                style = {
                    left: 0
                }
            } else {
                style = {
                    left: '100%',
                    transform: 'translateX(-100%)',
                    display: 'flex',
                    justifyContent: 'flex-end'
                }
            }
        } else {
            if (direction === 'left') {
                style = {
                    left: '-100%'
                }
            } else {
                style = {
                    right: '-100%'
                }
            }
        }

        return style
    }

    return (
        <div style={modifyStyle()} className={style.container_overlay_drawer}>
            <div className={style.container_drawer}>
                <span className={style.close_drawer} onClick={() => control(false)}>Fechar</span>
                {children}
            </div>
        </div>
    )
}

export default Drawer