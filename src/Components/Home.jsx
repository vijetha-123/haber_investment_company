import React from "react";
import img from '../Assets/home.jpg';
import Cards from "./Cards";
import  Card  from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Contactform from "./Contactform";
import axios from "axios";
import { useEffect,useState } from "react";
import Carousel from 'react-bootstrap/Carousel';

import { createUseStyles } from "react-jss";
const section3styles=createUseStyles({
  img:{
    height:80,
    width:130,
    padding:10
  },
  div:{
    paddingLeft:250,
    paddingTop:50,
    paddingBottom:50
  }
})

export default function Home(){
  
    return(
        <div >
          <Carousel  >
      <Carousel.Item style={{height:400}}>
        <img
          className="d-block w-100"
          src={img}
          alt="First slide"
          
        />
        <Carousel.Caption style={{backgroundColor: "white",color:"black"}}>
          <h4>WE MEET YOUR FINANCIAL</h4>
          <h5>INVESTMENT NEEDS</h5>
        </Carousel.Caption>
      </Carousel.Item>
      
      
    </Carousel>
        {/* <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner" style={{height:400}}>
    <div className="carousel-item active">
      <img src={img} className="d-block w-100" alt="img"></img>
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  </div> */}
  <br></br>
 <br></br>
  <h2 style={{textAlign:"center"}}>OUR FOCUS IS OUR CLIENTS SUCCESS</h2>
  <br></br>
  <Cards></Cards>
  <Section1></Section1>
  <Section2></Section2>
  <Section3></Section3>
  <Section4></Section4>
  <Section5></Section5>
  <Section6></Section6>
</div>
    )
}

