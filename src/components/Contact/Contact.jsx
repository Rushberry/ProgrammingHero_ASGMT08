import { useEffect, useRef, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { VscSend } from "react-icons/vsc";
import "../custom.css"

const Contact = () => {
    const [name, setName] = useState('User')
    const handleChangeName = e => {
        setName(e.target.value)
    }
    const handleSubmit = (e) => {
            e.preventDefault()
            const contact = document.getElementById('contact')
            contact.showModal()
            e.target.FirstName.value = '';
            e.target.LastName.value = '';
            e.target.Phone.value = '';
            e.target.Email.value = '';
            e.target.Message.value = '';
        }
    const nameRef = useRef('')

    useEffect(() => {
        nameRef.current.focus()
    },[])


    return (
        <div className="flex flex-col justify-center items-center w-full">
            <HelmetProvider>
                <Helmet>
                    <title>Contact | Gadget Heaven</title>
                </Helmet>
            </HelmetProvider>

            <div className="flex flex-col p-8 gap-4 bg-[#9538E2] text-white text-center w-full justify-center items-center">
                <h1 className="font-bold text-[32px]">Contact Us</h1>
                <p className="text-[16px] font-normal w-[796px]">Get in touch with us to explore support, inquiries, and collaborations. Whether you have questions, need assistance, or want to connect, we are here to help.</p>
            </div>
            <div className="flex flex-col mx-[150px] mt-[56px] w-full">
                <div><h3 className="font-bold mx-[150px] ml-[110px] mb-[43px] text-[24px] text-left">Contact Form</h3></div>
            </div>
            <form className="grid grid-cols-2 mx-[150px] w-[1040px] gap-4 mb-[60px]" onSubmit={handleSubmit}>
                <input className="p-4 rounded-full " name="FirstName" type="text" ref={nameRef} placeholder="First Name*" required/>
                <input className="p-4 rounded-full " onChange={handleChangeName} name="LastName" type="text" placeholder="Last Name*" required/>
                <input className="p-4 rounded-full " name="Phone" type="number" placeholder="Phone Number*" required/>
                <input className="p-4 rounded-full " name="Email" type="email" placeholder="Email Address*" required/>
                <textarea className="p-4 rounded-[32px] h-[240px] col-span-2" name="Message" type="text" placeholder="Write your message here*" required></textarea>
                <button className="bg-[#9538E2] rounded-full w-[200px] font-semibold  py-[11px] cursor-pointer text-white text-[20px] flex justify-center items-center gap-[14px]" type="submit">Submit <VscSend></VscSend></button>
            </form>
            <dialog id="contact" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box font-sora flex justify-center items-center flex-col py-[32px]">
                <img src="images/Group.png" alt="Successful" />
                <h3 className="font-bold text-[24px] mt-[24px] w-full text-center border-b pb-[11px]">Submitted Successfully</h3>
                <p className="py-4 text-center -mb-2">Thank you, {name} for contacting us. <br /> We will reach out to you shortly.</p>
                <div className="modal-action">
                <form method="dialog" className="flex justify-center items-center w-full">
                    <button className="btn w-full px-[200px] rounded-full font-semibold text-[16px]">Close</button>
                </form>
                </div>
            </div>
            </dialog>

        </div>
    );
};

export default Contact;