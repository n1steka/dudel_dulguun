import Layouts from '@/components/Layouts';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios'; // Import axios

function Form() {
    const { register, handleSubmit } = useForm();
    const [isLoading, setIsLoading] = useState(false); // State for loading indicator

    const onSubmit = async (data) => {
        try {
            setIsLoading(true); // Set loading state to true when submitting
            console.log(data);

            const formData = new FormData();
            formData.append("name", data.name);
            formData.append("author", data.author);
            formData.append("description", data.description);
            formData.append("file", data.image[0]); // Use 'image' instead of 'file'

            const response = await axios.post('/api/book', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log("Response data:", response.data);
            if (response.data) {
                setIsLoading(false);
                alert("Амжилттай")
            }
        } catch (error) {
            console.error("Error occurred:", error);
            setIsLoading(false);
        }
    };

    return (
        <Layouts title={"admin"}>
            <h1 className='text-3xl my-12 font-medium'>Ном нэмэх</h1>
            <form className="max-w-md mx-auto" onSubmit={handleSubmit(onSubmit)}>
                <div className="relative z-0 w-full mb-5 group">
                    <input {...register('name')} type="text" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Номын нэр" required />
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input {...register('author')} type="text" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Зохиолч" required />
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    {/* <input  type="text" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Тайлбар" required /> */}
                    <label htmlFor=""> Тайлбар : </label>  <br />
                    <textarea className=' border' placeholder='Тайлбар.......' {...register('description')} name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input {...register('image', { required: true })} type="file" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Зураг" required />
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{isLoading ? "Нэмэх..." : "Нэмэх"}</button>
            </form>
        </Layouts>
    );
}

export default Form;
