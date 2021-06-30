import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class Newtwo extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="container">
                <div className=" row bg-primary">
                    <table className=" table text-left">
                        <tr>
                            <td>
                                <i className="fa fa-book" size="2"></i>
                            </td>
                            <td>
                                <i className="fa fa-home" size="2"></i>
                            </td>
                            <td>
                                <i className="fa fa-search form-control" size="1"></i>Search
                            </td>
                        </tr>
                    </table>
                </div>
                <div className="row">
                    <div className="col-lg-3">
                        <div>
                            <label><i className="fa fa-calender"></i>Today</label>
                        </div>
                        <div>
                            <h5><i className="fa fa-arrow-down"></i>Projects</h5>
                        </div>
                        <div>
                            <label><i className="fa fa-circle"></i>Welcome<i className="fa fa-wave"></i></label>
                        </div>
                        <div>
                            <label><i className="fa fa-user"></i>Try Boards</label>
                        </div>
                        <div>
                            <label><i className="fa fa-user text-success"></i>Trail A</label>
                        </div>
                        <br/>
                        <div>
                            <p className="pl-2">Archived Projects</p>
                        </div>

                        <br/><br/>

                        <div>
                           <h5><i className="fa fa-arrow-down"></i>Labels</h5>
                        </div>
                        <div>
                            <label><i className="fa fa-marker text-primary"></i>asd</label>
                        </div>
                        <div>
                            <label><i className="fa fa-marker"></i>Label_Public?</label>
                        </div>
                        <div>
                            <p><i className="fa fa-arrow-down fa-sm"></i>Shared</p>
                        </div>
                        <div>
                            <label><i className="fa fa-marker"></i>Postman</label>
                        </div>

                        <br/><br/>

                        <div>
                            <h5><i className="fa fa-arrow-down"></i>Filters</h5>
                        </div>
            
                        <div>
                            <label><i className="fa fa-raindrops"></i>Assigned to me</label>
                        </div>
                        <div>
                            <label><i className="fa fa-raindrops"></i>Priority 1</label>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="text-right">
                            <label className="pull-right"><i className="fas fa-comment-alt-dots mr-1"></i>2  <i className="fa fa-user-plus"></i>Share  <i className="fa fa-sort"></i>Sort  <i className="fa fa--ellipsis-h"></i></label>
                        </div>
                        <div className="row">
                        <div className="col-lg-4 text-left">
                            <h5>Try Boards<i className="fa fa-wave"></i></h5>
                            <br/><br/>

                            <h6>To Do 2</h6>
                            <div className="form-control">
                                <input type="radio" name="new1"/>This is a task drag to the DB "Doing" section
                                <i className="fa fa-phone fa-sm"></i>0/2   <p className="text-primary">asd</p> +1
                            </div>
                            <div className="form-control">
                                <input type="radio" name="new1"/>Help me please
                                <br/>
                                <i className="fa fa-file text-primary">Friday</i> postman
                            </div>
                            <i className="fa fa-plus form-control" size="1">  Add Task</i>
                        </div>
                        <div className="col-lg-4 text-center">
                            <br/><br/><br/>
                            <h6>Doing 1</h6>
                            <div className="form-control">
                                <input type="radio" name="new1"/>Logaan  DB
                            </div>
                            <i className="fa fa-plus form-control" size="1">  Add Task</i>
                        </div>

                        <div className="col-lg-4 text-center">
                            <br/><br/><br/>
                            <h6>Done 0</h6>
                            <div className="form-control">
                                <i className="fa fa-plus" size="1">  Add Task</i>    
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Newtwo;