<template>
  <div class="categoriesView">
    <div style="margin :5px" ref="container" id="container"></div>
  </div>
</template>

<script>

import * as THREE from 'three' // 引用Three.js
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js' // 控制器
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'

import ForceGraph3D from '3d-force-graph'
import SpriteText from 'three-spritetext'
// import { CSS2DObject, CSS2DRenderer } from 'three-css2drender'

export default {
  name: 'categoriesView',
  components: {},
  created () {
    this.clientWidth = document.documentElement.clientWidth
    this.clientHeight = document.documentElement.clientHeight
  },

  mounted () {
    this.Init()
  },
  methods: {
    // 初始化函数
    Init () {
      // this.initGraph()
      this.initTextNode()
    },
    initTextNode () {
      const Graph = ForceGraph3D()(this.$refs.container)
        .jsonUrl('json/miserables.json')
        .nodeAutoColorBy('group')
        .nodeThreeObject(node => {
          const sprite = new SpriteText(node.id)
          sprite.material.depthWrite = false // make sprite background transparent
          sprite.color = node.color
          sprite.textHeight = 8
          return sprite
        })

      // Spread nodes a little wider
      Graph.d3Force('charge').strength(-120)
      const bloomPass = new UnrealBloomPass()
      bloomPass.strength = 1
      bloomPass.radius = 1
      bloomPass.threshold = 0.1
      Graph.postProcessingComposer().addPass(bloomPass)
    },
    initGraph (data) {
      const imgs = ['cat.jpg', 'b', 'c']
      // Random connected graph
      const gData = {
        nodes: imgs.map((img, id) => ({
          id,
          img
        })),
        links: [...Array(imgs.length).keys()]
          .filter(id => id)
          .map(id => ({
            source: id,
            target: Math.round(Math.random() * (id - 1))
          }))
      }
      console.log(gData)

      const Graph = ForceGraph3D()(this.$refs.container)
        .backgroundColor('white') // 背景颜色，支持内置颜色和RGB
      // .width(this.$refs.graph.parentElement.offsetWidth) // 画布宽度(充满父级容器)
      // .height(this.$refs.graph.parentElement.offsetHeight + 150) // 画布高度(充满父级容器)
        .showNavInfo(false)
        .linkColor('#0x442f40')
        .linkCurvature('id')
        .linkCurveRotation('id')
        .linkWidth(0.3)
        .cooldownTime(Infinity)
        // .d3AlphaDecay(0) // alpha 衰减率
        // .d3VelocityDecay(0) // 默认为 0.4,较低的衰减系数可以使得迭代次数更多，其布局结果也会更理性，但是可能会引起数值不稳定从而导致震荡。

      // Deactivate existing forces
      // .d3Force('center', null) // centering作用力可以使得节点布局开之后围绕某个中心
      // .d3Force('charge', null) // 作用力应用在所用的节点之间

        // Add collision and bounding box forces
        .nodeLabel('id') // 鼠标悬停显示文字
        .onNodeClick(node => {
          // Aim at node from outside it
          const distance = 40
          const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z)

          const newPos = node.x || node.y || node.z
            ? {
                x: node.x * distRatio,
                y: node.y * distRatio,
                z: node.z * distRatio
              }
            : {
                x: 0,
                y: 0,
                z: distance
              } // special case if node is in (0,0,0)

          Graph.cameraPosition(
            newPos, // new position
            node, // lookAt ({ x, y, z })
            3000 // ms transition duration
          )
        })
        // .nodeThreeObject(({ img }) => {
        //   const imgTexture = new THREE.TextureLoader().load('favicon.ico')
        //   const material = new THREE.SpriteMaterial({ map: imgTexture }) // 文件名称
        //   const sprite = new SpriteText(material)
        //   sprite.scale.set(12, 12)
        //   sprite.color = '0xffffff'
        //   return sprite
        // }).graphData(gData)
        .nodeThreeObject(({ img }) => {
          return this.StarMars()
        }).graphData(gData)

      const bloomPass = new UnrealBloomPass()
      bloomPass.strength = 0.1
      bloomPass.radius = 1
      bloomPass.threshold = 0.1
      Graph.postProcessingComposer().addPass(bloomPass)
    },
    StarMars () {
      // 球体分段数
      const segments = 200

      // 火星几何体
      const geom = new THREE.SphereGeometry(10, segments, segments)

      // 漫反射贴图
      const mapTexture = new THREE.TextureLoader().load('/planets/sun.jpg')
      mapTexture.repeat.set(1, 1)

      // 凹凸贴图
      const bumpMapTexture = new THREE.TextureLoader().load('')
      bumpMapTexture.repeat.set(1, 1)

      // 材质
      const material = new THREE.MeshStandardMaterial({
        map: mapTexture, // 漫反射贴图
        lightMap: mapTexture, // 自发光贴图
        lightMapIntensity: 0.5, // 自发光强度
        bumpMap: bumpMapTexture, // 凹凸贴图
        bumpScale: 0.1, // 凹凸程度
        metalness: 0.1, // 金属质感
        roughness: 1 // 粗糙程度
      })

      // 火星对象
      const mesh = new THREE.Mesh(geom, material)

      // 初始化缩放
      mesh.scale.x = 1
      mesh.scale.y = 1
      mesh.scale.z = 1
      return mesh
    }

  }
}
</script>

<style scoped>
  #three {
    width: 100%;
    height: 100%;
    /* position: fixed; */
    left: 0;
    top: 0;
  }
</style>
