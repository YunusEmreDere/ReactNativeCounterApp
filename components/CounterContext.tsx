import React, { createContext, ReactNode, useContext, useState } from "react";

type CounterContextType = {
    count: number;
    index: number;
    setCount: (value: number) => void;
    setIndex: (value: number) => void;
};

const CounterContext = createContext<CounterContextType | undefined>(undefined);

export const CounterProvider = ({children} : {children : ReactNode}) => {
    const [count, setCount] = useState(0);
    const [index, setIndex] = useState(0);

    return(
        <CounterContext.Provider value={{count, index, setCount, setIndex}}>
            {children}
        </CounterContext.Provider>
    );
};

export const useCounter = () => {
    const context = useContext(CounterContext);
    if(!context){
        throw new Error('useCounter must be used within a CounterProvider');
    }
    return context;
};