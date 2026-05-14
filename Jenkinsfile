pipeline {
    agent any

    stages {

        stage('Clone Repository') {
            steps {
                echo 'Cloning repository...'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t quickdeploy-app .'
            }
        }

        stage('Run Docker Container') {
            steps {
                bat 'docker stop quickdeploy-container || exit 0'
                bat 'docker rm quickdeploy-container || exit 0'
                bat 'docker run -d -p 3000:3000 --name quickdeploy-container quickdeploy-app'
            }
        }

    }

    post {
        success {
            echo 'Pipeline executed successfully!'
        }

        failure {
            echo 'Pipeline failed!'
        }
    }
}