import React, { useEffect, useState } from "react";
import { auth } from "./firebase"; // Adjust the path as necessary
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { db1 } from './firebase'; // Import your Firebase configuration
import { ref, onValue, remove, update } from 'firebase/database';
import Message from "./Message";
import Routine from "./Routine";
import Progress from "./Progress";

const Profile = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const [messages, setMessages] = useState([]);
    const [componentLoad,setComponent]=useState(<Progress/>);

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

    if (!user) return null;
 const loadingComp=(e)=>{
    if(e=='r'){
        setComponent(<Routine/>)
    }else if(e=='p'){
        setComponent(<Progress/>)
    }else{
        setComponent(<Message/>)
    }
console.log(e)
 }
    return (
        <div>
            <div className='lg:px-32 md:px-20 px-2 '>
                <div className="w-full h-[50vh] lg:h-[70vh] overflow-hidden">
                    <img className="object-cover h-full w-full rounded-b-2xl" src="https://scontent.fktm8-1.fna.fbcdn.net/v/t1.6435-9/130572423_398414568145391_6120544987997921810_n.jpg?stp=dst-jpg_s960x960&_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=VxdWbQ6YkHoQ7kNvgHZRa9q&_nc_zt=23&_nc_ht=scontent.fktm8-1.fna&_nc_gid=AwzbWMcv8eslJ7jkWzns-Eo&oh=00_AYDVAQABq0I--jWzHFObv5mu4XL-ucrZP2WrzYRdL_cxOA&oe=674C0335" alt="background" />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center items-center gap-4">
                    <div className="h-60 w-60 overflow-hidden flex justify-center items-center relative mt-[-80px] bg-white rounded-full p-1">
                        <img
                            className="h-full w-full object-cover rounded-full"
                            src="https://scontent.fktm8-1.fna.fbcdn.net/v/t39.30808-6/278174597_692617362058442_5923177136769062776_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=suHAtPhXw7wQ7kNvgGRsJKm&_nc_zt=23&_nc_ht=scontent.fktm8-1.fna&_nc_gid=ANpCqkM7Aihfy39YfCxPIAW&oh=00_AYC4r0GisXrvjN8Zt5q6Dnm1MAr-oU2_SG_CCwhfZZdx9w&oe=673B791F"
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
                <div className="flex flex-row flex-wrap gap-3 md:gap-7 text-blue-700">
                   <button className="bg-blue-800 text-white rounded-lg p-1 hover:bg-blue-900"  onClick={() => loadingComp('r')}>Routine</button>
                   <button className="bg-blue-800 text-white rounded-lg p-1 hover:bg-blue-900"  onClick={() => loadingComp('p')}>Progress</button>
                   <button className="bg-blue-800 text-white rounded-lg p-1 hover:bg-blue-900"  onClick={() => loadingComp('m')}>Message</button>
                </div>
                <hr className="border-black" />
                
            </div>
           {componentLoad}
        </div>
    );
};

export default Profile;
