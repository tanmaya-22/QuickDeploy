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

        stage('Deploy to Kubernetes') {
            steps {
                bat 'set KUBECONFIG=C:\\ProgramData\\Jenkins\\.jenkins\\.kube\\config && kubectl apply -f deployment.yaml --validate=false'
                bat 'set KUBECONFIG=C:\\ProgramData\\Jenkins\\.jenkins\\.kube\\config && kubectl apply -f service.yaml --validate=false'
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
