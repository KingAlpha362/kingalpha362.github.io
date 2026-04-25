"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { useMemo, useRef } from "react"
import * as THREE from "three"

const vertexShader = `
  uniform float time;
  uniform float intensity;
  varying vec2 vUv;
  
  void main() {
    vUv = uv;
    vec3 pos = position;
    pos.y += sin(pos.x * 10.0 + time) * 0.1 * intensity;
    pos.x += cos(pos.y * 8.0 + time * 1.5) * 0.05 * intensity;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`

const fragmentShader = `
  uniform float time;
  uniform float intensity;
  uniform vec3 color1;
  uniform vec3 color2;
  varying vec2 vUv;
  
  void main() {
    vec2 uv = vUv;
    float noise = sin(uv.x * 20.0 + time) * cos(uv.y * 15.0 + time * 0.8);
    noise += sin(uv.x * 35.0 - time * 2.0) * cos(uv.y * 25.0 + time * 1.2) * 0.5;
    vec3 color = mix(color1, color2, noise * 0.5 + 0.5);
    color = mix(color, vec3(1.0), pow(abs(noise), 2.0) * intensity);
    float glow = 1.0 - length(uv - 0.5) * 2.0;
    glow = pow(glow, 2.0);
    gl_FragColor = vec4(color * glow, glow * 0.8);
  }
`

function ShaderPlane({
  position,
  color1 = "#3a3120",
  color2 = "#121217",
  scale = 1.75,
}: {
  position: [number, number, number]
  color1?: string
  color2?: string
  scale?: number
}) {
  const mesh = useRef<THREE.Mesh>(null)
  const uniforms = useMemo(
    () => ({
      time: { value: 0 },
      intensity: { value: 1.0 },
      color1: { value: new THREE.Color(color1) },
      color2: { value: new THREE.Color(color2) },
    }),
    [color1, color2],
  )

  useFrame((state) => {
    uniforms.time.value = state.clock.elapsedTime
    uniforms.intensity.value = 1.0 + Math.sin(state.clock.elapsedTime * 1.8) * 0.2
  })

  return (
    <mesh ref={mesh} position={position} scale={scale}>
      <planeGeometry args={[2, 2, 32, 32]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

function EnergyRing({
  radius = 1,
  position = [0, 0, 0],
}: {
  radius?: number
  position?: [number, number, number]
}) {
  const mesh = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!mesh.current) return
    mesh.current.rotation.z = state.clock.elapsedTime * 0.35
    const material = mesh.current.material as THREE.MeshBasicMaterial
    material.opacity = 0.14 + Math.sin(state.clock.elapsedTime * 2.4) * 0.05
  })

  return (
    <mesh ref={mesh} position={position}>
      <ringGeometry args={[radius * 0.78, radius, 64]} />
      <meshBasicMaterial color="#c9a84c" transparent opacity={0.14} side={THREE.DoubleSide} />
    </mesh>
  )
}

export default function BackgroundPaperShaders() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 opacity-80">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ShaderPlane position={[-1.7, 0.25, -0.2]} />
        <ShaderPlane position={[1.55, -0.2, -0.4]} color1="#2e281b" color2="#0f0f13" scale={1.55} />
        <EnergyRing radius={1.15} position={[-1.25, -0.55, 0.2]} />
        <EnergyRing radius={0.95} position={[1.35, 0.65, 0.2]} />
      </Canvas>
    </div>
  )
}

