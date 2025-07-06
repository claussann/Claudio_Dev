import { useEffect, useState } from "react"

type Quote = {
    quote: string,
    author: string
}
function Aphorism(){
    const [randomQuote, setRandomQuote] = useState<Quote | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dummyjson.com/quotes')
                const json = await response.json()
                setRandomQuote(json.quotes[Math.floor(Math.random() * json.quotes.length)])
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])
    
    if(!randomQuote) return <p>Loading...</p>


    return(

    <div className="col-12 col-md-6 mt-5">
        <p style={{fontStyle: "italic", fontSize: "18px"}}>"{randomQuote.quote}" - {randomQuote.author}</p>
    </div>
)
}

export default Aphorism