import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const MessageBox = (props) => {
    const msgbox = useRef(null);
    const [currentChat, setCurrentChat] = useState(window.localStorage.getItem(`chat:${props.contact}`));

    useEffect(() => {
        setCurrentChat(window.localStorage.getItem(`chat:${props.contact}`));
    }, [props.contact]);

    const sendMessageEventHandler = () => {
        const msgArray = [];
        const newMsg = msgbox.current.value;
        if(!currentChat) {
            msgArray.push(newMsg);
            const newHistory = JSON.stringify({
                messages: msgArray
            })
            window.localStorage.setItem(`chat:${props.contact}`, newHistory);
            setCurrentChat(window.localStorage.getItem(`chat:${props.contact}`));
        }else {
            const prevMessages = JSON.parse(currentChat)
            prevMessages.messages.push(newMsg)
            window.localStorage.setItem(`chat:${props.contact}`, JSON.stringify(prevMessages));
            setCurrentChat(window.localStorage.getItem(`chat:${props.contact}`));
        }
        msgbox.current.value = null;
        
    }

    const renderMessages = () => {
        if(!currentChat) {
            return (
                <p className="text-lead text-right">
                    No previous messages
                </p>
            );
        } else {
            return JSON.parse(currentChat).messages.map((message, index) => {
                return (
                    <p style={{width: "70%"}} className="text-lead border border-dark rounded p-2" key={index}>
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
                        <div className="col-12 d-flex flex-column align-items-end justify-content-end messages" style={{ height: "50vh", zIndex: "-1", overflowY: "scroll" }}>
                            {renderMessages()}
                        </div>
                        <div className="col-12">
                            
                            <textarea ref={msgbox} name="msgbox" id="msgbox" rows="5" className="form-control" placeholder={"Say hi to " + props.contact + "..."}></textarea>
                        </div>
                        <div className="col-12 text-right pt-3">
                            <button className="btn btn-primary text-capitalize" onClick={sendMessageEventHandler}>
                                 Send <i className="material-icons">send</i>
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MessageBox
