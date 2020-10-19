import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactBadge = ({contactName}) => {
    return (
        <div className="contact align-middle text-center text-capitalize text-lead py-3  border-bottom bg-light"
        style={{cursor: "pointer"}}>
            {contactName}
        </div>
    )
}

export default ContactBadge;
