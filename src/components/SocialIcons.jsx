// src/components/SocialIcons.jsx
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function SocialIcons() {
  return (
    <div className="flex justify-center gap-6 mb-4 text-2xl">
      <a
        href="https://github.com/julianzanetti"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#a29bfe] transition"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/julian-zanetti"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#a29bfe] transition"
      >
        <FaLinkedin />
      </a>
      <a
        href="mailto:julian.zanetti.devops@gmail.com"
        className="hover:text-[#a29bfe] transition"
      >
        <FaEnvelope />
      </a>
    </div>
  );
}
