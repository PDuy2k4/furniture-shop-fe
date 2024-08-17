import {useState, useEffect,useRef} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Verify = () => {
    const location = useLocation();
    const [verify, setVerify] = useState('Verifying...');
    const navigate = useNavigate();
    const effectRan = useRef(false);

    useEffect(() => {
        // Prevent running twice in development mode
        if (effectRan.current) return;

        console.log("Hello");

        const verifyToken = async () => {
            const queryParams = new URLSearchParams(location.search);
            const token = queryParams.get('token');

            if (token) {
                await verifyEmail(token);
            } else {
                setVerify('Invalid verification link');
                navigate('/error');
            }
        };

        verifyToken();

        // Set ref to true after first run
        effectRan.current = true;

    }, [location.search]);

    const verifyEmail = async (token: string) => {
        try {
            const response = await fetch('http://localhost:8000/api/verifyToken',{
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({token: token}),
            });
            const data = await response.json();
            if (response.ok) {
                setVerify('Email verified successfully');
            } else if (data.message === 'Token has expired') {
                setVerify('expired');
                
            }
        } catch (error) {
            navigate('/error');
        }
    };

    return (
        <div>
           {(() => {
                switch (verify) {
                case 'success':
                    return <h1>Email verified successfully</h1>;
                case 'expired':
                    return <div className="">
                        <h1>Token has expired</h1>
                        <p>Click <a href="/resend">here</a> to resend verification email</p>
                    </div>
                case 'failed':
                    return <h1>Verification failed</h1>;
                case 'error':
                    return <h1>An error occurred</h1>;
                default:
                    return <h1>{verify}</h1>;
                }
            })()}
        </div>
    )
}

export default Verify