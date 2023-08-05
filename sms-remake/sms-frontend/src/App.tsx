import './App.css'
import {RedirectToSignIn, SignedIn, SignedOut, UserButton} from "@clerk/clerk-react";
import SmsSendForm from "./SmsSendForm.tsx";

function App() {

    return (
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment

        // style to take up 80% of the window width
        <div >
            <SignedIn>
                    <div style={{
                        paddingBottom: '50px',
                        boxSizing: 'content-box',
                    }}>
                        <UserButton showName={true}></UserButton>
                    </div>

                    <div style={{
                        paddingBottom: '50px',
                        boxSizing: 'content-box',
                    }}>
                        <SmsSendForm></SmsSendForm>
                    </div>

            </SignedIn>
            <SignedOut>
                <RedirectToSignIn/>
            </SignedOut>
        </div>
    )
}

export default App
