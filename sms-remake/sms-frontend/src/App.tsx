import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {ClerkProvider, RedirectToSignIn, SignedIn, SignedOut, UserButton} from "@clerk/clerk-react";

function App() {
    const [count, setCount] = useState(0)

    return (
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        <ClerkProvider publishableKey={REACT_APP_CLERK_PUBLISHABLE_KEY}>
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
                </>
            </SignedIn>
            <SignedOut>
                <RedirectToSignIn/>
            </SignedOut>
        </ClerkProvider>
    )
}

export default App
