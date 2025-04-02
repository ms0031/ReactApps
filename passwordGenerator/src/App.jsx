import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import Range from './components/Range'
import Checkbox from './components/Checkbox'
import Inputfield from './components/Inputfield'
import ButtonCmp from './components/ButtonCmp'
import Toast from './components/Toast'
function App() {
  const [isSymbol, setIsSymbol] = useState(false)
  const [password, setPassword] = useState('')
  const [isNum, setIsNum] = useState(false)
  const [length, setLength] = useState(8)
  const [bgColor, setBgColor] = useState('bg-pink-100')
  const [showToast, setShowToast] = useState(false)

  const generatePassword = () => {
    let password = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    const numbers = '0123456789'
    const symbols = '!@#$%^&*()_+~`|}{[]\:;?><,./-='
    let validChars = characters
    if (isNum) {
      validChars += numbers
    }
    if (isSymbol) {
      validChars += symbols
    }
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length)
      password += validChars.charAt(randomIndex)
    }
    setPassword(password)
  }

  const copyContent = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(password);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = password;
        textArea.style.position = 'fixed';
        textArea.style.left = '-9999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        if (!document.execCommand('copy')) {
          throw new Error('Copy failed');
        }
        document.body.removeChild(textArea);
      }
      setBgColor('bg-blue-200');
      setShowToast(true);
      setTimeout(() => setBgColor('bg-pink-100'), 2000);
    } catch (err) {
      setBgColor('bg-red-200');
      setShowToast(true);
      setTimeout(() => setBgColor('bg-pink-100'), 2000);
    }
  };

  const closeToast = () => {
    setShowToast(false)
  }

  useEffect(() => {
    generatePassword()
  }, [isSymbol, isNum, length])

  return (
    <div className='-my-52 '>
      <div className='flex-row justify-items-center bg-gray-200/55 rounded-2xl p-2 w-120' >
        <h1 className='font-bold text-2xl p-1'>Password Generator</h1>
        <div className="flex gap-3 justify-center relative my-2">
          <Inputfield bg={bgColor} className="" value={password} />
          <ButtonCmp onClick={copyContent} name="Copy" className="hover:bg-red-600 bg-zinc-900 p-2 px-3 rounded-2xl text-white" />
        </div>
        <div className='flex gap-7 my-2'>
          <Range name='Length' value={length} min='8' max='35' onChange={(e) => setLength(e.target.value)} />
          <div id="checkBox" className='flex gap-7'>
          <Checkbox name="numbers" onClick={() => setIsNum((prev) => !prev)} />
            <Checkbox name="symbols" onClick={() => setIsSymbol((prev) => !prev)} />
            </div>
        </div>
      </div>
      <Toast message={`Password: ${password} Copied!`} isVisible={showToast} onClose={closeToast} />
    </div>
  )
}

export default App
