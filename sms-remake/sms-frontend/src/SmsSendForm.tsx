import React, {useEffect, useState} from "react";
import {Form, Input, Button, TextArea} from "semantic-ui-react";
import {useAuth} from "@clerk/clerk-react";
import precan from "./precan";


const FormComponent = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [textMessage, setTextMessage] = useState("");

    const { getToken} = useAuth();
    const [SendState, setSendState] = useState<string | null>(null);

    //use effect to set sendState after 5 seconds
    useEffect(() => {
        setTimeout(() => {
            setSendState(null);
        }, 5000);
    }, [SendState]);

    const handleChange = (event: any) => {
        const {name, value} = event.target;

        switch (name) {
            case "phoneNumber":
                setPhoneNumber(value);
                break;
            case "textMessage":
                setTextMessage(value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = async (event: any) => {

        console.log(phoneNumber, textMessage);
        //make a post request to the backend
        //fetch('http://localhost:3000/api/sms', {
        const thisToken = await getToken();
        try {
            var msg = precan.gmiHeader + textMessage + precan.gmiFooter;
            let resp = await fetch(BACKEND_URL.toString(), {
                method: 'POST',
                mode: "cors",
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + thisToken!,
                },
                body: JSON.stringify({phoneNumber, msg}),
            });
            //read body and log it
            if(resp.status == 500) {
                setSendState("Error sending message");
                return;
            }

            let body = await resp.text();
            console.log(msg);
            console.log(body);
            // handleChange({target: {name: "phoneNumber", value: ""}});
            // handleChange({target: {name: "textMessage", value: ""}});
            setPhoneNumber("");
            setTextMessage("");
            setSendState("Message sent successfully");

        } catch (err) {
            console.log(err);
            setSendState("Error sending message");
        }
    };


    return (
        <div>
            <Form>
                <Input
                    name="phoneNumber"
                    label="Phone Number"
                    type="tel"
                    placeholder="Enter phone number"
                    value={phoneNumber}
                    onChange={handleChange}
                />
            </Form>
            <Form>
                <div>Enter your text</div>
                <TextArea
                    name="textMessage"
                    label="Text Message"
                    value={textMessage}
                    placeholder="Enter your text"
                    onChange={handleChange}>
                </TextArea>
            </Form>
            <div style={{padding: '10px'}}></div>
            {/*generate an error msg if handleSubmit returns false*/}
            <Button onClick={handleSubmit}>Send</Button>
            {/*remove div after 10 seconds*/}
            {SendState === "Error sending message" && <div style={{color: 'red'}}>{SendState}</div>}
            {SendState === "Message sent successfully" && <div style={{color: 'green'}}>{SendState}</div>}
        </div>
    );
};

export default FormComponent;
