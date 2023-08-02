import React, {useState} from "react";
import {Form, Input, Button, TextArea} from "semantic-ui-react";
import {useAuth} from "@clerk/clerk-react";



const FormComponent = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [textMessage, setTextMessage] = useState("");

    const {userId, sessionId, getToken} = useAuth();
    const [token, setToken] = useState<string | null>(null);

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
            let resp = await fetch(BACKEND_URL.toString(), {
                method: 'POST',
                mode: "cors",
                headers: {
                    'allow-access-control-origin': '*',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + thisToken!,
                },
                body: JSON.stringify({phoneNumber, textMessage}),
            });
            //read body and log it
            let body = await resp.text();
            console.log(body);
        } catch (err) {
            console.log(err);
        }
    };


    return (
        <div>
            <Form>
                <Input
                    name="phoneNumber"
                    label="Phone Number"
                    placeholder="123-456-7890"
                    type="tel"
                    onChange={handleChange}
                />
            </Form>
            <Form>
                <div>Enter your text</div>
                <TextArea
                    name="textMessage"
                    label="Text Message"
                    placeholder="Enter your text message here"
                    onChange={handleChange}>
                </TextArea>
            </Form>
            <div style={{padding: '10px'}}></div>
            <Button onClick={handleSubmit}>Send</Button>
        </div>
    );
};

export default FormComponent;
