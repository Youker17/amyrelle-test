import { useRef, useState } from 'react';
import Input from '../uikit/Input';
import TextArea from '../uikit/TextArea';

function Form({ firstNamePlaceholder, lastNamePlaceholder, emailPlaceholder, phonePlaceholder, messagePlaceholder, buttonText }) {
  const [val, setVal] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
    })

     const InputHandler = (e) => {
        const {value,name} = e.target
        setVal({...val,[name]:value})
     }
     
  
    const SubmitContact = () => {
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "agmarabdallah3@gmail.com",
            Password : "E5DE0C97AAB2EA43BD8999F703266A08DF54",
            To : "agmarabdallah3@gmail.com",
            From : "agmarabdallah3@gmail.com",
            Subject : "This is the subject",
            Body : "And this is the body"
        }).then(
          message => alert(message)
        );
    }
    return (
        <div className='w-full lg:w-4/6  sm:px-10 lg:px-24 flex flex-col gap-6'>
            <div className=' flex flex-col sm:flex-row gap-4'>
                <Input type="text"
                    placeholder={firstNamePlaceholder}
                    name="firstName"
                    className="py-2 px-2 md:py-3 md:px-3   border border-black w-full"
                    icon=""
                    label=""
                    onChange={InputHandler}
                    inputContainerStyle="w-full sm:w-3/6" />
                <Input type="text"
                    placeholder={lastNamePlaceholder}
                    name="lastName"
                    className="py-2 px-5 md:py-3 md:px-3 border border-black w-full"
                    icon=""
                    label=""
                    onChange={InputHandler}
                    inputContainerStyle="w-full sm:w-3/6" />
            </div>
            <div className=' flex gap-4 flex-col sm:flex-row'>
                <Input type="text"
                    placeholder={emailPlaceholder}
                    name="email"
                    className="py-2 px-5 md:py-3 md:px-3    border border-black w-full"
                    icon=""
                    label=""
                    onChange={InputHandler}
                    inputContainerStyle="w-full sm:w-3/6" />
                <Input type="text"
                    placeholder={phonePlaceholder}
                    name="phone"
                    className="py-2 px-5 md:py-3 md:px-3  border border-black w-full"
                    icon=""
                    label=""
                    onChange={InputHandler}
                    inputContainerStyle="w-full sm:w-3/6" />
            </div>
            <TextArea
                name="message"
                onChange={InputHandler}
                placeholder={messagePlaceholder}
                className=" overflow-hidden pt-5  px-9 md:py-3 md:px-3 w-full  border border-black "
            />

            <button
                onClick={SubmitContact}
                className="font-bold translate-y-0 text-sm   p-1  bg-black text-white transition-all  w-full     ">
                <div className=" font-poppins group transition-all ease-in-out  border-2 border-gray-200 px-4   w-full      ">
                    <div className=" w-full h-full text-center p-2 ">
                        {buttonText}
                    </div>
                </div>
            </button>

        </div>
    )
}

export default Form