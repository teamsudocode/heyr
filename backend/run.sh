go build -o heyr-backend src/*.go
export PORT=8000
export DB_URL="mongodb://user:user123@ds119161.mlab.com:19161/heyr"
export DB_URL="mongodb://localhost:27017/heyr"
./heyr-backend
