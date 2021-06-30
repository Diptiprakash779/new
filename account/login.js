import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Login extends Component{
    constructor(){
        super();
        this.state={
            fieldList:{},
            errorList:{},
            message:''
        }
    }

    processInput=(obj)=>{
        let fieldList = this.state.fieldList;
        fieldList[obj.target.name] = obj.target.value;
        this.setState({
            fieldList
        })
    }

    login =(obj) =>{
        obj.preventDefault();
        let fieldList = this.state.fieldList;
        let errorList = this.state.errorList;
        let formStatus = true;

        //email validation
        let epattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(! epattern.test(fieldList["myemail"])){
            formStatus = false;
            errorList["emailError"] = "Please Enter Your Valid Email Id";
        }else{
            errorList["emailError"] = "";
        }

        //Password validation
        if( !fieldList["mypassword"] || fieldList["mypassword"].length<6){
            formStatus = false;
            errorList["passError"] = "Please Enter Your Password between 6 to 8 in length";
        }else{
            errorList["passError"] = "";
        }

        // adding message
        let mymessage = '';
        if(formStatus == false){
            mymessage = "Invalid input";
        }else{
            mymessage = "Validation Success, Please Wait submitting...";
        }

        // updating the errorList After checking the input fields
        this.setState({
            errorList,
            message:mymessage
        })

        //sending input values to server
        if(formStatus == true){
            var jsonData = JSON.stringify(this.state.fieldList); // converting the array into json so that we can send it to the server
            var url = "http://lmsglobe.com/api/app/register.php";
            var postData ={
                method:'post',
                header:{'content-type':'application/Json'},
                body:jsonData
            }
            fetch(url, postData)
            .then(response => response.json())
            .then(result => this.setState({message:result.status}))
            
        }

    }
    
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">
                        <p className="text-center text-danger">{this.state.message}</p>
                        <form onSubmit={this.login}>
                            <div className="card">
                                <div className="card-header bg-primary text-white">
                                    <i className="fa fa-lock fa-lg"></i>Login
                                    <label className="pull-right text-warning">
                                        <Link to="/register" className="text-warning">
                                            <i className="fa fa-user-plus"></i>New? register
                                        </Link>
                                    </label>
                                </div>
                                <div className="card-body">
                                    <div className="mb-3">
                                        <label>e-Mail Id</label>
                                        <input type="email" className="form-control" name="myemail" onChange={this.processInput}/>
                                        <small className="text-danger">{this.state.errorList.emailError}</small>
                                    </div>
                                    <div className="mb-3">
                                        <label>Password</label>
                                        <input type="password" className="form-control" name="mypassword" onChange={this.processInput}/>
                                        <small className="text-danger">{this.state.errorList.passError}</small>
                                    </div>
                                </div>
                                <div className="card-footer text-center">
                                    <button type="submit" className="btn btn-danger">Login <i className="fa fa-arrow-right"></i></button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-4">
                        <label>
                            <Link to="/new" className="text-warning">
                                <i className="fa fa-user"></i>New page
                            </Link>
                        </label>

                        <label>
                            <Link to="/newtwo" className="text-danger">
                                <i className="fa fa-user-plus"></i>New page-2
                            </Link>
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;