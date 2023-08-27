import React from "react";

const ViewportContext = React.createContext();



export function useViewport() {
    return React.useContext(ViewportContext)
}

export function ViewportProvider({children}){
    const [viewport, setViewport] = React.useState(getViewportSize)

    function getViewportSize(){
        const width = window.innerWidth;
        switch(true){
            case width <= 650:
                return "sm";
            case width <= 768:
                return "md";
            case width <= 1024:
                return "lg";
            default:
                return "xl";
        }

    }

    React.useEffect(()=>{
        function handleResize(){
            setViewport(getViewportSize());
        }

        handleResize();

        window.addEventListener("resize", handleResize);

        return () =>{
            window.removeEventListener("resize",handleResize)
        }

    },[])

    return <ViewportContext.Provider value={viewport}>
        {children}
        </ViewportContext.Provider>
}
