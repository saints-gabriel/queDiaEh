import { useState } from 'react';
import './App.css'

function App() {
  const [videoUrl, setVideoUrl] = useState('');
  const [dia, setDia] = useState('');

  // Caminhos relativos à pasta 'public'
  const videos = [
    '/videos/domingo.mp4',
    '/videos/segunda.mp4',
    '/videos/terca.mp4',
    '/videos/quarta.mp4',
    '/videos/quinta.mp4',
    '/videos/sexta.mp4',
    '/videos/sabado.mp4',
  ];

  const dias = [
    'DOMINGO',
    'SEGUNDA',
    'TERÇA',
    'QUARTA',
    'QUINTA',
    'SEXTA',
    'SÁBADO',
  ]

  const handleClick = () => {
    const indexHoje = new Date().getDay();
    // const indexHoje = 2;

    const diaHoje = dias[indexHoje];
    const videoDia = videos[indexHoje];

    setVideoUrl(videoDia);
    setDia(diaHoje);
  };

  return (
    <div className='flex flex-col h-screen items-center justify-center'>
      {dia && (
        <h1 className='text-white w-auto text-[10vw] font-bold animate-rainbow justify-center'>
          HOJE É {dia}
        </h1>
      )}
      {videoUrl && (
        <div className='bg-[#666] m-2 p-2 rounded-sm w-auto h-auto'>
          <video 
            src={videoUrl} 
            autoPlay 
            className="w-full max-w-[450px] h-auto object-contain"
          />
        </div>
      )}

      <button 
        onClick={handleClick} 
        className='bg-[#333] transition-transform duration-300 ease-in-out hover:translate-y-1 hover:scale-110 p-2 rounded-md shadow-md text-white cursor-pointer'
      >
        Que Dia é Hoje?
      </button>
    </div>
  );
}

export default App;