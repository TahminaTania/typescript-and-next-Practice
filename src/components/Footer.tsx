import {FiFacebook,FiLinkedin} from "react-icons/fi"
import {AiOutlineTwitter,AiOutlineInstagram} from "react-icons/ai"
import {FaPinterestP} from "react-icons/fa"

export default function Footer() {
  return (
    <section>
        <footer className="border-t-2 border-black">
            <div className="container mx-auto text-gray-600 py-4">
                <div className="md:flex items-center md:justify-between flex-row justify-center">
                    <div className="flex gap-3 py-5 md:justify-start justify-center">
                        <div><FiFacebook/></div>
                        <div><AiOutlineTwitter/></div>
                        <div><AiOutlineInstagram/></div>
                        <div><FiLinkedin/></div>
                        <div><FaPinterestP/></div>  
                    </div>
                    <div className="flex md:justify-start justify-center">© 2023 copyright all right reserved</div> 
                </div>
            </div>
        </footer>
    </section>
  )
}
