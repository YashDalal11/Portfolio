pipeline {
    agent any
    tools {nodejs "Node-22.2.0"}
    stages {
        stage("build") {
            steps {
                echo 'Builing the application...'
                sh 'npm install'
            }
        }
        stage("test") {
            steps {
                echo 'Testing the application...'
            }
        }
        stage("deploy") {
            steps {
                echo 'deploying the application...'
                sh '''
                    CI=false npm run build
                    npm start &
                    sleep 1
                    echo $! > .pidfile

                    echo 'Now...'
                    echo 'Visit http://localhost:3000 to see your Node.js/React application in action.'
                '''
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh 'kill $(cat .pidfile)'
            }
        }
    }
}
