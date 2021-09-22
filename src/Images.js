import React, {useState} from "react"
import Card from "./Card"


function Images(){
    
    const [image, setImage] = useState('')
    
    
    const findImages =  async(e) => {
        e.preventDefault()
        try{
            const res = await fetch("https://api.nasa.gov/planetary/apod?api_key=hzjhih8CQb6ru1XpqFN8CJqek69ltAcb90eWsMFG")
            const data = await res.json()
            console.log(data)
            setImage(data)
        }catch(err){
            console.log(err)
        }
    }

        return(
            <>
            <form className="form" onSubmit={findImages}>
                <button className="button" type="submit">Click here to see the Nasa Picture of the day</button>
            </form>
            <div className="card-list">
                    <Card image={image} />
            </div>  
            </>
        )
    }

export default Images


// class Images extends Component {
//     constructor(){
//         super()
//         this.state = {
//             image: []
//         }
//     }

//     componentDidMount(){
//         fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=hzjhih8CQb6ru1XpqFN8CJqek69ltAcb90eWsMFG")
//         .then(res => res.json())
//         .then(data => this.setState({images: data}))
//     }



//     render(){
//         return (
//             <div>
                
//             </div>
//         )
//     }
// }

// export default Images;