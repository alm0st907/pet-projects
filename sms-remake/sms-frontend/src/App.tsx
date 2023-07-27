import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {RedirectToSignIn, SignedIn, SignedOut, useAuth, UserButton} from "@clerk/clerk-react";

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


    return (
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        <div>
            <SignedIn>
                <>
                    <div style={{
                        paddingBottom: '50px',
                        boxSizing: 'content-box',
                    }}>
                        <UserButton></UserButton>
                    </div>

                    <div>
                        <a href="https://vitejs.dev" target="_blank">
                            <img src={viteLogo} className="logo" alt="Vite logo"/>
                        </a>
                        <a href="https://react.dev" target="_blank">
                            <img src={reactLogo} className="logo react" alt="React logo"/>
                        </a>
                    </div>
                    <h1>Vite + React</h1>
                    <div className="card">
                        <button onClick={() => setCount((count) => count + 1)}>
                            count is {count}
                        </button>
                        <p>
                            Edit <code>src/App.tsx</code> and save to test HMR
                        </p>
                    </div>
                    <p className="read-the-docs">
                        Click on the Vite and React logos to learn more
                    </p>
                    <div>Hello {userId}</div>
                    <div>Session ID: {sessionId}</div>
                    {/*set div width to be 80% of window and break the word*/}
                    <div style={{ width: '80vw', wordBreak: 'break-all' }}>
                        Token: {token}
                    </div>
                </>
            </SignedIn>
            <SignedOut>
                <RedirectToSignIn/>
            </SignedOut>
        </div>
    )
}

export default App
