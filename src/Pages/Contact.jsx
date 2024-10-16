import React, { useState } from 'react';
import banner from '../assets/limbu.jpg';

const Contact = () => {
    const [user, setUser] = useState({
        name: '', email: '', subject: '', message: ''
    });
    const [botReply, setBotReply] = useState(''); // State for chatbot reply

    let name, value;
    const data = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, subject, message } = user;
        
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name, email, subject, message
            })
        };

        const res = await fetch('https://profilemsg-default-rtdb.firebaseio.com/message.json', options);

        if (res) {
            alert("Message sent");
            setUser({ name: '', email: '', subject: '', message: '' });

            // Introduce chatbot reply here
            setBotReply(`Hi ${name}, thanks for reaching out! We have received your message and will get back to you shortly.`);
        } else {
            alert("Something went wrong!!");
        }
    };

    return (
        <>
            <div className='h-96 w-full' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <img className='h-96 w-full object-cover' src={banner} alt="banner" />
            </div>
            <div className='bg-dark-50 text-light-gray lg:px-32 md:px-20 px-2'>
                <div className='bg-[#FEF9C3] rounded shadow md:p-10 p-4' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <h1 className='text-black font-bold text-2xl text-center mb-10'>Contact Me</h1>
                    <form method='POST'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mb-6'>
                            <input type="text" name="name" placeholder='Enter Your name' className='border p-2 rounded text-black w-full' value={user.name} required onChange={data} />
                            <input type="email" name="email" placeholder='Enter Your Email' className='border p-2 rounded text-black w-full' value={user.email} required onChange={data} />
                            <input type="text" name="subject" placeholder='Enter Your Subject' className='border p-2 rounded text-black w-full' value={user.subject} required onChange={data} />
                        </div>
                        <textarea name="message" placeholder='Enter Your Message Here' className='border px-2 py-20 rounded text-black w-full' value={user.message} required onChange={data} />
                        <button className='text-white bg-[#F39C12] font-semibold my-6 px-8 py-3 rounded hover:text-white duration-300 ease-in-out' onClick={handleSubmit}>Contact Me</button>
                    </form>

                    {/* Chatbot reply after message submission */}
                    {botReply && (
                        <div className="mt-6 bg-green-100 p-4 rounded">
                            <p className="text-green-800 font-semibold">{botReply}</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Contact;
