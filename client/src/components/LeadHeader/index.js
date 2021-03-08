import React from "react";
import style from "./style.css"
import Input from "../Form";
// import BorderPage from "/Border"

function LeadHeader() {
    return (

        <div className="jumbotron3">


            <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">

                        <div className="modal-body">
                            <h3>Add Leads</h3>
                            <p>First name: </p>  <Input className="addLeads" />
                            <p>Last name: </p>  <Input className="addLeads" />
                            <p>Phone Number: </p>  <Input className="addLeads" />
                            <p>Email Address: </p>  <Input className="addLeads" />
                            <p>Oppurtunity: </p><Input className="addLeads" />
                            {/* <p>Notes: </p>  <Input className="addLeads" /> */}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>



            <div className="row1">
                <div className="col-sm-12">
                    <div className="card1">
                        <div className="card-body">
                            <h2 className="Leadheader">Leads</h2>

                            <button type="button" class="btn1 btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                                Add Leads
</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>







    );
}

export default LeadHeader;