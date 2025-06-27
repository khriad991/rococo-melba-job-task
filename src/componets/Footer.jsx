
const Footer = () => {


    
    return (
        <footer className="bg-[#1e293b] py-[30px] border-t border-[rgba(96,165,250,0.2)]">
                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-8 mb-4">
                    <div className="max-w-7xl mx-auto ">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <div className="flex flex-wrap space-y-4 mt-4 md:mt-0">
                                <a href={`/login`}
                                   className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                                    Terms of use
                                </a>
                                <a href={`/login`}
                                   className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                                    Privacy Policy
                                </a>

                            </div>
                            <p className="text-sm text-center text-gray-400">
                                &copy; 2025 Clin Technologies. All rights reserved.
                            </p>

                        </div>
                    </div>
                </div>
            </footer>
    );
};

export default Footer;