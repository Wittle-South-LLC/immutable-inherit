pipeline {
  agent any
  stages {
    stage ('Run tests') {
      environment {
        NODE_ENV = 'test'
      }
      steps {
        sh "npm config set cache ${env.WORKSPACE}"
        sh "npm install"
        sh "npm run build"
        sh "npm test"
      }
    }
  }
  post {
    failure {
      mail to: 'eric@wittlesouth.com',
      subject: "WS Failed Pipeline: ${currentBuild.fullDisplayName}",
      body: "Build failed: ${env.BUILD_URL}"
    }
    always {
      deleteDir()
    }
  }
}
