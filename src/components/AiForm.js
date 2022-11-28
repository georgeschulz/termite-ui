import { useState } from "react";
import classifyImage from "../api/classifyImage";
import { useNavigate } from "react-router-dom";

function AiForm() {
    const [image, setImage] = useState('');
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [phone, setPhone] = useState(null);
    const [address, setAddress] = useState(null);
    const [city, setCity] = useState(null);
    const [state, setState] = useState(null);
    const [zip, setZip] = useState(null);
    const [message, setMessage] = useState(null);
    const navigate = useNavigate();

    const encodeProbability = (classification) => {
        const type = classification.label;
        const element = classification.confidences.find(name => name.label === type);
        const probability = element.confidence;
        const encode = encodeURIComponent(probability)
        return encode;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const classification = await classifyImage(image);
        const probability = encodeProbability(classification);
        if(classification.label === 'Termites') {
            navigate('/termites?probability=' + probability);
        } else {
            navigate('/ants?probability=' + probability);
        }
    };

    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };
    
    const handleUpload = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertToBase64(file);
        setImage(base64);
    };

    return (
        <div className='flex justify-center'>
            <form className='w-1/2'>
                <div className='flex flex-wrap mb-4'>
                    <div className='w-full'>
                        <label className='block text-gray-700 text-md font-bold mb-2' htmlFor='image'>
                            Image
                        </label>
                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='image' type='file' onChange={(e) => handleUpload(e)} />
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
                        <button className=' hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='button' style={{'backgroundColor': '#75bc60'}} onClick={(e) => handleSubmit(e)}>
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AiForm;