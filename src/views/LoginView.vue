<template>
  <div class='loginView' ref="loginView">
    <el-container class="bg" ref="container">
      <el-aside width="60%">
        <div class="cover">
          <div class="tracking " v-show="cameraOpen">
            <video id="video" width="133%" height="100%" preload autoplay loop muted></video>
            <canvas v-show=false id="canvas" width="100%" height="100%"></canvas>
          </div>
        </div>
      </el-aside>

      <el-main class="login_form" style="">
        <el-header class="login_header" style="height:25%; ">
          <div class="login_logo">
          </div>
          <div class="login_title">
            Tiny planet
          </div>

        </el-header>
        <!-- :rules="rules" -->
        <el-form :model="loginForm" status-icon ref="loginForm" label-width="100px">
          <el-tabs :stretch=true v-model="loginType">
            <el-tab-pane label=" 免密登录" name="0"></el-tab-pane>
            <el-tab-pane label="密码登录" name="1"> </el-tab-pane>
            <el-tab-pane label="人脸登录" name="2"></el-tab-pane>
          </el-tabs>
          <div>
            <el-form-item label="手机号" prop="telephone">
              <el-input :disabled="loginType === '2'" v-model="loginForm.telephone" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item v-show="loginType === '1'" label="密码" prop="password">
              <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
            </el-form-item>
            <!-- 验证码 -->
            <el-form-item label="验证码" prop="verificationCode" v-show="loginType === '0'">
              <div class="bind_code">
                <el-input class="bind_code_input code" v-model="loginForm.verificationCode" type="text"
                  placeholder="手机验证码" />
                <el-button @click.native.prevent="bindforgetSendCode" class="codebtn" :disabled="disabled">
                  {{ btnText }}</el-button>
              </div>
            </el-form-item>
            <el-form-item v-show="loginType === '2'" label="提示">
              <el-input :disabled=true type="password" v-model="loginForm.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item style="text-align:center;">
              <el-button v-if="loginType === '0'" style="width:100%" type="primary" @click="telephoneLogin">
                <span>
                  注册/
                </span>
                登录
              </el-button>
              <el-button v-if="loginType === '1'" style="width:100%" type="primary" @click="passwordLogin">
                登录
              </el-button>
              <el-button v-if="loginType === '2' && !cameraOpen" style="width:100%" type="primary"
                @click="getCompetence">
                打开摄像头
              </el-button>
              <el-button v-if="loginType === '2' && cameraOpen" style="width:100%" type="primary" @click="faceLogin">
                校验/登录
              </el-button>
            </el-form-item>
          </div>
        </el-form>
        <el-footer style="">
          <el-row :gutter="24">

            <el-col :span="8">
              <div class="grid-content bg-purple">社交平台登录</div>
            </el-col>

            <el-col :span="4">
              <div class="ohter_login_type" @click="qqLogin">
                <div class="qq"></div>
                <div>QQ</div>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="ohter_login_type" @click="wechatLogin">
                <div class="wechat"></div>
                <div>微信</div>
              </div>
            </el-col>
            <!-- <el-col :span="4">
                            <div class="ohter_login_type" @click="wechatLogin">
                                <div class="program"></div>
                                <div>小程序</div>
                            </div>
                        </el-col> -->
          </el-row>
        </el-footer>
      </el-main>
    </el-container>
    <div class="footer">
      Designed by LengAo
    </div>
  </div>
</template>

<script>

import * as API from '@/server/api'
import * as AesUtil from '@/util/aesUtil'

