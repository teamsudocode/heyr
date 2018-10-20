package main

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"gopkg.in/mgo.v2"
	"gopkg.in/mgo.v2/bson"
	"log"
	"net/http"
	"time"
)

var DB *mgo.Database

func NewRouter() *gin.Engine {
	router := gin.Default()
	router.Use(cors.Default())
	api := router.Group("/api")
	{
		api.GET("/alive", SayAlive)
		api.POST("/login", PerformFBLogin)
		api.POST("/user/update_details", UpdateUserDetails)
		api.POST("/user/update_active", UpdateUserActiveState)
		api.GET("/all_interests", GetAllInterests)

		api.GET("/people_around", GetPeopleAround)
	}
	return router
}

func SayAlive(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"status": "I'm alive!",
	})
}

func UpdateUserActiveState(c *gin.Context) {
	reqJson := struct {
		UserID   string  `json:"user_id" binding:"required"`
		Token    string  `json:"token"`
		IsActive bool    `json:"is_active"`
		Lat      float64 `json:"lat" binding:"required"`
		Long     float64 `json:"long" binding:"required"`
	}{}
	if err := c.ShouldBindJSON(&reqJson); err != nil {
		log.Println("Error", err)
		c.AbortWithStatusJSON(http.StatusBadRequest, gin.H{
			"message": "Missing request parameters",
		})
		return
	}

	user := User{}
	err := DB.C("users").Find(bson.M{"id": reqJson.UserID}).One(&user)
	if err == mgo.ErrNotFound {
		c.AbortWithStatusJSON(http.StatusBadRequest, gin.H{
			"message": "User not found",
		})
		return
	}

	user.LastLocation = TLastLocation{
		UpdatedAt: time.Now(),
		Location: GeoJson{
			Type:        "Point",
			Coordinates: []float64{reqJson.Lat, reqJson.Long},
		},
	}
	user.IsActive = reqJson.IsActive

	err = DB.C("users").UpdateId(user.ObjID, &user)
	if err != nil {
		log.Println("Error while updating active state", err)
		c.AbortWithStatusJSON(http.StatusBadGateway, gin.H{
			"message": "Failed to update active state",
		})
		return
	}
	c.JSON(http.StatusOK, gin.H{
		"message": "Successfully updated",
	})
}

func GetPeopleAround(c *gin.Context) {
	reqJson := struct {
		Token       string    `json:"token"`
		UserID      string    `json:"user_id" binding:"required"`
		Coordinates []float64 `json:"coordinates" binding:"required"`
	}{}
	if err := c.ShouldBindJSON(&reqJson); err != nil {
		c.AbortWithStatusJSON(http.StatusBadRequest, gin.H{
			"message": "Missing request parameters",
		})
		return
	}

	nearme := []User{}
	err := DB.C("users").Find(bson.M{
		"last_location.location": bson.M{
			"$near": bson.M{
				"$geometry": bson.M{
					"type":        "Point",
					"coordinates": []float64{23.4, 83.2},
				},
				"$maxDistance": 100,
			},
		},
	}).All(&nearme)

	if err != nil {
		c.AbortWithStatusJSON(http.StatusBadRequest, gin.H{
			"message": "Could not find people around :(",
		})
		return
	}
	c.JSON(http.StatusOK, nearme)
}

func UpdateUserDetails(c *gin.Context) {
	reqJson := struct {
		UserID    string   `json:"user_id" binding:"required"`
		Bio       string   `json:"bio" binding:"required"`
		Interests []string `json:"interests" binding:"required"`
	}{}

	if err := c.ShouldBindJSON(&reqJson); err != nil {
		c.AbortWithStatusJSON(http.StatusBadRequest, gin.H{
			"message": "Missing requests parameters",
		})
		return
	}

	user := User{}
	err := DB.C("users").Find(bson.M{"id": reqJson.UserID}).One(&user)
	if err != nil {
		c.AbortWithStatusJSON(http.StatusBadRequest, gin.H{
			"message": "Bad request",
		})
		return
	}

	user.Bio = reqJson.Bio
	user.Interests = reqJson.Interests
	err = DB.C("users").UpdateId(user.ObjID, user)
	if err != nil {
		log.Println("failed to update", err)
	}
	c.JSON(http.StatusOK, gin.H{
		"message": "updated",
	})
}

func GetAllInterests(c *gin.Context) {
	allInterests := []string{}
	DB.C("users").Find(nil).Distinct("interests", &allInterests)
	c.JSON(http.StatusOK, gin.H{
		"allInterests": allInterests,
	})
}

func PerformFBLogin(c *gin.Context) {
	requestJson := struct {
		Token  string `json:"token"`
		UserID string `json:"user_id"`
	}{}
	c.ShouldBindJSON(&requestJson)

	// check if the user exists
	user := User{}
	err := DB.C("users").Find(bson.M{"id": requestJson.UserID}).One(&user)
	exists := true
	if err != nil {
		user = GetInfoFromFB(requestJson.Token)
		if len(user.Name) == 0 {
			c.AbortWithStatusJSON(http.StatusBadRequest, gin.H{
				"message": "Couldn't find on Facebook",
			})
			return
		}
		DB.C("users").Insert(user)
		exists = false
	}

	if len(user.Bio) == 0 || len(user.Interests) == 0 {
		exists = false
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "logged in",
		"token":   requestJson.Token,
		"user":    user,
		"exists":  exists,
	})
}

// func NewRouter() *mux.Router {
// 	r := mux.NewRouter()
// 	r.HandleFunc("/api/login", PerformFBLogin).Methods("POST")
// 	r.HandleFunc("/api/user/update", UpdateUserInfo).Methods("POST")
// 	r.HandleFunc("/api/user/{userId}", GetUser).Methods("GET")
// 	r.HandleFunc("/api/user/me", GetCurrentUser).Methods("GET")
// 	return r
// }

// func PerformFBLogin(w http.ResponseWriter, r *http.Request) {
// 	// create user if not exists, and do the login
// }

// func UpdateUserInfo(w http.ResponseWriter, r *http.Request) {
// 	// update bio and interests
// }

// func GetUser(w http.ResponseWriter, r *http.Request) {
// 	// get user info for given user id
// }

// func GetCurrentUser(w http.ResponseWriter, r *http.Request) {}
