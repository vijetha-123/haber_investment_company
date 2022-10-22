import React ,{ Component} from "react";
import axios from "axios";

export default class Cards extends Component{
    state={ details:[]}
    componentDidMount(){
        axios.get('http://localhost:3000/cards').then(
            res =>{
                const details=res.data;
                this.setState({details});
            }
        )
    }
    render(){
        return(
            <div className="row"style={{marginLeft:100,marginRight:100}}>
            {this.state.details.map(det =>
                <div className="col"  >
                    <div className="card" style={{height:40,border:"none"}}>
                        <div className="card-body">
                            <img src={det.image} style={{ height: 70, width: 70,marginLeft:70 }}></img> 
                         <h5 style={{textAlign:"center"}}>{det.title}</h5> 
                         <p style={{textAlign:"center"}}>{det.Description}</p>
                         <button style={{marginLeft:67}}>Read more</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
        )
    }
}