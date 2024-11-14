import React, { useEffect, useState } from "react";
import { auth } from "./firebase"; // Adjust the path as necessary
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { db1 } from './firebase'; // Import your Firebase configuration
import { ref, onValue, remove, update } from 'firebase/database';

const Message = () => {
    const [user, setUser] = useState(null);
    const [expandedUserId, setExpandedUserId] = useState(null);
    const navigate = useNavigate();
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            } else {
                toast.error("Please log in to view your profile");
                navigate("/login");
            }
        });
        return unsubscribe;
    }, [navigate]);

    useEffect(() => {
        const messagesRef = ref(db1, 'message');
        onValue(messagesRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const loadedMessages = Object.keys(data).map((key) => ({
                    id: key,
                    ...data[key],
                }));
                setMessages(loadedMessages);
            } else {
                setMessages([]);
            }
        });
    }, []);

    const handleToggle = async (id) => {
        // Check if the message is already seen
        const message = messages.find(msg => msg.id === id);

        if (message) {
            // If the message is not seen, update the seen status
            if (!message.seen) {
                // Update seen status in the local state
                const updatedMessages = messages.map(msg =>
                    msg.id === id ? { ...msg, seen: true } : msg
                );
                setMessages(updatedMessages);

                // Update the seen status in Firebase
                const messageRef = ref(db1, `message/${id}`);
                await update(messageRef, { seen: true });
            }
            
            // Toggle the expanded view
            setExpandedUserId(expandedUserId === id ? null : id);
        }
    };

    const handleDelete = async (id) => {
        const messageRef = ref(db1, `message/${id}`);
        try {
            await remove(messageRef);
            toast.success("Message deleted successfully", {
                position: "top-center",
            });
        } catch (error) {
            toast.error("Failed to delete message. Try again!", {
                position: "bottom-center",
            });
        }
    };

    if (!user) return null;

    return (
        <div>
            <div className='lg:px-32 md:px-20 px-2'>
                <hr className="border-black" />
                <div>
                    {messages.map((message) => (
                        <div key={message.id}>
                            <div onClick={() => handleToggle(message.id)} className="bg-white text-black p-4 grid grid-cols-3 mt-1">
                                <div>{message.name}</div>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                                    <div className="cursor-pointer">{message.seen ? 'Read' : 'Unread'}</div>
                                    <div>
                                        {message.seen ? (
                                            <div className="flex flex-row">
                                                <p>Seen</p>
                                                <div className="overflow-hidden h-7 w-7">
                                                    <img className="w-full h-full object-cover" src="https://img.freepik.com/premium-psd/eye-png-with-ai-generated-png_1182830-1284.jpg?semt=ais_hybrid" alt="eye" />
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="flex flex-row">
                                                <p>Unseen</p>
                                                <div className="overflow-hidden h-7 w-7">
                                                    <img className="w-full h-full object-cover" src="https://starleymurray.wordpress.com/wp-content/uploads/2013/08/screen-shot-2013-08-09-at-10-53-48-am.png" alt="eye" />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="cursor-pointer text-red-600" onClick={() => handleDelete(message.id)}>Delete</div>
                            </div>

                            {expandedUserId === message.id && (
                                <div className="bg-white text-black">
                                    <div className="bg-blue-600 w-full lg:w-3/4 p-6 text-white">
                                        <div>Subject: {message.subject}</div>
                                        <div>Email: {message.email}</div>
                                        <div>Message: {message.message}</div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Message;