const Section1 =() =>{
    const [data, setData] = useState([])
    useEffect(() => {
    
      fetchdata()
    }, [])
    const fetchdata = async () => {
      //https://localhost:7126/api/Registrations
      const response = await axios.get("https://localhost:7281/api/Cards");
      setData(response.data)
    }

  //use Axios
//   const { data, error, loading } = useAxios({
//     url: "https://localhost:7281/api/Cards"
// })

// if (loading||!data) return "Loading......";
// if(error) return "Error loading data";

return(
  <div style={{backgroundColor:'lightgrey',height:650,width:1263,marginTop:300}}>
    <br></br><br></br>
<h2 style={{textAlign:"center"}}>ADVICE ON HOW TO MAKE WISE INVESTMENT</h2>
<p style={{textAlign:"center",marginLeft:200,marginRight:200}}>Today, one can invest in equities through a smart phone at the click of a button but, investing in a stock market is a far more intense process than most investors think.</p>
  <br></br>
  <div className="row" style={{ marginLeft:160,marginRight:150}}>
    <div className="col col-3">
  <Card style={{ width: '18rem',height:400}}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrGmrdYumSATtvz1MHWHl0vh_WUMRr19vybg&usqp=CAU" style={{padding:10,height:200}}/>
      <Card.Body>
        <Card.Title>Our Mission</Card.Title>
        <Card.Text>
        To create significant value for our stakeholders and cultivate a mutually-prosperous environment by applying.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>  
    <div className="col col-3" style={{marginLeft:60}}>
  <Card style={{ width: '18rem',height:400 }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFV7oB0DZRxy8MKRfyYOtwRBzxpDCGXZeUaQ&usqp=CAU" style={{padding:10,height:200}}/>
      <Card.Body>
      <Card.Title>Our focus</Card.Title>
      <Card.Text>
        Our intrinsic understanding of critical sectors has led to time-tested results in driving success. 
      </Card.Text>
        <Button variant="primary" style={{marginTop:25}}>Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    <div className="col col-3" style={{marginLeft:60}}>   
    
  <Card style={{ width: '18rem',height:400 }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcVFSiwWxyytq4eFohlihqpEjOccIzwd-RA&usqp=CAU" style={{padding:10,height:200}}/>
      <Card.Body>
 {data.map(x => (  
        <div>
        <Card.Title>{x.title}</Card.Title>
        <Card.Text>{x.descriptions} </Card.Text>
        <Button variant="primary"style={{marginTop:20}}>Go somewhere</Button>
        </div>
         ))} 
        
      </Card.Body>
    </Card>
   
    </div>
    </div>
    </div>
)
}


function Section2(){
  return(
    <div className="row" style={{height:300}}>
<div className="col col-6" style={{backgroundColor:'#dc630c'}}>
  <div style={{marginLeft:70,marginTop:50,color:"white"}}>
<h3 style={{marginLeft:20}} >Fresh Investment Solution!</h3>
<ul >
  <li style={{marginTop:10}}>Direct equity, commonly referred to as investing in stocks</li>
  <li style={{marginTop:10}}>A mutual fund pools investment from various individual</li>
  <li style={{marginTop:10}}>Fixed deposits are an investment option offered by banks</li>
  <li style={{marginTop:10}}>Banks and post office branches offer RDs.</li>
</ul>
<br></br>
<Button style={{backgroundColor:'#dc630c',borderColor:"white",marginLeft:30}}>Learn More</Button>
</div>
</div>
<div className="col col-6" style={{backgroundColor:'grey'}}>
  <div style={{marginLeft:70,marginTop:50,color:"white"}}>
<h3 style={{marginLeft:20}} >Learning to Save Money</h3>
<ul >
  <li style={{marginTop:10}}>Direct equity, commonly referred to as investing in stocks</li>
  <li style={{marginTop:10}}>A mutual fund pools investment from various individual</li>
  <li style={{marginTop:10}}>Fixed deposits are an investment option offered by banks</li>
  <li style={{marginTop:10}}>Banks and post office branches offer RDs.</li>
</ul>
<br></br>
<Button style={{backgroundColor:'grey',borderColor:"white",marginLeft:30}}>Learn More</Button>
</div>
</div>
    </div>
  )
}
function Section3(){
  const style=section3styles()
  return(
      <div className={style.div}>
    <img className={style.img} src="data:image/jpeg;base64,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"></img>
  <img className={style.img} src="data:image/png;base64,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"></img>
   <img className={style.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd1ItbLR9_1kVT-hdH_4HAcEb_E8eHVBAJWQ&usqp=CAU"></img>
   <img className={style.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLtPYtZPr9YcRk7uUnnLT3S_D77SGGGISUrA&usqp=CAU"></img>
   <img className={style.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPThcwPPcCkcORK8hDBNlQC6wOi39TwORLUCe2bHM2ORRkymJJZiw0wqcpKDn70IyCZZI&usqp=CAU"></img>
   <img className={style.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQChm2U8CFPHDs6Mn4MZu54wjiqayN03Ws8HA&usqp=CAU"></img>
  </div>
  
  )
}
function Section4(){
  return(
    <div  >
      {/* <img style={{width:1260,height:300,zIndex:99999,}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkwJTi5F3Y5dBaImT58LZwv_Yx4G8GMazuWg&usqp=CAU"></img> */}
    <Contactform/>
    </div>
  )
}
function Section5(){
  return(
    <div  style={{backgroundColor:"lightgrey",width:1263,height:150}}>
      <div className="row" >
        
        <div className="col col-4">
      <img style={{width:50,height:50,float:"left",marginLeft:50,marginTop:50}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF071yFTEtaMkGJFcVqgdmcjRS0s0osr1XHQ&usqp=CAU"></img>
      <p style={{float:"left",marginTop:50}}>NEW YORK 9870 ST VINCENT GLASGOW</p>
      </div>
      
        <div className="col col-4">
    <img style={{width:50,height:50,float:"left",marginLeft:50,marginTop:50}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQabkF9QpFmtDQFZ74WildWdU5uBv9UA8xs6w3y12cyft4-Pl5Xg77T1fvh0om2buPEPAo&usqp=CAU"></img>
    <p style={{float:"left",marginTop:50}}>CONTACT@DEMOLINK.ORG</p>
    </div>
    
        <div className="col col-4">
    <img style={{width:50,height:50,float:"left",marginLeft:50,marginTop:50}} src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxEHEhAQBxAODxEVDRETDg8SEBAPGRMTFREXFhURExMYHSggGCYnGxUTITEiJikrLi4uFx8zOD8tNygtLjcBCgoKDg0NDxAPFSsdFR0xKy03NzcrKy0rKy0rKysrKysrLSsrKysrKzcrKysrKysrLSsrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAQUGAgQDB//EADcQAQABAgMFBQQIBwAAAAAAAAABAgMEBREhMUFRYRITIkJxMpHB0RRSgYKSobHhIzNicsLw8f/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABYRAQEBAAAAAAAAAAAAAAAAAAARAf/aAAwDAQACEQMRAD8A/QABkAAAAAAAAAAAAAAAAAAAAAAJCQEQlEIIAaHQCAAAAAAAAAAAAAAAAAAAAAAASEgIhKIQQA0OgEAAAABMRruiZW2BynWO1itelG73ra3bi1GluIpjlEaCxkpjTeNFmuE+k060R46d3WOMM6AAIAAAAAAAAAAAAEhICISiEEANDoBAAAXOTYONO8uRt8nTqpmss0d3TTTHCmI/IXHYAooc4wnc1du3Hhqnb0q/dfOL9qL9M03N0x/sgyY+mIszYqmmvfE++OEvmMgAAAAAAAAAAABISAiEohBADQ6AQAAGupnWI05Mi02XXO9t0T/TpP2bBcekAUABX5vhO/p7VEeKmPfHGFA17J3piaquzu7U6emomuABAAAAAAAAAAAkJARCUQggBodAIAAC3yG/7Vur+6n4x+iofTD3ZsVU1U8J/wCwK1Y5t1xciKqNsTGsOhQCZ03g8Wa4n6PRMU+1Vsj4yzr0Y/E/Sq5q4bqY6POIACAAAAAAAAAABISAiEohBADQ6AQAAAAXGSYrX+HX60fGFuyVFc25iaNkxOsS02DxEYqmKqfvRynkLj7ublPbiY5xMfk6BWSrom3MxVviZiXK5zjA9r+Jajb54/yUwgAIAAAAAAAAAAEhICISiEEANDoBAAAAAerL8XOEq18s+1HxeUBrqaoriJpnWJjWJSo8ox3cz2Ls+GZ8M8p5ei8GhR5pl3da12I8Pmp+r1jovAGQFpmmXd1rXh48Pmp5dY6KsZAAAAAAAAAACQkBEJRCCAGh0AgAAAAAALrKcf29Ld6dvlmeMcvVSgrXipy3M9dKMTO3y18+k/NbCikzTLu71rw8eHzU8usdF2AyAuMxyvXWvCx60fGn5Kedm8QHVuibs6W4mZ5QtcLk/HFT92PjIKgainBWqY0i3R7tfzV+MyjjhfwTP6SEU46rom3OlcTExvidjkQAAJCQEQlEIIAaHQCAAAAAAAAAtMszLu9KMRPh8tU8Ok9FWCteKLLcy7jSi/to4T9X9l5TMVRrTtjhIqXnv4K3iNtymNecbJegB87GHpw8aWaYjn19ZfQAAAfHE4WjExpdjXlO6Y9JUmNyyvD7aPHTzjfHrDQgMgL3MMsi9rVh4iKuMboq+UqLdvECQkQRCUQggBodAIAAAAAAAAAAD14HH1YTZ7VPGn4xyeQBqsPiKcTGtqdeccY6TD6snZu1WZ7VqZiea5web03NmJ8M/W4T8haswiddwKAAAATOm/7WTvVduqqY3TVMx9srjOsZ2I7u3vmPF0jl9qkE0JCRBEJRCCAGh0AgAAAAAAAAAAAAAA++GxleG/lVbPqztj3LXD5zTVsvxNM842x81GCtZavU3v5VVNXpOrtkInTc+1OLuU+zcr/FIVqXix2Y04aNKJiqvhTHD1UVeJrr9uuuenal8grquubkzNc6zM6zLkBAkJARCUQggBodAIAAAAAAAAAAAAAAAAAAAAAABISAiEohBADQ6AQAAAAAAAAAAAAAAAAAAAAAACQkBEJRCCAGh0AgAAAAAAAAAAAAAAAAAAAAAAEgAiAQQA0P/9k="></img>
    <p style={{float:"left",marginTop:50}}>CALL US:+18006036035</p>
    </div>
    
    </div>
    </div>
  )
}
function Section6(){
  return(
    <div style={{ background: 'grey', padding: 100, }}>
            <div className='row'>
                <div className='col col-6'>
                    <div className='row'>
                        <div>
                        <h4 style={{ float: 'left', color: 'white',paddingRight:5 }}>HABER </h4>
                        <p style={{ textSize: 5, float: 'left', marginLeft: 5, color: 'white' }}> &copy;2015 privacy policy</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div>
                            <i style={{ color: '#f85422', padding: 5, float: 'left' }} className="fa-brands fa-square-twitter fa-2x"></i>
                            <i style={{ color: '#f85422', padding: 5, float: 'left' }} className="fa-brands fa-square-youtube fa-2x"></i>
                            <i style={{ color: '#f85422', padding: 5, float: 'left' }} className="fa-solid fa-wifi fa-2x"></i>
                            <i style={{ color: '#f85422', padding: 5, float: 'left' }} className="fa-brands fa-square-facebook fa-2x"></i>
                            <i style={{ color: '#f85422', padding: 5, float: 'left' }} className="fa-brands fa-square-google-plus fa-2x"></i>
                        </div>
                    </div>
                </div>
                <div className='col col-6'>
                    <img style={{ height: 200, width: 400, marginLeft: 50 }} src="https://sim-unlock.net/foto/12_48_26_Google_Maps.png"></img>
                </div>
            </div>
        </div>
  )
  }