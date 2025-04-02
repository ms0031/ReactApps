import { useState } from 'react'
import Button from './components/button'
import Options from './components/Options'
function App() {
  const [selectedColor, setSelectedColor] = useState("")
  const [selectedNum, setSelectedNum] = useState("")
  const [col, setCol] = useState('[linear-gradient(60deg,_rgb(247,_149,_51),_rgb(243,_112,_85),_rgb(239,_78,_123),_rgb(161,_102,_171),_rgb(80,_115,_184),_rgb(16,_152,_173),_rgb(7,_179,_155),_rgb(111,_186,_130))]')
  const colors = [
    'red',
    'orange',
    'amber',
    'yellow',
    'lime',
    'green',
    'emerald',
    'teal',
    'cyan',
    'sky',
    'blue',
    'indigo',
    'violet',
    'purple',
    'fuchsia',
    'pink',
    'rose',
    'slate',
    'gray',
    'zinc',
    'neutral',
    'stone'
  ]
  const colNum = ['50','100','200','300','400','500','600','700','800','900','950']
  
  const colorClasses = {
    'slate': {
      '50': 'bg-slate-50', '100': 'bg-slate-100', '200': 'bg-slate-200',
      '300': 'bg-slate-300', '400': 'bg-slate-400', '500': 'bg-slate-500',
      '600': 'bg-slate-600', '700': 'bg-slate-700', '800': 'bg-slate-800',
      '900': 'bg-slate-900', '950': 'bg-slate-950'
    },
    'gray': {
      '50': 'bg-gray-50', '100': 'bg-gray-100', '200': 'bg-gray-200',
      '300': 'bg-gray-300', '400': 'bg-gray-400', '500': 'bg-gray-500',
      '600': 'bg-gray-600', '700': 'bg-gray-700', '800': 'bg-gray-800',
      '900': 'bg-gray-900', '950': 'bg-gray-950'
    },
    'zinc': {
      '50': 'bg-zinc-50', '100': 'bg-zinc-100', '200': 'bg-zinc-200',
      '300': 'bg-zinc-300', '400': 'bg-zinc-400', '500': 'bg-zinc-500',
      '600': 'bg-zinc-600', '700': 'bg-zinc-700', '800': 'bg-zinc-800',
      '900': 'bg-zinc-900', '950': 'bg-zinc-950'
    },
    'neutral': {
      '50': 'bg-neutral-50', '100': 'bg-neutral-100', '200': 'bg-neutral-200',
      '300': 'bg-neutral-300', '400': 'bg-neutral-400', '500': 'bg-neutral-500',
      '600': 'bg-neutral-600', '700': 'bg-neutral-700', '800': 'bg-neutral-800',
      '900': 'bg-neutral-900', '950': 'bg-neutral-950'
    },
    'stone': {
      '50': 'bg-stone-50', '100': 'bg-stone-100', '200': 'bg-stone-200',
      '300': 'bg-stone-300', '400': 'bg-stone-400', '500': 'bg-stone-500',
      '600': 'bg-stone-600', '700': 'bg-stone-700', '800': 'bg-stone-800',
      '900': 'bg-stone-900', '950': 'bg-stone-950'
    },
    'red': {
      '50': 'bg-red-50', '100': 'bg-red-100', '200': 'bg-red-200',
      '300': 'bg-red-300', '400': 'bg-red-400', '500': 'bg-red-500',
      '600': 'bg-red-600', '700': 'bg-red-700', '800': 'bg-red-800',
      '900': 'bg-red-900', '950': 'bg-red-950'
    },
    'orange': {
      '50': 'bg-orange-50', '100': 'bg-orange-100', '200': 'bg-orange-200',
      '300': 'bg-orange-300', '400': 'bg-orange-400', '500': 'bg-orange-500',
      '600': 'bg-orange-600', '700': 'bg-orange-700', '800': 'bg-orange-800',
      '900': 'bg-orange-900', '950': 'bg-orange-950'
    },
    'amber': {
      '50': 'bg-amber-50', '100': 'bg-amber-100', '200': 'bg-amber-200',
      '300': 'bg-amber-300', '400': 'bg-amber-400', '500': 'bg-amber-500',
      '600': 'bg-amber-600', '700': 'bg-amber-700', '800': 'bg-amber-800',
      '900': 'bg-amber-900', '950': 'bg-amber-950'
    },
    'yellow': {
      '50': 'bg-yellow-50', '100': 'bg-yellow-100', '200': 'bg-yellow-200',
      '300': 'bg-yellow-300', '400': 'bg-yellow-400', '500': 'bg-yellow-500',
      '600': 'bg-yellow-600', '700': 'bg-yellow-700', '800': 'bg-yellow-800',
      '900': 'bg-yellow-900', '950': 'bg-yellow-950'
    },
    'lime': {
      '50': 'bg-lime-50', '100': 'bg-lime-100', '200': 'bg-lime-200',
      '300': 'bg-lime-300', '400': 'bg-lime-400', '500': 'bg-lime-500',
      '600': 'bg-lime-600', '700': 'bg-lime-700', '800': 'bg-lime-800',
      '900': 'bg-lime-900', '950': 'bg-lime-950'
    },
    'green': {
      '50': 'bg-green-50', '100': 'bg-green-100', '200': 'bg-green-200',
      '300': 'bg-green-300', '400': 'bg-green-400', '500': 'bg-green-500',
      '600': 'bg-green-600', '700': 'bg-green-700', '800': 'bg-green-800',
      '900': 'bg-green-900', '950': 'bg-green-950'
    },
    'emerald': {
      '50': 'bg-emerald-50', '100': 'bg-emerald-100', '200': 'bg-emerald-200',
      '300': 'bg-emerald-300', '400': 'bg-emerald-400', '500': 'bg-emerald-500',
      '600': 'bg-emerald-600', '700': 'bg-emerald-700', '800': 'bg-emerald-800',
      '900': 'bg-emerald-900', '950': 'bg-emerald-950'
    },
    'teal': {
      '50': 'bg-teal-50', '100': 'bg-teal-100', '200': 'bg-teal-200',
      '300': 'bg-teal-300', '400': 'bg-teal-400', '500': 'bg-teal-500',
      '600': 'bg-teal-600', '700': 'bg-teal-700', '800': 'bg-teal-800',
      '900': 'bg-teal-900', '950': 'bg-teal-950'
    },
    'cyan': {
      '50': 'bg-cyan-50', '100': 'bg-cyan-100', '200': 'bg-cyan-200',
      '300': 'bg-cyan-300', '400': 'bg-cyan-400', '500': 'bg-cyan-500',
      '600': 'bg-cyan-600', '700': 'bg-cyan-700', '800': 'bg-cyan-800',
      '900': 'bg-cyan-900', '950': 'bg-cyan-950'
    },
    'sky': {
      '50': 'bg-sky-50', '100': 'bg-sky-100', '200': 'bg-sky-200',
      '300': 'bg-sky-300', '400': 'bg-sky-400', '500': 'bg-sky-500',
      '600': 'bg-sky-600', '700': 'bg-sky-700', '800': 'bg-sky-800',
      '900': 'bg-sky-900', '950': 'bg-sky-950'
    },
    'blue': {
      '50': 'bg-blue-50', '100': 'bg-blue-100', '200': 'bg-blue-200',
      '300': 'bg-blue-300', '400': 'bg-blue-400', '500': 'bg-blue-500',
      '600': 'bg-blue-600', '700': 'bg-blue-700', '800': 'bg-blue-800',
      '900': 'bg-blue-900', '950': 'bg-blue-950'
    },
    'indigo': {
      '50': 'bg-indigo-50', '100': 'bg-indigo-100', '200': 'bg-indigo-200',
      '300': 'bg-indigo-300', '400': 'bg-indigo-400', '500': 'bg-indigo-500',
      '600': 'bg-indigo-600', '700': 'bg-indigo-700', '800': 'bg-indigo-800',
      '900': 'bg-indigo-900', '950': 'bg-indigo-950'
    },
    'violet': {
      '50': 'bg-violet-50', '100': 'bg-violet-100', '200': 'bg-violet-200',
      '300': 'bg-violet-300', '400': 'bg-violet-400', '500': 'bg-violet-500',
      '600': 'bg-violet-600', '700': 'bg-violet-700', '800': 'bg-violet-800',
      '900': 'bg-violet-900', '950': 'bg-violet-950'
    },
    'purple': {
      '50': 'bg-purple-50', '100': 'bg-purple-100', '200': 'bg-purple-200',
      '300': 'bg-purple-300', '400': 'bg-purple-400', '500': 'bg-purple-500',
      '600': 'bg-purple-600', '700': 'bg-purple-700', '800': 'bg-purple-800',
      '900': 'bg-purple-900', '950': 'bg-purple-950'
    },
    'fuchsia': {
      '50': 'bg-fuchsia-50', '100': 'bg-fuchsia-100', '200': 'bg-fuchsia-200',
      '300': 'bg-fuchsia-300', '400': 'bg-fuchsia-400', '500': 'bg-fuchsia-500',
      '600': 'bg-fuchsia-600', '700': 'bg-fuchsia-700', '800': 'bg-fuchsia-800',
      '900': 'bg-fuchsia-900', '950': 'bg-fuchsia-950'
    },
    'pink': {
      '50': 'bg-pink-50', '100': 'bg-pink-100', '200': 'bg-pink-200',
      '300': 'bg-pink-300', '400': 'bg-pink-400', '500': 'bg-pink-500',
      '600': 'bg-pink-600', '700': 'bg-pink-700', '800': 'bg-pink-800',
      '900': 'bg-pink-900', '950': 'bg-pink-950'
    },
    'rose': {
      '50': 'bg-rose-50', '100': 'bg-rose-100', '200': 'bg-rose-200',
      '300': 'bg-rose-300', '400': 'bg-rose-400', '500': 'bg-rose-500',
      '600': 'bg-rose-600', '700': 'bg-rose-700', '800': 'bg-rose-800',
      '900': 'bg-rose-900', '950': 'bg-rose-950'
    }
  };
  const bgClass = colorClasses[selectedColor]?.[selectedNum] || 'bg-red-300';
  return (
    <div className={`w-full h-screen p-4 ${bgClass}`}>
      <Options onChange={(e) => setSelectedColor(e.target.value)} colors={colors} />
      <div className='bg-white/40 bg-cover bg-center
       rounded-full flex justify-center gap-3 border-2 fixed bottom-10 left-0 right-0 w-fit mx-auto'>
        <div className='p-4 backdrop-blur-3xl flex justify-center gap-4 rounded-full' >
          {colNum.map((num, ind) => {
            return <Button 
              click={() => setSelectedNum(num)}
              key={ind} 
              selectedColor={selectedColor} 
              number={num} 
            />
          })}
        </div>
      </div>
    </div>
  )
}

export default App
