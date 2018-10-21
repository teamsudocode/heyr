package main

import (
	"log"
	"net/http"

	"github.com/gorilla/websocket"
)

var clientToConn = make(map[string]*websocket.Conn)
var connToClient = make(map[*websocket.Conn]string)

var wsupgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
}

type Message struct {
	From struct {
		ID   string `json:"id"`
		Name string `json:"name"`
	} `json:"from"`
	To struct {
		ID   string `json:"id"`
		Name string `json:"name"`
	} `json:"to"`
	Text string `json:"text"`
}

func ChatHandler(w http.ResponseWriter, r *http.Request) {
	wsupgrader.CheckOrigin = func(r *http.Request) bool {
		return true
	}
	conn, err := wsupgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Fatal(err)
	}
	defer conn.Close()

	userId := r.URL.Query()["user_id"][0]
	clientToConn[userId] = conn

	for {
		var msg Message
		if err = conn.ReadJSON(&msg); err != nil {
			log.Println("error", err)
			delete(clientToConn, userId)
			break
		}
		log.Println(msg.To, msg.From)
		// msg.From, msg.To = msg.To, msg.From
		// log.Println(msg.To, msg.From)
		if other, ok := clientToConn[msg.To.ID]; ok {
			other.WriteJSON(&msg)
		}

		log.Println("message from", userId, msg)
	}
}
