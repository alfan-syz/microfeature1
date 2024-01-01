import React from 'react'

const AddPaslon: React.FC = () => {
  return (
    <>
   <h1 className='container flex justify-center mt-10 text-white font-bold text-4xl'>ADD PASLON</h1>
    <div className='container  flex justify-center mt-12 gap-20' style={{width: "844px"}}>
        
      <div className='w-72 p-2 mt-12' style={{height: "319px"}}>
        <img src="https://media.istockphoto.com/id/1194817332/id/foto/potret-pria-tampan-serius-dalam-jaket-kancing-jas-abu-abu-dengan-latar-belakang-abu-abu.jpg?s=612x612&w=0&k=20&c=xSIPptSbmxtSSw6sLYdwnYC0CPjzb7GtPCnCNPaq_4g="
        className='w-full h-full border' alt="" />
      </div>

      <div>
      <div className="mt-12 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-2 w-72" action="#" method="POST">
            <div>
              <label
                htmlFor="nama"
                className="block text-sm font-medium leading-6 text-white"
              >
                Nama
              </label>
              <div className="mt-2">
                <input
                  id="nama"
                  name="nama"
                  type="text"
                  required
                  className="bg-stone-400 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-black placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Nomor Urut
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="nomor-urut"
                  name="nomor-urut"
                  type="number"
                  required
                  className="bg-stone-400 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="input-visi-misi"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Visi Misi
                </label>
              </div>
              <div className="mt-2">
                <textarea
                  id="input-visi-misi"
                  rows={3}
                  cols={10}
                  style={{resize: "none"}}
                  
                  required
                  className="bg-stone-400 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default AddPaslon
