"use client"
import contactData from "@/data/contactData";
import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
    const [state, handleSubmit] = useForm("mvggdgwk");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleInputChange = (e) =>{
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        await handleSubmit(e);
        setFormData({
                name: "",
                email: "",
                message: "",
            });
        }; 

    return (
        <div className="min-h-screen p-4 sm:p-6 lg:p-8 overflow-auto scrollbar-hide">

            {/* Title */}
            <div className="text-black bg-title-color rounded-lg shadow-md mt-2 sm:mt-5 p-4 sm:p-6 lg:p-8 bg-opacity-60">
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-indigo-950 overflow-hidden">
                    {contactData.title}
                </h1>
                <p className="text-base md:text-lg lg:text-xl font-semibold text-blue-950 mt-2 lg:mt-4">
                    {contactData.description}
                </p>
            </div>

            {/* Form */}
            <div className="space-y-6 mt-4 md:mt-5 lg:mt-7">
                <form onSubmit={handleFormSubmit} className="w-full flex flex-col items-start p-4 md:p-6 lg:p-6 rounded-lg shadow-md bg-background bg-opacity-70">
                    <div className="flex flex-col md:flex-row items-start md:items-center w-full mb-4 lg:mb-8">
                        <label
                            htmlFor="name"
                            className="block md:w-1/3 text-xl lg:text-2xl font-bold text-indigo-900 mb-2 md:mb-0">
                            Your Name
                        </label>
                        <div>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                className="w-full md:w-2/3 mt-1 md:mt-0 p-2 border border-gray-500 rounded-lg"
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                                className="text-red-600 text-sm mt-1 md:ml-4"
                            />
                        </div>

                    </div>

                    <div className="flex flex-col md:flex-row items-start md:items-center w-full mb-8">
                        <label
                            htmlFor="email"
                            className="block md:w-1/3 text-xl lg:text-2xl font-bold text-indigo-900 mb-2 md:mb-0">
                            Email Address
                        </label>
                        <div>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="w-full md:w-2/3 mt-1 md:mt-0 p-2 border border-gray-500 rounded-lg"
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                                className="text-red-600 text-sm mt-1 md:ml-4"
                            />
                        </div>

                    </div>

                    <div className="flex flex-col md:flex-row items-start md:items-center w-full mb-8">
                        <label
                            htmlFor="message"
                            className="block md:w-1/3 text-xl lg:text-2xl font-bold text-indigo-900 mb-2 md:mb-0">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            className="w-full md:w-2/3 mt-1 md:mt-0 p-2 border border-gray-500 rounded-lg"
                        />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                            className="text-red-600 text-sm mt-1 md:ml-4"
                        />
                    </div>

                    <div className="w-full flex justify-end">
                        <button
                            type="submit"
                            disabled={state.submitting}
                            className="px-6 py-2 text-white font-bold rounded-lg bg-indigo-700 hover:bg-indigo-900"
                        >
                            Submit
                        </button>
                    </div>

                </form>

                {state?.succeeded && (
                    <p className="mt-2 text-indigo-950 text-xl font-semibold">Thank you for your message! I will get back to you soon.</p>

                )}
            </div>

        </div>
    );
}