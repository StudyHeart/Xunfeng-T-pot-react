
// ref: https://umijs.org/config/
export default {
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: '大数据安全监管平台',
      dll: false,
      routes: {
        exclude: [],
      },
      hardSource: false,
    }]
  ],
  "proxy": {
    "/api": {
      "target":"http://192.168.43.135:8080",
      "changeOrigin": true,
      "pathRewrite": { "^/api" : "" }
    }
  }
}
