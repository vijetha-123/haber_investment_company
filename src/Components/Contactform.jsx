import React, {Component} from "react";
const regularExpression1 = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)
const regularExpression2=RegExp( /^[789]\d{9}$/)
//The three dots (…) notation referred to as the 
//Spread syntax has been part of React for a long time when it could be used via transpilation, 
//although, it has been made a part of JavaScript as part of the ES2015 syntax.
//The Spread syntax is used to deconstruct an array or object into separate variables
// where the exact number of elements in the array may not be known or when we wish
// to keep an attribute or a set of attributes separate from the entire object.
const validation = ({ error, ...rest }) => {
    let checkValidation = false;

    Object.values(error).forEach(val => {
        if (val.length > 0) {
            checkValidation = false
        } else {
            checkValidation = true
        }
    });

    Object.values(rest).forEach(val => {
        if (val === null) {
            checkValidation = false
        } else {
            checkValidation = true
        }
    });

    return checkValidation;
};

export default class FormValidator extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            
            phone:'',
            message:'',
            error: {
                name: '',
                email: '',
                
                phone:'',
                message:''
            }
        }
    }

    onFormSubmit = event => {
        event.preventDefault();
        if (validation(this.state)) {
            console.log(this.state)
        } else {
            console.log("Error occured");
        }
    };

    formObject = event => {
        //collaboration and debugging purposes, it’s always better to write the prevent function just below your function declaration. 
        //That way you won’t cause a bug by forgetting to put the prevent function.
        event.preventDefault();

        const { name, value } = event.target;
        let error = { ...this.state.error };

        switch (name) {
            case "name":
                error.name = value.length < 5 ? "Name should be 5 characters long" : "";
                break;
            case "email":
                error.email = regularExpression1.test(value)
                    ? ""
                    : "Email is not valid";
                break;
            case "phone":
                error.phone=
                regularExpression2.test(value)
                ? ""
                : "phone no is not valid";
                break;
            default:
                break;
        }

        this.setState({
            error,
            [name]: value
        })
    };

    render() {

        const { error } = this.state;

        return (
            <div >
                <div className="card mt-5" style={{border:"none"}}>
                    <form className="card" onSubmit={this.onFormSubmit}>
                    <div className="row" style={{ backgroundImage:"URL('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkwJTi5F3Y5dBaImT58LZwv_Yx4G8GMazuWg&usqp=CAU')",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
                        <div className="col col-3"></div>
                        <div className="col col-3" style={{marginTop:100,marginBottom:50}}>
                        <div className="form-group mb-3">
                            <input
                                required
                                type="text"
                                name="name"
                                placeholder="Name"
                                onChange={this.formObject}
                                className={error.name.length > 0 ? "is-invalid form-control" : "form-control"}
                                style={{ color: 'blue', width: 300 }} />

                            {error.name.length > 0 && (
                                <span className="invalid-feedback">{error.name}</span>
                            )}
                        </div>

                        <div className="form-group mb-3">
                            <input
                                required
                                type="email"
                                name="email"
                                placeholder="Email"
                                className={error.email.length > 0 ? "is-invalid form-control" : "form-control"}
                                onChange={this.formObject}
                                style={{ color: 'blue', width: 300 }} />

                            {error.email.length > 0 && (
                                <span className="invalid-feedback">{error.email}</span>
                            )}
                        </div>

                        <div className="form-group mb-3">
                            <input
                                required
                                type="text"
                                name="phone"
                                placeholder="Phone"
                                className={error.phone.length > 0 ? "is-invalid form-control" : "form-control"}
                                onChange={this.formObject}
                                style={{ color: 'blue', width: 300 }} />

                            {error.phone.length > 0 && (
                                <span className="invalid-feedback">{error.phone}</span>
                            )}
                        </div>
                        </div>
                        <div className="col col-6" style={{marginTop:100,marginBottom:50}}>
                        <div className="form-group mb-3">
                            <textarea
                                required
                                type="text"
                                name="message"
                                placeholder="Message"
                                className={error.message.length > 0 ? "is-invalid form-control" : "form-control"}
                                onChange={this.formObject}
                                style={{ color: 'blue', width: 300 }} />

                            {error.message.length > 0 && (
                                <span className="invalid-feedback">{error.message}</span>
                            )}
                        </div>

                        <div className="d-grid mt-2">
                            <button type="submit" className="btn btn-block btn-primary" style={{  marginRight: 300 }}>Submit</button>
                        </div>
                        </div>
                        </div>
                    </form>
                </div>
               
            </div>
           
        );
    }
}

// const regularExpression1 = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)
// const regularExpression2=RegExp( /^[789]\d{9}$/)

// const validation = ({ error, ...rest }) => {
//     let checkValidation = false;

//     Object.values(error).forEach(val => {
//         if (val.length > 0) {
//             checkValidation = false
//         } else {
//             checkValidation = true
//         }
//     });

//     Object.values(rest).forEach(val => {
//         if (val === null) {
//             checkValidation = false
//         } else {
//             checkValidation = true
//         }
//     });

//     return checkValidation;
// };

// export default class Contactform extends Component {

//     constructor(props) {
//         super(props)

//         this.state = {
//             name: '',
//             email: '',
//             phone:'',
//             message:'',
//             error: {
//                 name: '',
//                 email: '',
//                 phone: '',
//                 message:''
//             }
//         }
//     }

//     onFormSubmit = event => {
//         event.preventDefault();
//         if (validation(this.state)) {
//             console.log(this.state)
//         } else {
//             console.log("Error occured");
//         }
//     };

//     formObject = event => {
//         //collaboration and debugging purposes, it’s always better to write the prevent function just below your function declaration. 
//         //That way you won’t cause a bug by forgetting to put the prevent function.
//         event.preventDefault();

//         const { name, value } = event.target;
//         let error = { ...this.state.error };

//         switch (name) {
//             case "name":
//                 error.name = value.length < 5 ? "Name should be 5 characters long" : "";
//                 break;
//             case "email":
//                 error.email = regularExpression1.test(value)
//                     ? ""
//                     : "Email is not valid";
//                 break;
//             case "phone":
//                 error.phone =regularExpression2.test(value)
//                 ? ""
//                 : "phone no is not valid";
//                 break;
                
//             default:
//                 break;
//         }

//         this.setState({
//             error,
//             [name]: value
//         })
//     };

//     render() {

//         const { error } = this.state;

//         return (
//             // <div className="row App">
//             //     <form onSubmit={this.onFormSubmit}>
//             //     <div className="col col-1"></div>
//             //     <div className="col col-5" >
//             //                 <input
//             //                     required
//             //                     type="text"
//             //                     name="name"
//             //                     placeholder="Name"
//             //                     onChange={this.formObject}
//             //                     className={error.name.length > 0 ? "is-invalid form-control" : "form-control"}
//             //                     style={{ color: 'blue', width: 300 }} />

//             //                 {error.name.length > 0 && (
//             //                     <span className="invalid-feedback">{error.name}</span>
//             //                 )}
//             //                 <br></br>
//             //                 <input
//             //                     required
//             //                     type="email"
//             //                     name="email"
//             //                     placeholder="Email"
//             //                     className={error.email.length > 0 ? "is-invalid form-control" : "form-control"}
//             //                     onChange={this.formObject}
//             //                     style={{ color: 'blue', width: 300 }} />

//             //                 {error.email.length > 0 && (
//             //                     <span className="invalid-feedback">{error.email}</span>
//             //                 )}
//             //                 <br></br>
//             //                 <input
//             //                     required
//             //                     type="text"
//             //                     name="phone"
//             //                     placeholder="Phone"
//             //                     onChange={this.formObject}
//             //                     className={error.phone.length > 0 ? "is-invalid form-control" : "form-control"}
//             //                     style={{ color: 'blue', width: 300 }} />

//             //                 {error.phone.length > 0 && (
//             //                     <span className="invalid-feedback">{error.phone}</span>
//             //                 )}
//             //                 <br></br>
//             //     </div>
//             //     <div className="col col-6">
//             //     <input
//             //                     required
//             //                     type="text"
//             //                     name="message"
//             //                     placeholder="Message"
//             //                     onChange={this.formObject}
//             //                     className={error.message.length > 0 ? "is-invalid form-control" : "form-control"}
//             //                     style={{ color: 'blue', width: 300 }} />

//             //                 {error.message.length > 0 && (
//             //                     <span className="invalid-feedback">{error.message}</span>
//             //                 )}
//             //             <br></br>
//             //                 <button type="submit" className="btn btn-block btn-primary" style={{marginRight:100}} >Submit</button>
                        
//             //     </div>
//                  <div className="card mt-5" style={{border:"none"}}> 
//                     <form className="card-body" onSubmit={this.onFormSubmit}>

//                         <div className="form-group mb-3">
//                             <label className="mb-2"><strong style={{ color: 'blue', width: 50, marginLeft: 300 }}>Name</strong></label>
//                             <input
//                                 required
//                                 type="text"
//                                 name="name"
//                                 onChange={this.formObject}
//                                 className={error.name.length > 0 ? "is-invalid form-control" : "form-control"}
//                                 style={{ color: 'blue', width: 300 }} />

//                             {error.name.length > 0 && (
//                                 <span className="invalid-feedback">{error.name}</span>
//                             )}
//                         </div>

//                         <div className="form-group mb-3">
//                             <label className="mb-2"><strong style={{ color: 'blue', marginLeft: 300 }}>Email</strong></label>
//                             <input
//                                 required
//                                 type="email"
//                                 name="email"
//                                 className={error.email.length > 0 ? "is-invalid form-control" : "form-control"}
//                                 onChange={this.formObject}
//                                 style={{ color: 'blue', width: 300 }} />

//                             {error.email.length > 0 && (
//                                 <span className="invalid-feedback">{error.email}</span>
//                             )}
//                         </div>

//                         <div className="form-group mb-3">
//                             <label className="mb-2"><strong style={{ color: 'blue', marginLeft: 300 }}>Password</strong></label>
//                             <input
//                                 required
//                                 type="password"
//                                 name="password"
//                                 className={error.password.length > 0 ? "is-invalid form-control" : "form-control"}
//                                 onChange={this.formObject}
//                                 style={{ color: 'blue', width: 300 }} />

//                             {error.password.length > 0 && (
//                                 <span className="invalid-feedback">{error.password}</span>
//                             )}
//                         </div>

//                         <div className="d-grid mt-3">
//                             <button type="submit" className="btn btn-block btn-primary" style={{ color: 'white', width: 300, marginLeft: 300 }}>Submit</button>
//                         </div>
//                     </form>
//                 </div>
                
            
//         );
//     }
// }