import { useState } from "react";
import classifyImage from "../api/classifyImage";
import { useNavigate } from "react-router-dom";
import emailContact from "../api/emailContact";
import Subheader from "./Subheader";
import { convertToBase64 } from "../helpers/covertToBase64";
import { encodeProbability } from "../helpers/encodeProbability";

function AiForm() {
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (name !== '' && email !== '' && phone !== '' && address !== '' && city !== '' && state !== '' && zip !== '' && image !== '') {
            const classification = await classifyImage(image);
            const probability = encodeProbability(classification);
            if (classification.label === 'Termites') {
                await emailContact({ name, email, phone, address, city, zip, state, targetType: 'Termites' });
                navigate('/termites?probability=' + probability);
            } else {
                await emailContact({ name, email, phone, address, city, zip, state, targetType: 'Ants' });
                navigate('/ants?probability=' + probability);
            }
        } else {
            alert('Please fill out all fields!');
        }
    };

    const handleUpload = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertToBase64(file);
        setImage(base64);
    };

    return (
        <div className='flex justify-center pt-10'>
            <form className='md:w-2/3 lg:w-1/2 pt-2 px-6'>
                <Subheader>Upload a picture below. Our software can use image-recognition to tell you whether it's a termite or ant!</Subheader>
                <div className='flex flex-wrap mb-4'>
                    <div className='w-full'>
                        <label className='block text-gray-700 text-md font-bold mb-2' htmlFor='image'>
                            Clearest Picture of the Pest
                        </label>
                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='image' type='file' onChange={(e) => handleUpload(e)} />
                    </div>
                </div>
                <div className='flex flex-wrap mb-4'>
                    <div className='w-full'>
                        <label className='block text-gray-700 text-md font-bold mb-2' htmlFor='name'>
                            Name
                        </label>
                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='name' type='text' value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                </div>
                <div className='flex flex-wrap mb-4'>
                    <div className='w-full'>
                        <label className='block text-gray-700 text-md font-bold mb-2' htmlFor='email'>
                            Email
                        </label>
                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                </div>
                <div className='flex flex-wrap mb-4'>
                    <div className='w-full'>
                        <label className='block text-gray-700 text-md font-bold mb-2' htmlFor='phone'>
                            Phone
                        </label>
                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='phone' type='tel' value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                </div>
                <div className='flex flex-wrap mb-4'>
                    <div className='w-full'>
                        <label className='block text-gray-700 text-md font-bold mb-2' htmlFor='address'>
                            Address
                        </label>
                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='address' type='text' value={address} onChange={(e) => setAddress(e.target.value)} />
                    </div>
                </div>
                <div className='flex flex-wrap mb-4'>
                    <div className='w-full'>
                        <label className='block text-gray-700 text-md font-bold mb-2' htmlFor='city'>
                            City
                        </label>
                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='city' type='text' value={city} onChange={(e) => setCity(e.target.value)} />
                    </div>
                </div>
                <div className='flex flex-wrap mb-4'>
                    <div className='w-full'>
                        <label className='block text-gray-700 text-md font-bold mb-2' htmlFor='state'>
                            State
                        </label>
                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='state' type='text' value={state} onChange={(e) => setState(e.target.value)} />
                    </div>
                </div>
                <div className='flex flex-wrap mb-4'>
                    <div className='w-full'>
                        <label className='block text-gray-700 text-md font-bold mb-2' htmlFor='zip'>
                            Zip
                        </label>
                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='zip' type='text' value={zip} onChange={(e) => setZip(e.target.value)} />
                    </div>
                </div>
                <div className='flex flex-wrap mb-4'>
                    <div className='w-full justify-center flex'>
                        <button className=' hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='button' style={{ 'backgroundColor': '#75bc60' }} onClick={(e) => handleSubmit(e)}>
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AiForm;