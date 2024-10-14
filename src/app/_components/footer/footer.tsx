'use client';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    const handleEmailClick = () => {
        const email = "devacc219@gmail.com";
        const subject = "Hello!";
        const body = "I would like to get in touch with you.";

        // Use mailto link to open the user's email client
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    const handleClick = (ctx: string) => {
        switch (ctx) {
            case 'github': {
                window.open('https://github.com/devacc219', '_blank');
                break;
            }
            case 'linkedin': {
                window.open('https://www.linkedin.com/in/vinayr219', '_blank');
                break;
            }
        }
    }

    return (
        <>
            <div className="flex justify-between mx-4 my-4">
                <div>
                    <button
                        onClick={handleEmailClick}
                        className="flex items-center p-2"
                    >
                        <FontAwesomeIcon icon={faEnvelope} className="h-6 w-6 text-gray-500" />
                        &nbsp;Email me
                    </button>
                </div>
                <div>
                    <button onClick={() => { handleClick('github') }} >
                        <FontAwesomeIcon icon={faGithub} className="h-6 w-6 text-gray-500 mx-4" />
                    </button>
                    <button onClick={() => { handleClick('linkedin') }} >
                        <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6 text-gray-500 mx-4" />
                    </button>
                </div>
            </div>
        </>
    );
}