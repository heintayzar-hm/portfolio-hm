const Contact = () : JSX.Element  => {
    return (
        <section className="bg-yellow-600 text-slate-700 p-10">
        <div className="text-2xl font-bold italic pb-5">Let's connect</div>
            <div>
                <form method="post" className="flex flex-col gap-4">
                    <div className="flex gap-2">
                    <label htmlFor="name" className="text-lg italic">Name: </label>
                        <input type="text" placeholder="Name" className="h-8 italic bg-yellow-500 w-full focus:outline-none p-3" required />
                    </div>
                    <div className="flex gap-2">
                    <label htmlFor="Email" className="text-lg italic">Email: </label>
                    <input type="email" placeholder="Email" className="h-8 italic bg-yellow-500 w-full focus:outline-none p-3" required/>
                   </div>
                    <div>
                    <textarea className="w-full italic bg-yellow-500 focus:outline-none p-3" name="message" id="message" cols={30} rows={10} placeholder="Just leave the message ">

                    </textarea>
                    </div>

                    <button type="submit" className="bg-yellow-500 p-2">Send</button>
                </form>
        </div>
      </section>
    );
  };

  export default Contact;
