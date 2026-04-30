import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const SuccessPayment = () => {
    const [sessionid, setSessionID] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const query = new URLSearchParams(window.location.search);
        const sessionId = query.get('session_id');
        
        if (sessionId) {
            setSessionID(sessionId);
            fetch(`https://striker-xapi.vercel.app/checkout-payment/${sessionId}`)
                .then(res => {
                    if (!res.ok) throw new Error("Network response was not ok");
                    return res.json();
                })
                .then(data => {
                    console.log("Payment Data:", data);
                    if (data.status === 'paid') {
                        alert("Paid Successfully");
                    }
                    setLoading(false);
                })
                .catch(err => {
                    console.error("Fetch error:", err);
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    }, []);

    return (
        <div className="p-10">
            <h1 className='text-black font-bold'>Success Payment</h1>
            {loading ? (
                <p className='text-gray-500'>Checking payment status...</p>
            ) : (
                <p className='text-black'>Session ID: {sessionid || "Not Found"}</p>
            )}
            <button><Link to='/user'>Go Back</Link></button>
        </div>
    );
}

export default SuccessPayment;