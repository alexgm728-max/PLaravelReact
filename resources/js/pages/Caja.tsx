import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function Caja() {
    const [total, setTotal] = useState(0);

    return (
        <div className="min-h-screen bg-gray-900 text-white p-10 font-sans">
            <Head title="Caja Independiente" />
            
            <div className="max-w-md mx-auto bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700">
                <h1 className="text-3xl font-bold text-blue-400 mb-2">Mi Primera Vista</h1>
                <p className="text-gray-400 mb-8">100% aislada de los menús de Laravel.</p>
                
                <div className="text-5xl font-black mb-8 text-center text-green-400">
                    ${total}.00
                </div>

                <button 
                    onClick={() => setTotal(total + 50)}
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-4 rounded-lg transition-colors"
                >
                    Cobrar $50
                </button>

                <button 
                    onClick={() => setTotal(0)}
                    className="w-full mt-4 bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-lg transition-colors"
                >
                    Reiniciar
                </button>
            </div>
        </div>
    );
}

// ESTA LÍNEA ES LA CLAVE: 
// Le dice a Inertia que NO envuelva esta vista en el Layout por defecto del sistema
Caja.layout = (page: any) => page;