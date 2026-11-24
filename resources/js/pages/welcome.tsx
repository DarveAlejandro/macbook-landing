import { Head, Link, usePage } from '@inertiajs/react';
import { dashboard, login } from '@/routes';
import { register } from '@/routes';
import { Canvas } from "@react-three/fiber"

export default function Welcome() {
    const { auth } = usePage().props;

    return (
        <canvas>
            <mesh>
                
            </mesh>
        </canvas>
    );
}
