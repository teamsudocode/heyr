package main

import (
	"gopkg.in/mgo.v2/bson"
	"time"
)

type User struct {
	ID           bson.ObjectId `bson:"_id,omitempty" json:"_id,omitempty"`
	FBID         string        `bson:"fb_id" json:"fb_id"`
	FirstName    string        `bson:"first_name" json:"first_name"`
	LastName     string        `bson:"last_name" json:"last_name"`
	FullName     string        `bson:"full_name" json:"full_name"`
	Birthday     time.Time     `bson:"birthday" json:"birthday"`
	Email        string        `bson:"email" json:"email"`
	Interests    []string      `bson:"interests" json:"interests"`
	Bio          string        `bson:"bio" json:"bio"`
	IsActive     bool          `bson:"is_active" json:"is_active"`
	LastLocation TLastLocation `bson:"last_location" json:"last_location"`
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
