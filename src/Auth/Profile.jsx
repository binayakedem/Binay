import React, { useEffect, useState } from "react";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { db1 } from './firebase'; // Import your Firebase configuration
import { ref, onValue, remove, update } from 'firebase/database';

const Profile = () => {
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

    const handleLogout = async () => {
        try {
            await auth.signOut();
            toast.success("Logged out successfully", {
                position: "top-center",
            });
            navigate("/login");
        } catch (error) {
            toast.error("Failed to log out. Try again!", {
                position: "bottom-center",
            });
        }
    };

    const handleToggle = async (id) => {
        // Check if the message is already seen
        const message = messages.find(msg => msg.id === id);

        if (message && !message.seen) {
            // Update seen status in the local state
            const updatedMessages = messages.map(msg =>
                msg.id === id ? { ...msg, seen: true } : msg
            );
            setMessages(updatedMessages);

            // Update the seen status in Firebase
            const messageRef = ref(db1, `message/${id}`);
            await update(messageRef, { seen: true });
        }
        setExpandedUserId(expandedUserId === id ? null : id);
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
                <div className="w-full h-[50vh] lg:h-[70vh] overflow-hidden">
                    <img className="object-cover h-full w-full rounded-b-2xl" src="https://scontent.fktm8-1.fna.fbcdn.net/v/t1.6435-9/130572423_398414568145391_6120544987997921810_n.jpg?stp=dst-jpg_s960x960&_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=VxdWbQ6YkHoQ7kNvgHZRa9q&_nc_zt=23&_nc_ht=scontent.fktm8-1.fna&_nc_gid=AwzbWMcv8eslJ7jkWzns-Eo&oh=00_AYDVAQABq0I--jWzHFObv5mu4XL-ucrZP2WrzYRdL_cxOA&oe=674C0335" alt="background" />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center items-center gap-4">
                    <div className="h-60 w-60 overflow-hidden flex justify-center items-center relative mt-[-80px] bg-white rounded-full p-1">
                        <img
                            className="h-full w-full object-cover rounded-full"
                            src="https://scontent.fktm8-1.fna.fbcdn.net/v/t39.30808-6/278174597_692617362058442_5923177136769062776_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=nw-o5q69bUYQ7kNvgGsxiqb&_nc_zt=23&_nc_ht=scontent.fktm8-1.fna&_nc_gid=A_rQzfHgTsWj0ZJG10ZpEmI&oh=00_AYC76Vr6RJiBLaHE77TmX7_rwvXyVT7tUObsacnhUyN1fw&oe=672A559F"
                            alt="profile"
                        />
                    </div>
                    <div>Email: {user.email}</div>
                    <div>
                        <button onClick={handleLogout} className="bg-red-600 text-white shadow px-9 rounded py-2">
                            Logout
                        </button>
                    </div>
                </div>
                <hr className="border-black" />
                <div>
                    {messages.map((message) => (
                        <div key={message.id}>
                            <div onClick={() => handleToggle(message.id)} className="bg-white text-black p-4 grid grid-cols-3 mt-1">
                                <div>{message.name}</div>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                                    <div className="cursor-pointer">{message.seen ? 'Read' : 'Read'}</div>
                                    <div>
                                        {
                                            message.seen ?
                                                <div className="flex flex-row"> <p>Seen</p>
                                                    <div className="overflow-hidden h-7 w-7"> <img className="w-full h-full object-cover" src="https://img.freepik.com/premium-psd/eye-png-with-ai-generated-png_1182830-1284.jpg?semt=ais_hybrid" alt="eye" /></div>
                                                </div> :
                                                <div className="flex flex-row"><p>Unseen</p>
                                                    <div className="overflow-hidden h-7 w-7"><img className="w-full h-full object-cover" src="https://starleymurray.wordpress.com/wp-content/uploads/2013/08/screen-shot-2013-08-09-at-10-53-48-am.png" alt="eye" /></div>
                                                </div>
                                        }
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

export default Profile;
