import { SplineScene } from "./ui/splite";
import { Card } from "./ui/card"
import { Spotlight } from "./ui/spotlight"
 
export default function Mission() {
  return (
    <section id="mission" className="relative overflow-hidden bg-black min-h-screen flex items-center justify-center p-4 sm:p-8">
      <Card className="w-full max-w-7xl min-h-[600px] bg-black/[0.96] relative overflow-hidden border-white/10">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        
        <div className="flex flex-col md:flex-row h-full">
          {/* Left content */}
          <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-4">
              Vortex Digi Labs: High-End Digital Architecture 🌀
            </h1>
            <p className="text-neutral-300 max-w-lg mb-8 text-sm md:text-base leading-relaxed">
              Vortex Digi Labs is a premium digital agency that transforms standard business presence into immersive, high-performance brand experiences. Based in Johannesburg and led by Google-certified expertise, we specialize in bridging the gap between cutting-edge AI technology and "boots-on-the-ground" physical intelligence.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Interactive 3D
            </h2>
            <p className="mt-4 text-neutral-300 max-w-lg text-sm md:text-base leading-relaxed">
              Bring your UI to life with beautiful 3D scenes. Create immersive experiences 
              that capture attention and enhance your design.
            </p>
          </div>

          {/* Right content */}
          <div className="flex-1 relative min-h-[400px] md:min-h-full">
            <SplineScene 
              scene="https://prod.spline.design/8xXTVdpEThEgW4uY/scene.splinecode"
              className="w-full h-full"
            />
            {/* Cover Spline Logo */}
            <div className="absolute bottom-0 right-0 w-40 h-16 bg-black z-50 pointer-events-none"></div>
          </div>
        </div>
      </Card>
    </section>
  )
}
