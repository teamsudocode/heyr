package main

import (
	"log"
	"os"

	mgo "gopkg.in/mgo.v2"
)

func main() {
	router := NewRouter()

	session, err := mgo.Dial(os.Getenv("DB_URL"))
	if err != nil {
		log.Fatal(err)
	}
	defer session.Close()

	DB = session.DB("heyr")
	router.Run()

	// user := User{
	// 	FBID:      "432098430924",
	// 	FirstName: "Himanshu",
	// 	LastName:  "Shekhar",
	// 	FullName:  "Himanshu Shekhar",
	// 	Birthday:  time.Now(),
	// 	Email:     "himanshshekharb16@gmail.com",
	// 	Interests: []string{"software", "geopolitics", "history"},
	// 	Bio:       "here to learn",
	// 	IsActive:  false,
	// 	LastLocation: TLastLocation{
	// 		UpdatedAt: time.Now(),
	// 		Location: GeoJson{
	// 			Type:        "point",
	// 			Coordinates: []float64{90.00, 32.343},
	// 		},
	// 	},
	// }

	// users := session.DB("heyr").C("users")
	// allUsers := []User{}
	// users.Find(nil).All(&allUsers)
	// log.Println(allUsers)

	// // users.Insert(user)

	// users.Find(bson.M{"last_location.location.type": "point"}).All(&allUsers)
	// log.Println(allUsers)
}
