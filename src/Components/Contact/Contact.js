import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_178z277', 'template_3enon6p', form.current, 'B30gqNMbGOALankl6')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }
    return (
        <div id='contact' className='m-8'>
            <h2 className='text-accent font-bold p-2 text-2xl mt-10 mb-4'>Get in touch!</h2>
            <form ref={form} onSubmit={sendEmail}>
                <div className='container bg-sky-200'>
                    <div>
                        <input type="text" name="name" placeholder='Name' className='w-1/2 border-2 border-gray-400 p-2 text-lg mt-2 rounded-md' id="" />
                    </div>
                    <div>
                        <input type="email" name="email" placeholder='Email' className='w-1/2 border-2 border-gray-400 p-2 mt-2 rounded-md' id="" />
                    </div>
                    <div>
                        <textarea name="message" placeholder='Message' id="" className='w-1/2 border-2 border-gray-400 p-2 mt-2  rounded-md' cols="30" rows="10"></textarea>
                    </div>
                    <div>
                        <input type="submit" className='btn btn-accent m-2 text-white' value="Send message" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Contact;