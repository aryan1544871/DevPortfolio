import React, { useState } from "react";
import "./messages.scss";

export default function Messages() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(""); // State for error messages

    const createMessage = async () => {
        const data = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: username,
                email: email,
                message: message
            })
        };

        setLoading(true); // Set loading to true when starting the fetch
        try {
            const res = await fetch('https://portfolio-pcep.onrender.com/data/message', data);
            if (res.ok) {
                setUsername("");
                setEmail("");
                setMessage("");
                setError(""); // Clear any previous error
                alert("Submitted Successfully");
            } else {
                throw new Error("Failed to submit");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred while sending the message.");
        } finally {
            setLoading(false); // Set loading to false when fetch completes
        }
    };

    const handleUsernameChange = (e) => {
        const value = e.target.value;
        if (value.length > 15) {
            setError("Name cannot be more than 15 characters.");
        } else {
            setError(""); // Clear error if valid
        }
        setUsername(value);
    };

    const handleMessageChange = (e) => {
        const value = e.target.value;
        if (value.length > 50) {
            setError("Message cannot be more than 50 characters.");
        } else {
            setError(""); // Clear error if valid
        }
        setMessage(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission

        // Final validation before submission
        if (error) return; // Don't submit if there's an error
        createMessage();
    };

    return (
        <div>
            {loading ? (
                <div className="loader">Loading...</div>
            ) : (
                <form onSubmit={handleSubmit}>
                    {error && <div className="error">{error}</div>} {/* Display error message */}
                    <div>
                        <label htmlFor="username">Name</label>
                        <input 
                            type="text" 
                            id="username" 
                            name="username" 
                            placeholder="Enter your name" 
                            value={username}
                            onChange={handleUsernameChange} 
                            required 
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="Enter your email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                    </div>
                    <div>
                        <label htmlFor="messages">Message</label>
                        <input 
                            type="text" 
                            id="messages" 
                            name="messages" 
                            placeholder="Enter your messages" 
                            value={message}
                            onChange={handleMessageChange} 
                            required 
                        />
                    </div>
                    <button className="submit" type="submit">Submit</button>
                </form>
            )}
        </div>
    );
}
