import Logo from "/metroAgraLogo.webp";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Appstore_Logo from "/Appstore.webp";
import Playstore_Logo from "/playstore.webp";

const Footer = () => {
  return (
    <>
      <footer className=" bg-gray-100">
        <div className="mx-auto md:mx-6 xl:mx-10 px-4 py-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4">
            <div className="col-span-1 md:col-span-3 justify-self-center">
              <div className="">
                <img src={Logo} alt="delhimetrorail" className="h-12 lg:h-16" />
              </div>
            </div>
            <div className="col-span-1 md:col-span-9">
              <div className="px-4">
                <h3 className="text-xl font-bold w-full text-center md:text-left">
                  Quick Links
                </h3>
                <ul className="text-sm grid grid-cols-2 justify-items-center gap-y-2 md:flex md:flex-row md:items-center justify-start md:divide-x-2 divide-gray-500 my-4">
                  <li className="leading-4 md:pr-2 hover:text-red-700">
                    <a href="/miscellaneous">Miscellaneous</a>
                  </li>
                  <li className="leading-4 md:px-2 hover:text-red-700 ">
                    <a href="/faq">FAQ’s</a>
                  </li>
                  <li className="leading-4 md:px-2 hover:text-red-700">
                    <a href="/emergency-evacuation-plan">
                      Evacuation Guidelines
                    </a>
                  </li>
                  <li className="leading-4 md:px-2 hover:text-red-700 ">
                    <a href="/security-dmrc">Security</a>
                  </li>
                  <li className="leading-4 md:px-2 hover:text-red-700 ">
                    <a href="/contact-us">Help &amp; Contact </a>
                  </li>
                  <li className="leading-4 md:px-2 hover:text-red-700 ">
                    <a href="/disclaimer">Disclaimer</a>
                  </li>
                  <li className="leading-4 md:px-2 hover:text-red-700 ">
                    <a href="/privacy-policy">Privacy Policy</a>
                  </li>
                </ul>
              </div>
              <hr className="mx-4 border-0.5 border-gray-300" />
              <div className="flex items-center flex-col-reverse md:flex-row md:items-start justify-between gap-x-4 mt-4 w-full">
                {/* <div className="basis-[35%] grid grid-cols-2 w-full text-sm">
                  <div className="col-span-1 px-4 ">
                    <h3 className="font-bold text-base">Links</h3>
                    <ul className="flex flex-col items-start justify-center gap-y-2">
                      <li className="hover:cursor-pointer hover:text-red-700">Home</li>
                      <li className="hover:cursor-pointer hover:text-red-700">Services</li>
                      <li className="hover:cursor-pointer hover:text-red-700">About</li>
                    </ul>
                  </div>
                  <div className="col-span-1 px-4 ">
                    <h3 className="font-bold text-base">Links</h3>
                    <ul className="flex flex-col items-start justify-center gap-y-2">
                      <li className="hover:cursor-pointer hover:text-red-700">Terms</li>
                      <li className="hover:cursor-pointer hover:text-red-700">Contact</li>
                      <li className="hover:cursor-pointer hover:text-red-700">Privacy</li>
                    </ul>
                  </div>
                </div> */}
                <div className="basis-1/3 w-full my-2 md:m-0">
                  <ul className="flex items-center justify-center gap-x-4">
                    <li className="w-fit flex justify-center">
                      <img
                        src={Playstore_Logo}
                        className="object-contain max-w-[100%]"
                        width={120}
                        height={36}
                        alt=""
                      />
                    </li>
                    <li className="w-fit flex justify-center">
                      <img
                        src={Appstore_Logo}
                        className="object-contain max-w-[100%]"
                        width={120}
                        height={36}
                        alt=""
                      />
                    </li>
                  </ul>
                </div>
                <div className="basis-1/4 my-2 md:m-0 w-full ">
                  <ul className="flex items-center justify-center md:justify-end gap-x-2 lg:gap-x-4 px-4">
                    <li
                      title="Facebook Page"
                      className="transition-all duration-200 ease-in-out delay-75 hover:cursor-pointer text-gray-700 hover:text-[#3B5998]"
                    >
                      <FacebookIcon fontSize="medium" />
                    </li>
                    <li
                      title="Twitter Page"
                      className="transition-all duration-200 ease-in-out delay-75 hover:cursor-pointer text-gray-700 hover:text-black"
                    >
                      <XIcon fontSize="medium" />
                    </li>
                    <li
                      title="Instagram Page"
                      className="transition-all duration-200 ease-in-out delay-75 hover:cursor-pointer text-gray-700 hover:text-[#C13584] "
                    >
                      <InstagramIcon fontSize="medium" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-2 md:flex-row items-center justify-between bg-black text-white h-full py-4 px-10">
          <div className="text-sm">
            <p className="font-semibold">
              <span> &copy; {new Date().getFullYear()}.</span>
              <span> All right reserved. &nbsp;</span>
            </p>
          </div>
          <div className="text-sm font-semibold">
            <p>Under Development</p>
          </div>
          <div className="flex items-center divide-x-2 leading-4 text-sm">
            <div className="pr-2">Company Logo</div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
