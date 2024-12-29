"use client";

import React, { useEffect, useRef } from "react";
import * as tf from "@tensorflow/tfjs";
import * as faceLandmarksDetection from "@tensorflow-models/face-landmarks-detection";
import "@mediapipe/face_mesh";
import { FaceMesh } from "@mediapipe/face_mesh";



export default function Vto() {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    const startCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
                videoRef.current.play();
            }
        } catch (error) {
            console.error("Error accessing camera:", error);
        }
    };

    return (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.4)] flex flex-col justify-center items-center">
            <video ref={videoRef} className="" />
            <canvas ref={canvasRef} className="w-[640px] h-[480px] rounded-md" />
            <button onClick={startCamera} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
                Start Camera
            </button>
        </div>
    );
}
























// "use client"
// import React, { useRef, useState, useEffect } from 'react';
// import { Camera } from '@mediapipe/camera_utils';

// export default function Vto() {
//     const videoRef = useRef<HTMLVideoElement | null>(null);


//     const startCamera = async () => {
//         try {
//             const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//             if (videoRef.current) {
//                 videoRef.current.srcObject = stream;
//                 videoRef.current.play();
//             }
//         } catch (error) {
//             console.error("Error accessing camera:", error);
//         }
//     };

//   return (
//     <div className='fixed inset-0 bg-[rgba(0,0,0,0.4)] flex flex-col justify-center items-center '>
//         <video ref={videoRef} className="w-[1000px] h-[1000px] rounded-md" />

//         <div className="mt-4">
//             <button onClick={startCamera} className="mr-2">Start Camera</button>
//         </div> 

//     </div>
//   )
// }