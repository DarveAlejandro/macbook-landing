import { Head, Link, usePage } from '@inertiajs/react';
import { dashboard, login } from '@/routes';
import { register } from '@/routes';
import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import LaptopContainer from "@/components/welcome/LaptopContainer";
import "../../css/welcome.css";


export default function Welcome() {
    const { auth } = usePage().props;

    return (
        <div className="w-full h-screen">
            <div className="absolute flex flex-col items-center top-32 left-1/2 -translate-x-1/2 font-['Helvetica_Now_Display']">
                <h3 className=" masked text-7xl tracking-tigther font-[700]">Darve.dev</h3>
                <h5>Oh so pro</h5>
                <p className="text-center width-3/4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae porro eius nemo saepe? Sunt, aperiam placeat earum velit, optio fugiat aliquid corrupti ex officiis aut dicta omnis! Fuga, non placeat!</p>
            </div>
            <Canvas camera={{fov: 12, position: [0, -10, 220]}}> 
                <Environment files={[
                    "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/ferndale_studio_02_4k.exr"
                ]}
            />
                <ScrollControls pages={3}>
                    <LaptopContainer />
                </ScrollControls>
                
            </Canvas> 
        </div>

    );
}
