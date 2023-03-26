import React from "react";

export const GlobalStorage = React.createContext()

export const CatContent = ({children}) =>{
    const [cat, setCat] = React.useState(null)
    const [loading, setLoading] = React.useState([true])
    React.useEffect(()=>{
        async function initCat(){
            setLoading(true)
            const response = await fetch('./infoCats.json');
            const data = await response.json()
            const randomIndex = Math.floor(Math.random() * data.length)
            setCat(data[randomIndex])
            setLoading(false)
        }
        initCat()
    },[])

    async function searchCat(){
        setLoading(true)
        const response = await fetch('./infoCats.json')
        const data = await response.json()
        const randomIndex = Math.floor(Math.random() * data.length)
        setCat(data[randomIndex])
        setLoading(false)
      }

    return(
        <GlobalStorage.Provider value={{cat, loading, searchCat}}>
            {children}
        </GlobalStorage.Provider>
    )
}