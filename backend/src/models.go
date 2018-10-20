package main

import (
	"gopkg.in/mgo.v2/bson"
	"time"
)

type User struct {
	ObjID         bson.ObjectId `bson:"_id,omitempty" json:"-,omitempty"`
	ID            string        `bson:"id" json:"id"`
	Name          string        `bson:"name" json:"name"`
	FirstName     string        `bson:"first_name" json:"first_name"`
	LastName      string        `bson:"last_name" json:"last_name"`
	Birthday      string        `bson:"birthday" json:"birthday"`
	Email         string        `bson:"email" json:"email"`
	Gender        string        `bson:"string" json:"string"`
	Hometown      string        `bson:"hometown" json:"hometown"`
	ProfilePicUrl string        `bson:"profile_pic" json:"profile_pic"`
	Interests     []string      `bson:"interests" json:"interests"`
	Bio           string        `bson:"bio" json:"bio"`
	IsActive      bool          `bson:"is_active" json:"is_active"`
	LastLocation  TLastLocation `bson:"last_location" json:"last_location"`
}

type Connection struct {
	ID         bson.ObjectId `bson:"_id,omitempty" json:"_id,omitempty"`
	FirstUser  bson.ObjectId `bson:"first_user" json:"-"`
	SecondUser bson.ObjectId `bson:"second_user" json:"-"`
	CreatedAt  time.Time     `bson:"created_at" json:"created_at"`
}

type Place struct {
	ID       bson.ObjectId `bson:"_id,omitempty" json:"_id,omitempty"`
	Name     string        `bson:"name" json:"string"`
	Location GeoJson       `bson:"location" json:"location"`
	Landmark GeoJson       `bson:"landmark" json:"landmark"`
}

type GeoJson struct {
	Type        string    `bson:"type" json:"type"`
	Coordinates []float64 `bson:"coordinates" json:"coordinates"`
}

type TLastLocation struct {
	UpdatedAt time.Time `bson:"updated_at" json:"updated_at"`
	Location  GeoJson   `bson:"location" json:"location"`
}
