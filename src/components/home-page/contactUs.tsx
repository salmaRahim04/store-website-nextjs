
const ContactUs = () => {
    return (
           <div className="flex justify-center items-center  h-screen w-full">
               <div className="bg-white p-16 rounded-lg shadow-lg max-w-lg w-full">
                   <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                   <form className="space-y-4">
                       {['Name', 'Email', 'Message'].map(field => (
                           <div key={field} className="mb-4">
                               <label htmlFor={field.toLowerCase()} className="block text-gray-700 text-sm font-bold mb-2">
                                   {field}
                               </label>
                               <input
                                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight  focus:shadow-outline"
                                   id={field.toLowerCase()}
                                   type={field === 'Email' ? 'email' : 'text'}
                                   placeholder={`Enter your ${field.toLowerCase()}`}
                               />
                           </div>
                       ))}
                       <button
                           className="bg-green-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                           type="submit"
                       >
                           Send
                       </button>
                   </form>
               </div>
           </div>
    );
};

export default ContactUs;
