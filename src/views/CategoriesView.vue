<template>
  <div class="categoriesView">
    <div style="margin :5px" ref="container" id="container"></div>
  </div>
</template>

<script>

import * as THREE from 'three' // 引用Three.js
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js' // 控制器
import ForceGraph3D from '3d-force-graph'
// import SpriteText from 'three-spritetext'
// import { CSS2DRenderer, CSS2DObject } from 'three-css2drender'

export default {
  name: 'categoriesView',
  components: {
  },
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
      this.initGraph()
      // this.square()
    },
    initGraph (data) {
      const imgs = ['cat.jpg', 'dog.jpg', 'eagle.jpg', 'elephant.jpg', 'grasshopper.jpg', 'octopus.jpg', 'owl.jpg', 'panda.jpg', 'squirrel.jpg', 'tiger.jpg', 'whale.jpg']
      // Random connected graph
      const gData = {
        nodes: imgs.map((img, id) => ({ id, img })),
        links: [...Array(imgs.length).keys()]
          .filter(id => id)
          .map(id => ({
            source: id,
            target: Math.round(Math.random() * (id - 1))
          }))
      }
      const Graph = ForceGraph3D()(this.$refs.container)
        .backgroundColor('black') // 背景颜色，支持内置颜色和RGB
        // .width(this.$refs.graph.parentElement.offsetWidth) // 画布宽度(充满父级容器)
        // .height(this.$refs.graph.parentElement.offsetHeight + 150) // 画布高度(充满父级容器)
        .showNavInfo(false)
        .nodeThreeObject(({ img }) => {
          const imgTexture = new THREE.TextureLoader().load('http://qzapp.qlogo.cn/qzapp/101983660/C41ADE5C593532E29AFC2C432FD57A7C/100')
          const material = new THREE.SpriteMaterial({ map: imgTexture }) // 文件名称
          const sprite = new THREE.Sprite(material)
          sprite.scale.set(12, 12)
          return sprite
        }).graphData(gData)
      console.log(Graph)
    },
    square () {
      /**
      * 创建场景对象Scene
      */
      const scene = new THREE.Scene()
      /**
     * 创建网格模型
     */
      // const geometry = new THREE.SphereGeometry(100, 100, 100) // 创建一个球体几何对象
      const geometry = new THREE.BoxGeometry(100, 100, 100) // 创建一个立方体几何对象Geometry
      // 遍历几何体的face属性
      geometry.groups.forEach(face => {
        // 设置三角面face三个顶点的颜色
        face.vertexColors = [
          new THREE.Color(0xfff),
          new THREE.Color(0xfff),
          new THREE.Color(0xfff)
        ]
      })
      /**
      * 透明材料
      * */
      const material = new THREE.MeshLambertMaterial({ color: 0xff0000, opacity: 0.6, transparent: true }) // 材质对象Material

      /**
     * 高光材料
     * */
      // const material = new THREE.MeshPhongMaterial({ color: 0xff00ff, specular: 0x30b540, shininess: 12 })// 材质对象

      // const material = new THREE.MeshBasicMaterial({
      //   color: 0x000000,
      //   vertexColors: THREE.FaceColors,
      //   wireframe: true // 线框模式渲染
      // }) // 材质对象Material

      const mesh = new THREE.Mesh(geometry, material) // 网格模型对象Mesh
      scene.add(mesh) // 网格模型添加到场景中
      /**
     * 光源设置
     */
      // 点光源
      const point = new THREE.PointLight(0xffffff)
      point.position.set(0, 200, 300) // 点光源位置
      scene.add(point) // 点光源添加到场景中
      // 环境光
      const ambient = new THREE.AmbientLight(0x444444)
      scene.add(ambient)
      /**
     * 相机设置
     */
      const container = document.getElementById('container')
      const width = this.clientWidth // 窗口宽度
      const height = this.clientHeight // 窗口高度
      const k = width / height // 窗口宽高比
      const s = 200 // 三维场景显示范围控制系数，系数越大，显示的范围越大
      // 创建相机对象
      const camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000)
      camera.position.set(200, 300, 200) // 设置相机位置
      camera.lookAt(scene.position) // 设置相机方向(指向的场景对象)
      /**
     * 创建渲染器对象
     */
      const renderer = new THREE.WebGLRenderer()
      renderer.setSize(width, height)// 设置渲染区域尺寸
      renderer.setClearColor(0xffffff, 1) // 设置背景颜色
      container.appendChild(renderer.domElement) // body元素中插入canvas对象

      // 执行渲染操作   指定场景、相机作为参数
      // renderer.render(scene, camera)

      // 自定义渲染 --- 均匀旋转
      let T0 = new Date()// 上次时间
      function render () {
        const T1 = new Date()// 本次时间
        const t = T1 - T0// 时间差
        T0 = T1// 把本次时间赋值给上次时间
        requestAnimationFrame(render)
        renderer.render(scene, camera)// 执行渲染操作
        mesh.rotateY(0.001 * t)// 旋转角速度0.001弧度每毫秒
      }
      render()

      // 控制器
      const controls = new OrbitControls(camera, renderer.domElement)
      controls.addEventListener('change', () => {
        renderer.render(scene, camera)
      })
      controls.update()
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
