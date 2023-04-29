import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Contact = (): JSX.Element => {
    const formRef = useRef<HTMLFormElement>(null);
    useEffect(() => {
        const form = formRef.current;
        if (!form) return;
        gsap.fromTo(form.children,
            {
                y: -100,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                ease: "back.in",
                stagger: 0.3,
                duration: 1,
                scrollTrigger: {
                    trigger: form,
                    start: "top 100%",
                    end: "bottom 100%",
                    scrub: true,
                    toggleActions: "play none none none",
                }
        })
    })
    return (
        <section id="contact" className=" text-white p-10 section hover:shadow-[inset_0px_2px_20px_1px_black] bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
        <div className="text-2xl font-bold italic pb-5 hover-class">Let's connect</div>
            <div>
                <form method="POST" action="https://formspree.io/f/mqkjqlzl" ref={formRef}  className="flex flex-col gap-4">
                    <div className="flex gap-2">
                    <label htmlFor="name" className="text-lg italic hover-class ">Name: </label>
                        <input type="text" placeholder="Name" className="h-8 italic bg-slate-400 rounded hover-input w-full focus:outline-none p-3" name="name" required />
                    </div>
                    <div className="flex gap-2">
                    <label htmlFor="Email" className="text-lg italic hover-class">Email: </label>
                    <input type="email" placeholder="Email" className="h-8 bg-slate-400 rounded italic hover-input  w-full focus:outline-none p-3" name="email" required/>
                   </div>
                    <div>
                    <textarea className="w-full hover-input italic bg-slate-400 rounded  focus:outline-none p-3" name="message" id="message" cols={30} rows={10} placeholder="Just leave the message ">
                    </textarea>
                    </div>

                    <button type="submit" className="bg-black  p-2 hover-button">Send</button>
                </form>
        </div>
      </section>
    );
  };

  export default Contact;
