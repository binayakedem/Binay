import React, { useState } from 'react';
import { FaLinkedin, FaFacebook, FaInstagram, FaGithubSquare, FaPhone } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { toast } from "react-toastify";
const Contact = () => {
    const [user, setUser] = useState({
        name: '', email: '', subject: '', message: '',seen:false
    });
    const [botReply, setBotReply] = useState('');
    const [loading, setLoading] = useState(false);
    let name, value;
    const data = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const { name, email, subject, message,seen } = user;

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name, email, subject, message,seen 
            })
        };

        const res = await fetch('https://profilemsg-default-rtdb.firebaseio.com/message.json', options);

        if (res) {
            toast.success("Message deleted successfully", {
                position: "top-center",
            });
            setBotReply(`Hi ${name}, thanks for reaching out! We have received your message and will get back to you shortly.`);
            setUser({ name: '', email: '', subject: '', message: '' });
        } else {
            alert("Something went wrong!!");
        }
        setLoading(false);
    };

    const email1 = 'binayalimbu300@gmail.com';
    const email2 = 'iambinayalimbu@gmail.com';
    const handleEmailClick1 = () => {
        window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email1}`);
    };
    const handleEmailClick2 = () => {
        window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email2}`);
    };

    return (
        <div>
            {/* Loading Overlay */}
            {loading && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
                    <AiOutlineLoading3Quarters className="text-white text-6xl animate-spin" />
                </div>
            )}

            <div className='bg-dark-50 text-white lg:px-32 md:px-20 px-2 pt-2' Toaster
  position="top-center"
  reverseOrder={false}>
                <div className='bg-yellow-50 rounded shadow md:p-10 p-4' data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <h1 className='text-black font-bold text-2xl text-center mb-10 font-mont'>Love to hear message from you</h1>
                    <form method='POST'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mb-6'>
                            <input type="text" name="name" placeholder='Enter Your name' className='border p-2 rounded text-black w-full' value={user.name} required onChange={data} />
                            <input type="email" name="email" placeholder='Enter Your Email' className='border p-2 rounded text-black w-full' value={user.email} required onChange={data} />
                            <input type="text" name="subject" placeholder='Enter Your Subject' className='border p-2 rounded text-black w-full' value={user.subject} required onChange={data} />
                        </div>
                        <textarea name="message" placeholder='Enter Your Message Here' className='border px-2 py-20 rounded text-black w-full' value={user.message} required onChange={data} />

                        <button 
                            className='text-white bg-blue-600 font-semibold my-6 px-8 py-3 rounded hover:text-white duration-300 ease-in-out flex items-center justify-center'
                            onClick={handleSubmit} 
                            disabled={loading}
                        >
                            Send Message
                        </button>
                    </form>

                    {botReply && (
                        <div className="mt-6 bg-green-100 p-4 rounded border border-green-300 shadow-lg">
                            <p className="text-green-800 font-semibold">{botReply}</p>
                        </div>
                    )}
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-12 h-96 pt-4'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d472.8095015057145!2d85.34084043398627!3d27.70040259506336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2snp!4v1729261861189!5m2!1sen!2snp"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                    <div className='text-black flex flex-col gap-2'>
                        <h1 className='font-bold text-lg text-yellow-600 font-mont'>Contacts</h1>
                        <div className='flex flex-row gap-2 items-center'>
                            <FaPhone color='green' />
                            <p>+977-9843555471</p>
                        </div>
                        <div className='flex flex-row gap-2 items-center'>
                            <FaPhone color='green' />
                            <p>+977-9803588079</p>
                        </div>
                        <div className='flex flex-row gap-2 items-center my-1'>
                            <MdOutlineAttachEmail color='red' onClick={handleEmailClick2} />
                            <p onClick={handleEmailClick2} className='cursor-pointer'>{email2}</p>
                        </div>
                        <div className='flex flex-row gap-2 items-center my-1'>
                            <MdOutlineAttachEmail color='red' onClick={handleEmailClick1} />
                            <p onClick={handleEmailClick1} className='cursor-pointer'>{email1}</p>
                        </div>
                        <div className='flex flex-row gap-4 items-center'>
                            <p>Find me:</p>
                            <a href="https://www.facebook.com/binayakdm" target='_blank'><FaFacebook color='blue' /></a>
                            <a href="https://github.com/binayakedem/" target='_blank'><FaGithubSquare color='black' /></a>
                            <a href="https://www.instagram.com/binayalimbuz/" target='_blank'><FaInstagram color='red' /></a>
                            <a href="https://www.linkedin.com/in/binayalimbu/" target='_blank'><FaLinkedin color='blue' /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
