'use client';

import axios from "axios";
import { useState } from "react";

export default function UploadForm(){


    const [isUploading, setIsUploading] = useState(false);

    async function upload(ev){
        ev.preventDefault();
        const files = ev.target.files;
        if (files.length > 0){
            const file = files[0];
            setIsUploading(true);
            const res = await axios.postForm('/api/upload',{
                file,
            });
            setIsUploading(false);
            console.log(res.data);
        }
      }
    return(
        <>
        {isUploading && (
            <div className="bg-black/90 text-white fixed inset-0 flex items-center">
            <div className="w-full text-center">
            <h2 className="text-4xl mb-4">Uploading</h2>
            <h3 className="text-xl">Please wait....</h3>
            </div>
            </div>
        )}

        <label className="bg-black py-2 px-6 rounded-full inline-flex gap-2 border-2 border-purple-700/50 cursor-pointer" >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
      </svg>
      <span>Upload File</span>
      <input onChange={upload} type="file" className="hidden" />
      </label>
      </>
    );
}