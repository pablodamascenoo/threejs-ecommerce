import Image from 'next/image'
import Home from '@/components/Home'
import Customizer from '@/components/Customizer'
import Canvas from '@/components/Canvas'

export default function HomePage() {
  return (
    <main className="app transition-all ease-in">
      <Home/>
      <Customizer/>
      <Canvas/>
    </main>
  )
}
