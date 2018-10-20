package main

import (
	"encoding/json"
	"log"
	"net/http"
)

func GetInfoFromFB(userToken string) User {
	fbResp := struct {
		Name      string `json:"name"`
		FirstName string `json:"first_name"`
		LastName  string `json:"last_name"`
		ID        string `json:"id"`
		Birthday  string `json:"birthday"`
		Email     string `json:"email"`
		Gender    string `json:"gender"`
		Picture   struct {
			Data struct {
				URL string `json:"url"`
			} `json:"data"`
		} `json:"picture"`
	}{}

	client := &http.Client{}
	req, err := http.NewRequest("GET", "https://graph.facebook.com/me", nil)
	req.Header.Add("Authorization", "Bearer "+userToken)

	q := req.URL.Query()
	q.Add("fields", "id,name,first_name,last_name,birthday,gender,email,location,picture")

	req.URL.RawQuery = q.Encode()

	resp, err := client.Do(req)
	if err != nil {
		log.Fatal(err)
	}
	defer resp.Body.Close()

	// user := User{FBID: fbResp.ID}
	json.NewDecoder(resp.Body).Decode(&fbResp)
	// json.NewDecoder(resp.Body).Decode(&user)
	user := User{
		Name:          fbResp.Name,
		FirstName:     fbResp.FirstName,
		LastName:      fbResp.LastName,
		ID:            fbResp.ID,
		Birthday:      fbResp.Birthday,
		Email:         fbResp.Email,
		Gender:        fbResp.Gender,
		ProfilePicUrl: fbResp.Picture.Data.URL,
	}
	log.Println("fb says", user)
	return user
}
