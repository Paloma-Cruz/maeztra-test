import {PropsWithChildren, createContext, useContext, useState} from 'react';

interface ProductContextInterface {
    itemsMinicart: any[],
    setItemsMinicart: (value: any) => void
}

const MinicartContext = createContext<ProductContextInterface>({} as ProductContextInterface);

export const MinicartContextProvider = ({children}: PropsWithChildren) => {
    const [itemsMinicart, setItemsMinicart] = useState<Array<any>>([]);

    return (
        <MinicartContext.Provider value={{itemsMinicart, setItemsMinicart}}>
            {children}
        </MinicartContext.Provider>
    )
}

export function useMinicart() {
    return useContext(MinicartContext)
}
