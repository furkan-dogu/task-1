import useCaseCalls from "@/hooks/useCaseCalls";
import { useState } from "react";
import { useSelector } from "react-redux";

const CreateTask = ({ open, setOpen }) => {
  const [info, setInfo] = useState({
    name: "",
    description: "",
    flagId: ""
  });

  const {flags} = useSelector(state=>state.case)

//   console.log(flags);

  const { postTask } = useCaseCalls();

  const handleChange = (e) => {
    if (e.target.name === 'flagId') {
        // Eğer input'un adı flagId ise, değeri bir sayıya dönüştür
        setInfo({ ...info, [e.target.name]: parseInt(e.target.value) });
      } else {
        // Diğer input alanları için normal şekilde değeri ayarla
        setInfo({ ...info, [e.target.name]: e.target.value });
      }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      name: info.name,
      description: info.description,
      boardId: 1,
      flagId: info.flagId,
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
    };
    postTask(newTask);
    // console.log(newTask);
    setOpen(false);
  };

  return (
    <>
      {open && (
        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="relative p-6 flex-auto">
                <form
                  className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full"
                  onSubmit={handleSubmit}
                >
                  <label className="block text-black text-sm font-bold mb-1">
                    Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    name="name"
                    type="text"
                    placeholder=" "
                    required
                    value={info?.name}
                    onChange={handleChange}
                  />
                  <label className="block text-black text-sm font-bold mb-1">
                    Description
                  </label>
                  <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    name="description"
                    rows="5"
                    cols="30"
                    type="text"
                    placeholder=" "
                    value={info?.description}
                    required
                    onChange={handleChange}
                  />
                  <select
                    className="shadow appearance-none border rounded w-full py-2 px-1 text-black cursor-pointer"
                    name="flagId"
                    value={info?.flagId}
                    onChange={handleChange}
                  >
                    
                    <option value="" className="text-gray-400">Select Priority</option>

                    {flags.map((flag) => (
                      <option key={flag.id} value={flag.id}>
                        {flag.name}
                      </option>
                    ))}
                  </select>
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      onClick={() => setOpen(false)}
                    >
                      Close
                    </button>
                    <button
                      className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateTask;
