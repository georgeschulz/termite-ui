import { useState } from "react";

function AiForm() {
    const [image, setImage] = useState(null);
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [phone, setPhone] = useState(null);
    const [address, setAddress] = useState(null);
    const [city, setCity] = useState(null);
    const [state, setState] = useState(null);
    const [zip, setZip] = useState(null);
    const [message, setMessage] = useState(null);

    return (
        <div className='flex justify-center'>
            <form className='w-1/2'>
                <div className='flex flex-wrap mb-4'>
                    <div className='w-full'>
                        <label className='block text-gray-700 text-md font-bold mb-2' htmlFor='image'>
                            Image
                        </label>
                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='image' type='file' />
                    </div>
                </div>
                <div className='flex flex-wrap mb-4'>
                    <div className='w-full'>
                        <label className='block text-gray-700 text-md font-bold mb-2' htmlFor='name'>
                            Name
                        </label>
                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='name' type='text' />
                    </div>
                </div>
                <div className='flex flex-wrap mb-4'>
                    <div className='w-full'>
                        <label className='block text-gray-700 text-md font-bold mb-2' htmlFor='email'>
                            Email
                        </label>
                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='email' type='email' />
                    </div>
                </div>
                <div className='flex flex-wrap mb-4'>
                    <div className='w-full'>
                        <label className='block text-gray-700 text-md font-bold mb-2' htmlFor='phone'>
                            Phone
                        </label>
                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='phone' type='tel' />
                    </div>
                </div>
                <div className='flex flex-wrap mb-4'>
                    <div className='w-full'>
                        <label className='block text-gray-700 text-md font-bold mb-2' htmlFor='address'>
                            Address
                        </label>
                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='address' type='text' />
                    </div>
                </div>
                <div className='flex flex-wrap mb-4'>
                    <div className='w-full'>
                        <label className='block text-gray-700 text-md font-bold mb-2' htmlFor='city'>
                            City
                        </label>
                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='city' type='text' />
                    </div>
                </div>
                <div className='flex flex-wrap mb-4'>
                    <div className='w-full'>
                        <label className='block text-gray-700 text-md font-bold mb-2' htmlFor='state'>
                            State
                        </label>
                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='state' type='text' />
                    </div>
                </div>
                <div className='flex flex-wrap mb-4'>
                    <div className='w-full'>
                        <label className='block text-gray-700 text-md font-bold mb-2' htmlFor='zip'>
                            Zip
                        </label>
                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='zip' type='text' />
                    </div>
                </div>
                <div className='flex flex-wrap mb-4'>
                    <div className='w-full'>
                        <label className='block text-gray-700 text-md font-bold mb-2' htmlFor='message'>
                            Message
                        </label>
                        <textarea className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='message' type='text' />
                    </div>
                </div>
                <div className='flex flex-wrap mb-4'>
                    <div className='w-full justify-center flex'>
                        <button className=' hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='button' style={{'backgroundColor': '#75bc60'}}>
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AiForm;