require('tracking/build/tracking-min.js')
require('tracking/build/data/face-min.js')
require('tracking/build/data/mouth-min.js')
export default {
  components: {
  },
  data () {
    return {
      clientWidth: '',
      clientHeight: '',
      boxWidth: '0',
      boxHeight: '0',
      loginType: '0', // 0免密登录 1密码登录 2人脸登录
      //   验证码按钮
      type: '',
      btnText: '获取验证码',
      disabled: false, // 获取验证码按钮
      loginForm: { telephone: '', password: '', verificationCode: '', faceBase64: '', loginType: '' },
      cameraOpen: false, // 是否开启摄像头
      rules: {
        telephone: [
          { required: true, message: '请输入电话号码', trigger: 'blur' },
          { min: 11, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 11, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        verificationCode: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ]
      }
    }
  },
  watch: {
    loginType (newV, oldV) {
      if (this.cameraOpen && newV !== '2') {
        this.de()
      }
    }
  },
  methods: {
    // 手机验证码的倒计时
    doLoop: function (seconds) {
      seconds = seconds || 60
      this.btnText = seconds + 's后获取'
      const countdown = setInterval(() => {
        if (seconds > 0) {
          this.btnText = seconds + 's后获取'
          --seconds
        } else {
          this.btnText = '获取验证码'
          this.disabled = false
          clearInterval(countdown)
        }
      }, 1000)
    },
    // 发送验证码
    bindforgetSendCode () {
      this.$refs.loginForm.validateField('telephone', (errorMessage) => {
        if (!errorMessage) {
          //   captchaSms({ phonenumber: this.ruleForm.phone }).then(res => {
          //     console.log(res)
          //   })
          this.disabled = true
          this.btnText = '请稍候...'
          setTimeout(() => {
            this.doLoop(60)
          }, 500)
        } else {
          return false
        }
      })
    },

    qqLogin () { alert('qq登录') },
    wechatLogin () { alert('微信登录') },

    telephoneLogin () {
      API.telephoneLogin(this.loginForm)
    },
    passwordLogin () {
      const { ...data } = this.loginForm
      data.password = AesUtil.encrypt(this.loginForm.password)
      const a = API.passwordLogin(data).then((res) => {
        console.log('res', res)
        if (res.data !== null) {
          this.$message.success('登录成功！')
        } else {
          this.$message.error('手机号或密码错误！')
        }
      }).catch(res => {
        console.log(res)
      })
      console.log('ssss', a)
    },
    faceLogin () {
      const canvas = document.getElementById('canvas')
      const context = canvas.getContext('2d')
      const video = document.getElementById('video')
      context.drawImage(video, 0, 0, 1000, 700)
      const faceBase64 = canvas.toDataURL('img/jpeg')
      this.loginForm.faceBase64 = faceBase64
      API.faceLogin(this.loginForm)
    },

    // 打开摄像头
    getCompetence () {
      const _this = this
      this.thisCancas = document.getElementById('canvas')
      this.thisContext = this.thisCancas.getContext('2d')
      this.thisVideo = document.getElementById('video')
      if (navigator.mediaDevices === undefined) {
        navigator.mediaDevices = {}
      }
      if (navigator.mediaDevices.getUserMedia === undefined) {
        navigator.mediaDevices.getUserMedia = function (constraints) {
          const getUserMedia =
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia ||
            navigator.getUserMedia
          if (!getUserMedia) {
            return Promise.reject(
              new Error('getUserMedia is not implemented in this browser')
            )
          }
          return new Promise(function (resolve, reject) {
            getUserMedia.call(navigator, constraints, resolve, reject)
          })
        }
      }
      const constraints = {
        audio: false,
        video: {
          width: this.videoWidth,
          height: this.videoHeight,
          transform: 'scaleX(-1)'
        }
      }
      navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
        _this.mediaStreamTrack = typeof stream.stop === 'function' ? stream : stream.getTracks()[0]
        if ('srcObject' in _this.thisVideo) {
          _this.thisVideo.srcObject = stream
        } else {
          _this.thisVideo.src = window.URL.createObjectURL(stream)
        }
        _this.thisVideo.onloadedmetadata = function (e) {
          _this.thisVideo.play()
          _this.cameraOpen = true
          // _this.checkFace()
        }
      }).catch((err) => {
        Promise.reject(err)
      })
    },
    // 人脸检测
    checkFace () {
      const canvas = document.getElementById('canvas')
      const context = canvas.getContext('2d')
      const tracker = new window.tracking.ObjectTracker('face')
      tracker.setInitialScale(4)
      tracker.setStepSize(2)
      tracker.setEdgesDensity(0.1)
      this.trackerTask = window.tracking.track('#video', tracker, { camera: true })

      console.log('trackerTask', this.trackerTask)
      tracker.on('track', function (event) {
        console.log(event)
        context.clearRect(0, 0, canvas.width, canvas.height)

        event.data.forEach(function (rect) {
          context.strokeStyle = '#a64ceb'
          context.strokeRect(rect.x, rect.y, rect.width, rect.height)
          context.font = '11px Helvetica'
          context.fillStyle = '#fff'
          context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11)
          context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22)
        })
      })
    },
    de () {
      this.cameraOpen = false
      // 停止侦测
      this.trackerTask.stop()
      // 关闭摄像头
      this.mediaStreamTrack.stop()
    }

  },
  created () {
    this.clientWidth = document.documentElement.clientWidth
    this.clientHeight = document.documentElement.clientHeight
  },
  mounted () {
    this.$refs.container.$el.style.setProperty('height', (this.clientHeight * 0.7) + 'px')
    this.$refs.container.$el.style.setProperty('width', (this.clientWidth * 0.7) + 'px')
    this.boxHeight = this.clientHeight + ''
    this.boxWidth = this.clientWidth + ''
  }
}

