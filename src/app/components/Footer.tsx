export default function () {
  return (
    <footer className="flex bg-[#2d2e32] items-center flex-row justify-evenly px-2.5 py-[50px]">
      <p className="text-base text-[whitesmoke] mb-[15px] font-bold  sm:text-xs md:text-xs xl:text-lg"> Copyright © 2024 • Make with ❤️ By Yoni Deserbaix</p>
      <div className="socials ">
        <a
          href="http://linkedin.com/in/yoni-deserbaix"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bx bxl-linkedin-square text-[1.8rem] text-[whitesmoke] transition-all duration-[0.2s] mr-[15px] hover:opacity-[70%]"></i>
        </a>
        <a
          href="https://github.com/Yoni-Deserbaix"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bx bxl-github text-[1.8rem] text-[whitesmoke] transition-all duration-[0.2s] mr-[15px] hover:opacity-[70%]"></i>
        </a>
      </div>
    </footer>
  );
}