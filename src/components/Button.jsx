const Button = ({ label, link }) => {
    return (
        <a
            href={link}
            download
            target="_blank"
            rel="noopener noreferrer" 
            className="flex justify-center items-center gap-2 px-7 py-4 mt-3 
                border border-white/50 rounded-full font-subheader text-lg text-white leading-none 
                hover:bg-green/50 hover:text-light-green transition-colors duration-500 backdrop-blur-sm bg-white/10 shadow-lg"
        >
            {label}
        </a>
    );
};

export default Button;