</script>

<style lang="less" scoped>
.text-center {
  text-align: center;
}

.loginView {
  height: 100%;
  background-image: url("@/assets/static/login/bg.png");
  background-repeat: no-repeat;
  background-size: cover;
}

.bg {

  background-repeat: no-repeat;
  background-size: cover;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.qq {
  background-image: url("@/assets/static/login/qq.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 25px;
  height: 25px;
}

.wechat {
  background-image: url("@/assets/static/login/wechat.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 25px;
  height: 25px;
  margin-right: 3px;
}

.program {
  background-image: url("@/assets/static/login/plane.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 25px;
  height: 25px;
}

.ohter_login_type {
  height: 25px;
  line-height: 25px;
  text-align: center;
  width: 60px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: left;
  cursor: pointer
}

.bind_code {
  position: relative;
}

.codebtn {
  border: 1px solid;
  background: none;
  padding: 0;
  border-radius: 4px;
  position: absolute;
  right: 0px;
  font-size: 11px;
  font-weight: 500;
  font-family: PingFang SC-Medium, PingFang SC;
  // color: #1b3dd1;
  line-height: 15px;
  cursor: pointer;
  width: 120px;
  height: 100%;
}

.login_form {
  background-color: rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 3;
  color: white;
}

.login_header {
  text-align: center;
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.login_logo {
  background-image: url("@/assets/static/login/plane.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 170px;
  height: 100px;
  margin: auto;
}

.login_title {
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 50px;
}

.cover {
  position: relative;
  left: 50px;
  background-image: url("@/assets/static/login/canmerabg.png");
  background-size: cover;
  width: 308.5px;
  height: 305.5px;
  z-index: 2;
}

.tracking {
  position: absolute;
  top: 75px;
  left: 74px;
  overflow: hidden;
  height: 158px;
  width: 158px;
  border-radius: 50%;
  line-height: 130px;
}

.footer {
  position: absolute;
  bottom: 0;
  height: 110px;
  width: 100%;
  text-align: center;
  line-height: 110px;
  color: white;
}

#video,
#canvas {
  position: absolute;
  top: 0;
  right: -26px;
}

/deep/.el-tabs__active-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  width: 70px;
  background-color: rgb(39, 184, 208);
  z-index: 1;
}

/deep/.el-tabs__item.is-active {
  color: rgb(39, 184, 208);
  font-weight: bold;
}

/deep/.el-tabs__item {
  color: white;
  text-align: center;
  padding-top: 10px;
}

/deep/.el-tabs__item:hover {
  color: rgb(39, 184, 208);
  text-align: center;
  padding-top: 10px;
}

/deep/.el-form-item__label {
  color: white;
}
</style>
