const URL_DEV_LOCAL = 'http://192.168.1.18:1337'
const URL_PRD = 'https://de72-190-66-99-88.ngrok-free.app'

const ENV = {
  DEV_LOCAL: { URL: URL_DEV_LOCAL },
  PRD: { URL: URL_PRD }
}

export default ENV.PRD
