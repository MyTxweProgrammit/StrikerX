import React, { useEffect, useState } from 'react';
import { HeaderUser } from './User'
import { Link } from 'react-router';

export default function Markdown({ logout }) {
  // const [demonstrate, setDemonstrate] = useState('')
  // useEffect(() => {
  //   if (window.markdownit) {
  //     let md = window.markdownit();
  //     let result = md.render(demonstrate);
  //     document.getElementById('output').innerHTML = result;
  //   }
  // }, [demonstrate])
  return (
    <div className="w-screen height-markdown bg-white pt-[20px]">
      <HeaderUser logoutHead={logout} markdown={true}/>
      <p className='text-black ml-[20px] font-bold inter-txwe text-[35px]'>Markdown Syntax</p>
      <div className='center w-fit ml-[20px] gap-[5px] text-[14px] mt-[-3px]'>
        <p className='text-black inter-txwe text-slate-600'>Last Update:  7.07 PM by</p>
        <Link to='/profile/mytxwedevs'>MyTxweDEVs</Link>
      </div>
      <div className='bg-black mx-[20px] h-[1px] mt-[10px]'></div>
      <p className='text-black font-bold text-[20px] inter-txwe ml-[20px] mt-[15px]'>Simple Text</p>
      <p className='ml-[30px] text-black text-[16px] inter-txwe mr-[30px]'>About wrting some text. You can type an ordinary syntax by write a text in your .md file. For example</p>
      <div className='w-[320px] h-[70px] my-[10px] ml-[40px] bg-black rounded-xl overflow-hidden'>
        <div className='center relative mt-[10px]'>
          <section className='center w-fit gap-[5px] absolute left-[20px]'>
            <div className='w-[15px] h-[15px] rounded-full bg-[#FF0000]'></div>
            <div className='w-[15px] h-[15px] rounded-full bg-[#FFD650]'></div>
            <div className='w-[15px] h-[15px] rounded-full bg-[#00FF0D]'></div>
          </section>
          <div className='text-white text-center inter-txwe text-[12px] font-bold'>Example101.md</div>
        </div>
        <div className='flex items-center relative mt-[10px]'>
          <div className='absolute bg-zinc-800 w-full h-[18px] text-slate-300 flex items-center text-[12px] pl-[20px]'><p>1</p></div>
          <p className='text-slate-300 z-50 text-[12px] text-left pl-[50px]'>Hello Developer!</p>
        </div>
      </div>
      <p className='ml-[30px] text-black text-[16px] inter-txwe mr-[30px]'>
        From above of code. You will see .md file which named 
        <kbd className="kbd kbd-sm bg-white">Example101</kbd>
        are expressing the first line of code (You can see the number on left). And we type the code that is
        <kbd className='kbd kbd-sm bg-white'>Hello Developer</kbd>.
        The value will show on the page with our text code.
      </p>
      <p className='text-black font-bold text-[20px] inter-txwe ml-[20px] mt-[15px]'>Bold</p>
      <p className='ml-[30px] text-black text-[16px] inter-txwe mr-[30px]'>
        To write a bold text We will use for 2 special characters. It's
        <kbd className="kbd kbd-sm bg-white">_</kbd>and
        <kbd className="kbd kbd-sm bg-white">*</kbd>
        You need use these characters for one. Type twice on the front of text and repeat it on the back of text. For example
      </p>
      <div className='w-[320px] h-[90px] my-[10px] ml-[40px] bg-black rounded-xl overflow-hidden'>
        <div className='center relative mt-[10px]'>
          <section className='center w-fit gap-[5px] absolute left-[20px]'>
            <div className='w-[15px] h-[15px] rounded-full bg-[#FF0000]'></div>
            <div className='w-[15px] h-[15px] rounded-full bg-[#FFD650]'></div>
            <div className='w-[15px] h-[15px] rounded-full bg-[#00FF0D]'></div>
          </section>
          <div className='text-white text-center inter-txwe text-[12px] font-bold'>Example102.md</div>
        </div>
        <div className='relative mt-[10px]'>
          <section>
            <div className='absolute bg-zinc-800 w-full h-[18px] text-slate-300 flex items-center text-[12px] pl-[20px]'><p>1</p></div>
            <p className='text-slate-300 z-50 text-[12px] text-left pl-[50px] absolute'>**Show 67**</p>
          </section>
          <section className='translate-y-[17px]'>
            <div className='absolute bg-zinc-800 w-full h-[18px] text-slate-300 flex items-center text-[12px] pl-[20px]'><p>2</p></div>
            <p className='text-slate-300 z-50 text-[12px] text-left pl-[50px] absolute'>__Show 67__</p>
          </section>
        </div>
      </div>
      <p className='ml-[30px] text-black text-[16px] inter-txwe mr-[30px]'>
        From above of code. You will see the output that will show
        <kbd className='kbd kbd-sm bg-white'>Show 67</kbd>
        as a bold text to you
      </p>
      {/* <div className='w-[320px] ml-[20px] bg-black rounded-xl overflow-hidden'>
        <div className='center relative mt-[10px]'>
          <section className='center w-fit gap-[5px] absolute left-[20px]'>
            <div className='w-[15px] h-[15px] rounded-full bg-[#FF0000]'></div>
            <div className='w-[15px] h-[15px] rounded-full bg-[#FFD650]'></div>
            <div className='w-[15px] h-[15px] rounded-full bg-[#00FF0D]'></div>
          </section>
          <div className='text-white text-center inter-txwe text-[12px] font-bold'>Index.md</div>
        </div>
        <div className='center'>
          <textarea 
            wrap="hard"
            placeholder='Type Markdown Syntax...'
            className='text-white w-[90%] h-[120px] text-[14px] outline-none bg-black px-[10px] mt-[8px]' 
            style={{resize: "none"}}
            value={demonstrate}
            onChange={(e) => setDemonstrate(e.target.value)}
          ></textarea>
        </div>
      </div>
      <div className='text-black' id='output'>
        
      </div> */}
    </div>
  );
}
