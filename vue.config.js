module.exports = {
  devServer: {
    // ����
    proxy: {
      'api': {
        // Ŀ��·��
        target: 'http://127.0.0.1:8080',
        // �����Խ
        changOrigin: true,
        // ��д·��
        pathRewrite: {
          '^/api': ""
        }
      }
    }
  }
}