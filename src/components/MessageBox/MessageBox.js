import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const MessageBox = (props) => {
    const msgbox = useRef(null);
    const [currentChat, setCurrentChat] = useState(window.localStorage.getItem(`chat:${props.contact}`));

    useEffect(() => {
        setCurrentChat(window.localStorage.getItem(`chat:${props.contact}`));
    }, [props.contact]);

    const sendMessageEventHandler = () => {
        //JSON Methods not working as expected
        const msgArray = [];
        const newMsg = msgbox.current.value;
        if(!currentChat) {
            msgArray.push(newMsg);
            const newHistory = msgArray.toString();
            window.localStorage.setItem(`chat:${props.contact}`, newHistory);
            return setCurrentChat(window.localStorage.getItem(`chat:${props.contact}`));
        }else {
            const prevMessages = currentChat.split(",");
            prevMessages.push(newMsg);
            window.localStorage.setItem(`chat:${props.contact}`, prevMessages.toString());
            return setCurrentChat(window.localStorage.getItem(`chat:${props.contact}`));
        }
        
    }

    const renderMessages = () => {
        if(!currentChat) {
            return (
                <p className="text-lead text-right">
                    No previous messages
                </p>
            );
        } else {
            currentChat.split(",").map((message, index) => {
                console.log(message);
                return (
                    <p style={{width: "70%"}} className="text-lead border rounded" key={index}>
                        {message}
                    </p>
                );
            })
        }
    }

    return (
        <div>
            <div className="" >
                <div className=" mt-auto p-2 pb-5">
                    <div className="row" >
                        <div className="col-12 messages" style={{ height: "50vh" }}>
                            {renderMessages()}
                        </div>
                        <div className="col-12">
                            
                            <textarea ref={msgbox} name="msgbox" id="msgbox" rows="5" className="form-control" placeholder={"Say hi to " + props.contact + "..."}></textarea>
                        </div>
                        <div className="col-12 text-right pt-3">
                            <button className="btn btn-primary text-capitalize" onClick={sendMessageEventHandler}>
                                Send
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MessageBox
