import { MainLayOut } from "@/components/MainLayOut";

export default function Page(){
    return <MainLayOut>
        <div>
            <span>Contact Us</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            <div>
                <div>
                    <h2>Address</h2>
                    <p>1328 Oak Ridge Drive, Saint Louis, Missouri</p>
                </div>
                <div>
                    <h2>Contact</h2>
                    <p>313-332-8662
                    info@email.com</p>
                </div>
                <form className="bg-[#F6F6F7] max-w-[643px] mx-auto">
                    <label>Leave a Message</label>
                    <input placeholder="Your Name" type="text" />
                    <input placeholder="Your Email" type="email" />
                    <input placeholder="Subject" type="text" />
                    <input placeholder="Write a message" />
                    <button className="btn">Send Message</button>
                </form>
            </div>
        </div>
    </MainLayOut>
}