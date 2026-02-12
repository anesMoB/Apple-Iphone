import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { OrbitControls, PerspectiveCamera, useGLTF } from '@react-three/drei'

import Loader from './Loader'
import { IphoneModel } from './IphoneModel'

function IphoneModelView({ color, modelSize ,texture}) {
  return (
    <div className='w-full h-full'>
      <Canvas shadows dpr={[1, 1.5]}>
        <Suspense fallback={<Loader />}>
          <PerspectiveCamera makeDefault position={[0, 0, 150]} near={0.1} far={1000} fov={45} />
          <OrbitControls enableZoom={false} enablePan={false} />
          <ambientLight intensity={0.3} />

          <directionalLight
            position={[0, 10, 2]}
            intensity={2}
            castShadow
          />
          <directionalLight
            position={[0, -10, 2]}
            intensity={2}
            castShadow
          />
          <directionalLight
            position={[-3, 2, 5]}
            intensity={1}
            castShadow
          />
          <directionalLight
            position={[3, 2, 5]}
            intensity={1}
            castShadow
          />
          <IphoneModel scaleChanger={modelSize == 'small' ? 0.15 : 0.17} colorChanger={color} textureChanger={texture} />
        </Suspense>
      </Canvas>

    </div>
  )
}
export default IphoneModelView

useGLTF.preload("/models/scene-transformed.glb");
