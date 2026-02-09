import React, { useEffect, useState } from 'react';
import { HeaderUser } from './User'

export default function Markdown({ logout }) {
  const [demonstrate, setDemonstrate] = useState('')
  useEffect(() => {
    if (window.markdownit) {
      let md = window.markdownit();
      let result = md.render(demonstrate);
      document.getElementById('output').innerHTML = result;
    }
  }, [demonstrate])
  return (
    <div className="w-screen h-screen bg-white pt-[20px]">
      <HeaderUser logoutHead={logout} markdown={true}/>
      <div className='border-test w-[320px] ml-[20px] bg-black rounded-xl overflow-hidden'>
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
        
      </div>
    </div>
  );
}
