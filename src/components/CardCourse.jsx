import React from "react";

export default function CardCourse({
  Picture,
  Name = "Course",
  Author = "Mr. John Does",
  Price = "Free",
  Level = "BASIC",
  ComingSOON = false,
}) {
  return (
    <div className="shadow-xl w-[200px] h-[250px] border border-solid border-slate-100 rounded-[20px] overflow-hidden hover:scale-[1.1] hover:shadow-xl active:scale-[1.1] active:shadow-xl duration-[0.3s] max-[449px]:mx-auto max-[449px]:my-[12px]">
      <div className="w-full h-[40%] overflow-hidden">
        <img
          src={Picture}
          alt="Python Course's Picture"
          className="w-[115%] h-[115%]"
        />
      </div>
      <div className="w-full h-[60%] px-[20px]">
        <div className="mt-[20px] flex gap-[7px]">
          <div className="bg-[#bca3ff] center text-[9px] text-[#4917d1] font-bold w-fit px-[6px] py-[1px] rounded-sm">
            {Level}
          </div>
          {ComingSOON ? (
            <div className="bg-slate-200 center text-[9px] text-slate-400 font-bold w-fit px-[6px] py-[1px] rounded-sm">
              Coming Soon
            </div>
          ) : null}
        </div>
        <p className="text-black font-bold inter-txwe text-[12px] mt-[10px]">
          {Name}
        </p>
        <p className="text-slate-600 inter-txwe text-[9px] mt-[2px]">
          {Author}
        </p>
        <div className="w-full border border-solid border-slate-200 my-[10px]"></div>
        <div className="w-full flex items-center justify-between">
          <p className="inter-txwe font-bold text-[#0d0070]">{Price}</p>
          <div
            className={`bg-slate-200 w-[25px] h-[25px] rounded-lg ${
              ComingSOON ? "cursor-not-allowed" : "cursor-pointer"
            } center duration-[0.5s] hover:bg-slate-300 active:bg-slate-300`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="13"
              viewBox="0 0 31 24"
            >
              <path
                fill="#555"
                d="M19.478 22.099v-.091H13.75v.091l.001.045a1.9 1.9 0 1 1-3.802 0l.001-.047v-.089h-.653a1.22 1.22 0 0 1-1.192-.96l-.001-.008L4.287 2.967l-3.261-.543A1.221 1.221 0 0 1 1.43.017L1.424.016l4.081.68c.497.085.887.461.991.943l.001.008l.692 3.264l11.905.992a6.5 6.5 0 0 0-.112 1.186v.004q0 .604.103 1.179l-.006-.04a1.397 1.397 0 0 0-.951 1.601l-.001-.009l.719 5.19c.044.333.196.625.418.845c.202.201.479.327.786.33h.001q.103 0 .199-.019l-.007.001a1.39 1.39 0 0 0 1.013-1.605l.001.009l-.392-2.822a6.66 6.66 0 0 0 4.808 2.044q.065.002.128-.006l.093-.005l-.669 3.902a.41.41 0 0 1-.4.339H9.96l.327 1.547h14.157a1.221 1.221 0 0 1 .002 2.44H23.28v.091a1.9 1.9 0 1 1-3.802 0zm1.358 0a.539.539 0 1 0 1.07-.094v.003h-1.06a1 1 0 0 0-.008.091zm-9.528 0a.539.539 0 1 0 1.07-.094v.003h-1.061l-.007.089v.002zm3.867-13.875a1.39 1.39 0 0 0-1.013 1.605l-.001-.009l.719 5.19c.044.333.196.625.418.845c.202.201.479.327.786.33h.001q.102 0 .199-.019l-.007.001a1.39 1.39 0 0 0 1.013-1.605l.001.009l-.719-5.19a1.45 1.45 0 0 0-.418-.845a1.13 1.13 0 0 0-.786-.331h-.001q-.104 0-.201.02l.007-.001zm-3.966 0a1.387 1.387 0 0 0-1.014 1.609l-.001-.009l.719 5.19c.044.333.196.625.418.845c.202.201.479.327.786.33h.001q.102 0 .199-.019l-.007.001a1.39 1.39 0 0 0 1.014-1.605l.001.009l-.72-5.193a1.45 1.45 0 0 0-.418-.845a1.13 1.13 0 0 0-.786-.331H11.4q-.102 0-.198.019zm8.789-1.128a5.678 5.678 0 1 1 11.36.002a5.678 5.678 0 0 1-11.362-.003zm1.627 0a4.051 4.051 0 1 0 8.106 0a4.051 4.051 0 0 0-8.108-.001zm3.24 1.621v-.808h-.808a.814.814 0 0 1 0-1.628h.808v-.808a.814.814 0 0 1 1.628 0v.808h.808a.814.814 0 0 1 0 1.628h-.808v.807a.814.814 0 0 1-1.628 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
