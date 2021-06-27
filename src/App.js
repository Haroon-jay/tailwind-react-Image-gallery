import React,{useEffect,useState} from "react"
import ImageCard from "./components/ImageCard.js"
import ImageSearch from "./components/ImageSearch"

function App() {
const [images,setImages]=useState([])
const [isLoading,setLoading]=useState(true)
const [term,setTerm]=useState("")

useEffect(()=>{
fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API}&q=${term}&image_type=photo&pretty=true`).then(
  d=>d.json()).then(
    da=>{setImages(da.hits)
    setLoading(false)
    }
  ).catch(e =>console.log(e))
},[term])
  return (
    <div className="container mx-auto">
      <ImageSearch searchText={(t)=>setTerm(t)}/>
      {!isLoading && !images.length && <h1 className="text-5xl text-center mx-auto mt-32">No images Found!</h1>}
      <div className="grid grid-cols-3 gap-4">
{images.map(img=>{
 return( <ImageCard key={img.id} img={img}></ImageCard>)
})}
      </div>
  </div>
  );
}

export default App;
