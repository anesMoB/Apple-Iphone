
import { useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export function IphoneModel(props) {
  const { nodes, materials } = useGLTF('/models/scene.glb')

  useEffect(() => {
    Object.entries(materials).map((material) => {
      if (
        material[0] !== "zFdeDaGNRwzccye" &&
        material[0] !== "ujsvqBWRMnqdwPx" &&
        material[0] !== "hUlRcbieVuIiOXG" &&
        material[0] !== "jlzuBkUzuJqgiAK" &&
        material[0] !== "xNrofRCqOXXHVZt"
      ) {
        material[1].color = new THREE.Color(props.colorChanger);
      }
      material[1].needsUpdate = true;
    });
  }, [materials, props.colorChanger]);
  return (
    <group {...props} dispose={null} scale={props.scaleChanger}>
      <mesh geometry={nodes.buRWvyqhBBgcJFo.geometry} material={materials.PaletteMaterial002} position={[-0.005, -0.001, -0.009]} scale={40.365} />
      <mesh geometry={nodes.wqbHSzWaUxBCwxY_0.geometry} material={materials.MHFGNLrDQbTNima} position={[-0.005, -0.001, -0.009]} scale={40.365} />
      <mesh geometry={nodes.QvGDcbDApaGssma.geometry} material={materials.kUhjpatHUvkBwfM} position={[-0.005, -0.001, -0.009]} scale={40.365} />
      <mesh geometry={nodes.vFwJFNASGvEHWhs.geometry} material={materials.RJoymvEsaIItifI} position={[-0.005, -0.001, -0.009]} scale={40.365} />
      <mesh geometry={nodes.evAxFwhaQUwXuua.geometry} material={materials.KSIxMqttXxxmOYl} position={[-0.005, -0.001, -0.009]} scale={40.365} />
      <mesh geometry={nodes.MrMmlCAsAxJpYqQ_0.geometry} material={materials.dxCVrUCvYhjVxqy} position={[-0.005, -0.001, -0.009]} scale={40.365} />
      <mesh geometry={nodes.ttmRoLdJipiIOmf.geometry} material={materials.hUlRcbieVuIiOXG} position={[-0.005, -0.001, -0.009]} scale={40.365} />
      <mesh geometry={nodes.TvgBVmqNmSrFVfW.geometry} material={materials.pIhYLPqiSQOZTjn} position={[-0.005, -0.001, -0.009]} scale={40.365} />
      <mesh geometry={nodes.pvdHknDTGDzVpwc.geometry} material={materials.xdyiJLYTYRfJffH} position={[-0.005, -0.001, -0.009]} scale={40.365} />
      <mesh geometry={nodes.USxQiqZgxHbRvqB.geometry} material={materials.mcPrzcBUcdqUybC} position={[-0.005, -0.001, -0.009]} scale={40.365} />
      <mesh geometry={nodes.CfghdUoyzvwzIum.geometry} material={materials.jpGaQNgTtEGkTfo} position={[-0.005, -0.001, -0.009]} scale={40.365} />
      <mesh geometry={nodes.EbQGKrWAqhBHiMv.geometry} material={materials.TBLSREBUyLMVtJa} position={[-0.005, -0.001, -0.009]} scale={40.365} />
      <mesh geometry={nodes.KSWlaxBcnPDpFCs.geometry} material={materials.yQQySPTfbEJufve} position={[-0.005, -0.001, -0.009]} scale={40.365} />
      <mesh geometry={nodes.DjdhycfQYjKMDyn.geometry} material={materials.ujsvqBWRMnqdwPx} position={[-0.005, -0.001, -0.009]} scale={40.365} />
      <mesh geometry={nodes.usFLmqcyrnltBUr.geometry} material={materials.sxNzrmuTqVeaXdg} position={[-0.005, -0.001, -0.009]} scale={40.365} />
      <mesh geometry={nodes.TakBsdEjEytCAMK.geometry} material={materials.PaletteMaterial003} position={[-0.005, -0.001, -0.009]} scale={40.365} />
      <mesh geometry={nodes.xXDHkMplTIDAXLN.geometry} material={materials.pIJKfZsazmcpEiU} position={[-0.005, -0.001, -0.009]} scale={40.365} >
        {/* {props.textureChanger && <meshStandardMaterial roughness={1} map={props.textureChanger} />} */}

      </mesh>
      <mesh geometry={nodes.vELORlCJixqPHsZ.geometry} material={materials.zFdeDaGNRwzccye} position={[-0.005, -0.001, -0.009]} scale={40.365} />
      <mesh geometry={nodes.EddVrWkqZTlvmci.geometry} material={materials.xNrofRCqOXXHVZt} position={[-0.005, -0.001, -0.009]} scale={40.365} />
      <mesh geometry={nodes.IykfmVvLplTsTEW.geometry} material={materials.PaletteMaterial004} position={[-0.005, -0.001, -0.009]} scale={40.365} />
      <mesh geometry={nodes.wLfSXtbwRlBrwof.geometry} material={materials.oZRkkORNzkufnGD} position={[-0.005, -0.001, -0.009]} scale={40.365} />
      <mesh geometry={nodes.YfrJNXgMvGOAfzz.geometry} material={materials.bCgzXjHOanGdTFV} position={[-0.005, -0.001, -0.009]} scale={40.365} />
      <mesh geometry={nodes.pXBNoLiaMwsDHRF.geometry} material={materials.yiDkEwDSyEhavuP} position={[-0.005, -0.001, -0.009]} scale={40.365} />
      <mesh geometry={nodes.DCLCbjzqejuvsqH.geometry} material={materials.vhaEJjZoqGtyLdo} position={[-0.005, -0.001, -0.009]} scale={40.365} />
      <mesh geometry={nodes.CdalkzDVnwgdEhS.geometry} material={materials.jlzuBkUzuJqgiAK} position={[-0.005, -0.001, -0.009]} scale={40.365} />
      <mesh geometry={nodes.DjsDkGiopeiEJZK.geometry} material={materials.PaletteMaterial001} position={[-0.005, -0.001, -0.009]} scale={40.365} />
      <mesh geometry={nodes.GuYJryuYunhpphO.geometry} material={materials.eShKpuMNVJTRrgg} position={[-0.005, -0.001, -0.009]} scale={40.365} />
      <mesh geometry={nodes.WJwwVjsahIXbJpU.geometry} material={materials.yhcAXNGcJWCqtIS} position={[-0.005, -0.001, -0.009]} scale={40.365} />
      <mesh geometry={nodes.IkoiNqATMVoZFKD.geometry} material={materials.hiVunnLeAHkwGEo} position={[-0.005, -0.001, -0.009]} scale={40.365} />
      <mesh geometry={nodes.rqgRAGHOwnuBypi.geometry} material={materials.HGhEhpqSBZRnjHC} position={[-0.005, -0.001, -0.009]} scale={40.365} />
    </group>
  )
}

useGLTF.preload('/models/scene.glb')
