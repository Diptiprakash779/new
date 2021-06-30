import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class New extends Component{
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
                        <div className="text-left">
                            <h3>Welcome<i className="fa fa-wave"></i></h3>
                            <div>
                                <i className="fa fa-plus form-control" size="1">  Add Task</i>
                            </div>

                            <br/>
                            <div>
                                <h4><i className="fa fa-arrow-down"></i>Let's get started with a few tips 4</h4>
                            </div>

                            <div>
                                <input type="radio" name="new"/>My name is task A
                                    <div>
                                        <input type="radio" name="new"/>My name is task AA
                                        <input type="radio" name="new"/>My name is task AB
                                    </div>
                                <input type="radio" name="name"/>My name is task B

                                <i className="fa fa-plus form-control" size="1">  Add Task</i>
                            </div>

                            <br/>

                            <div>
                                <h4>To Go further</h4>
                                <input type="radio" name="new2"/> KickStart Your Projects with Templates -
                                <br/>
                                <div>
                                    <input type="radio" name="new2"/> Click + next projects to add one of your own 
                                        <div>
                                            <i className="fa fa-phone" size="1">0/1</i>  <i className="fa fa-envelope" size="1">1</i>
                                            <br/>
                                            <div>
                                                <input type="radio" name="name3"/>Task AAA
                                                    <p><i className=" fa fa-calender text-warning" aria-hidden="true" size="1"></i>Tomorrow</p>

                                            </div>
                                        </div>
                                    <input type="radio" name="new2"/><u>Get organized anywhere with the Apps-</u>
                                    <br/>
                                    <input type="radio" name="nue2"/><u>Learn how to use Todoist with Guide-</u>
                                    <br/>
                                    <i className="fa fa-plus form-control" size="1">  Add Task</i>
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default New;