import Layouts from "@/components/Layouts";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios"; // Import axios
import TanStackTable from "@/components/tanktable";

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
      formData.append("file", data.image[0]);

      const response = await axios.post("/api/book", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Response data:", response.data);
      if (response.data) {
        setIsLoading(false);
        alert("Амжилттай");
      }
    } catch (error) {
      console.error("Error occurred:", error);
      setIsLoading(false);
    }
  };

  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <Layouts title={"admin"}>
      <div>
        {/* Modal toggle button */}
        <button
          onClick={toggleModal}
          className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        >
          Ном нэмэх
        </button>

        {/* Main modal */}
        {isModalOpen && (
          <div
            id="default-modal"
            tabIndex="-1"
            aria-hidden="true"
            className="fixed top-0 right-0 left-0 z-50 w-full h-[calc(100%-1rem)] max-h-full flex justify-center items-center md:inset-0 overflow-y-auto overflow-x-hidden"
          >
            <div className="relative p-4 w-full max-w-2xl max-h-full">
              {/* Modal content */}
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                {/* Modal header */}
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Ном нэмэх
                  </h3>
                  <button
                    type="button"
                    onClick={toggleModal}
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>

                {/* Modal body */}
                <div className="p-4 md:p-5 space-y-4">
                  <form
                    className="max-w-md mx-auto"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div className="relative z-0 w-full mb-5 group">
                      <input
                        {...register("name")}
                        type="text"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder="Номын нэр"
                        required
                      />
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                      <input
                        {...register("author")}
                        type="text"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder="Зохиолч"
                        required
                      />
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                      {/* <input  type="text" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Тайлбар" required /> */}
                      <label htmlFor=""> Тайлбар : </label> <br />
                      <textarea
                        className=" border"
                        placeholder="Тайлбар......."
                        {...register("description")}
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                      ></textarea>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                      <input
                        {...register("image", { required: true })}
                        type="file"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder="Зураг"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      {isLoading ? "Нэмэх..." : "Нэмэх"}
                    </button>
                  </form>
                </div>

                {/* Modal footer */}
                <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                  <button
                    onClick={toggleModal}
                    type="button"
                    className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    Хаах
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <TanStackTable />
    </Layouts>
  );
}

export default Form;
