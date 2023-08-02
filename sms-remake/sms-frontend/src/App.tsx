import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {RedirectToSignIn, SignedIn, SignedOut, useAuth, UserButton} from "@clerk/clerk-react";
import SmsSendForm from "./SmsSendForm.tsx";

function App() {
    const [count, setCount] = useState(0)
    const {  userId, sessionId, getToken } = useAuth();
    const [token, setToken] = useState<string | null>(null);
    //use effect
    useEffect(() => {
       const fetchToken = async () => {
           const token = await getToken();
           setToken(token);
       }
       fetchToken();
    });

    const [text, setText] = useState("");

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const handleClick = () => {
        console.log(text);
    };


    return (
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment

        // style to take up 80% of the window width
        <div >
            <SignedIn>
                    <div style={{
                        paddingBottom: '50px',
                        boxSizing: 'content-box',
                    }}>
                        <UserButton></UserButton>
                    </div>

                    <div style={{
                        paddingBottom: '50px',
                        boxSizing: 'content-box',
                    }}>
                        <SmsSendForm></SmsSendForm>
                    </div>

                    {/*<div>Hello {userId}</div>*/}
                    {/*<div>Session ID: {sessionId}</div>*/}
                    {/*/!*set div width to be 80% of window and break the word*!/*/}
                    {/*<div style={{ width: '80vw', wordBreak: 'break-all' }}>*/}
                    {/*    Token: {token}*/}
                    {/*</div>*/}

                    {/*<div style={{padding :'10px'}}>*/}
                    {/*    <input type="text" id="text" name="text" onChange={handleChange} value={text} />*/}
                    {/*</div>*/}
                    {/*/!*add padding around div*!/*/}
                    {/*<div style={{ padding: '10px' }}>*/}
                    {/*    <button onClick={handleClick}>Log Text</button>*/}
                    {/*</div>*/}

            </SignedIn>
            <SignedOut>
                <RedirectToSignIn/>
            </SignedOut>
        </div>
    )
}

export default App
