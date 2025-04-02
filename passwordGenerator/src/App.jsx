import { useState } from 'react'
import { useEffect } from 'react'
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

  const copyContent = () => {
    navigator.clipboard.writeText(password)
    setBgColor('bg-blue-200')
    setShowToast(true)
    setTimeout(() => setBgColor('bg-pink-100'), 2000)
  }

  const closeToast = () => {
    setShowToast(false)
  }

  useEffect(() => {
    generatePassword()
  }, [isSymbol, isNum, length])

  return (
    <div className='-my-52 '>
      <div className='flex-row justify-items-center bg-yellow-200 rounded-2xl p-2 w-120' >
        <h1 className='font-bold'>Password Generator</h1>
        <div className="flex gap-3 justify-center relative my-2">
          <Inputfield bg={bgColor} className="" value={password} />
          <ButtonCmp onClick={copyContent} name="Copy" className="hover:bg-red-600 bg-zinc-900 p-2 rounded-2xl text-white" />
        </div>
        <div className='flex gap-7 my-2'>
          <Range name='Length' value={length} min='8' max='35' onChange={(e) => setLength(e.target.value)} />
          <Checkbox name="numbers" onClick={() => setIsNum((prev) => !prev)} />
          <Checkbox name="symbols" onClick={() => setIsSymbol((prev) => !prev)} />
        </div>
      </div>
      <Toast message={`Password: ${password} Copied!`} isVisible={showToast} onClose={closeToast} />
    </div>
  )
}

export default App
