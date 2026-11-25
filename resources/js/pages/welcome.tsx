import { Head, Link, usePage } from '@inertiajs/react';
import { dashboard, login } from '@/routes';
import { register } from '@/routes';
import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei";
import LaptopContainer from "@/components/welcome/LaptopContainer";


export default function Welcome() {
    const { auth } = usePage().props;

    return (
        <div className="w-screen h-screen flex items-center justify-center overflow-hidden">
            <Canvas camera={{fov: 12, position: [0, -10, 220]}}> 
                <OrbitControls />
                <Environment files={[
                    "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/ferndale_studio_02_4k.exr"
                ]}
                />
                <LaptopContainer />
            </Canvas> 
        </div>

    );
}
