package com.codeclan.example.project_test.components;

import com.codeclan.example.project_test.models.Event;
import com.codeclan.example.project_test.models.Country;
import com.codeclan.example.project_test.models.Location;
import com.codeclan.example.project_test.models.SignUp;
import com.codeclan.example.project_test.models.UserProfile;
import com.codeclan.example.project_test.repositories.*;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

import java.io.*;
import java.net.URL;
import java.nio.charset.Charset;


@Profile("!test") //Run every time EXCEPT Tests
//@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    CountryRepository countryRepository;
    @Autowired
    EventRepository eventRepository;
    @Autowired
    LocationRepository locationRepository;
    @Autowired
    SignUpRepository signUpRepository;
    @Autowired
    UserProfileRepository userProfileRepository;

    public DataLoader() {}

    //read json from url

//    public static JSONObject readJsonFromUrl(String url) throws IOException, JSONException {
//        InputStream is = new URL(url).openStream(); // start loading
//        try {
//            BufferedReader rd = new BufferedReader(new InputStreamReader(is, Charset.forName("UTF-8")));
//            String jsonText = readAll(rd);
//            JSONObject json = new JSONObject(jsonText);
//            return json;
//        } finally {
//            is.close();
//        }
//    }
//
//    // takes stream returns string "api content"
//
//    private static String readAll(Reader rd) throws IOException {  // loading
//        StringBuilder sb = new StringBuilder();
//        int cp;
//        while ((cp = rd.read()) != -1) {
//            sb.append((char) cp);
//        }
//        return sb.toString();
//    }
//
//    @Override
//    public void run(ApplicationArguments args) throws IOException {
//        JSONObject countriesJson = readJsonFromUrl("https://countriesnow.space/api/v0.1/countries");
//        JSONArray countriesArray = (JSONArray) countriesJson.get("data");
//        for (Object country : countriesArray) {
//            JSONObject countryJson = (JSONObject) country;
//            Country c = new Country(countryJson.getString("country"));
//            countryRepository.save(c);
//            JSONArray cities = countryJson.getJSONArray("cities");
//            for (Object city : cities){
//                Location l = new Location((String) city, c);
//                locationRepository.save(l);
//            }
//        }


    @Override
    public void run(ApplicationArguments args) {
//      Countries
        Country scotland = new Country("Scotland");
        countryRepository.save(scotland);

        Country germany = new Country("Germany");
        countryRepository.save(germany);

        Country egypt = new Country("Egypt");
        countryRepository.save(egypt);

//      Locations
        Location edinburgh = new Location("Edinburgh", scotland);
        locationRepository.save(edinburgh);

        Location berlin = new Location("Berlin", germany);
        locationRepository.save(berlin);

        Location munich = new Location("Munich", germany);
        locationRepository.save(munich);

        // Users
        UserProfile user1 = new UserProfile("Johnny Sweden", "sweden.png", "Gothernberg", "Scotland", 37, munich);
        userProfileRepository.save(user1);

        UserProfile user2 = new UserProfile("Ben Barlow", "bigben.png", "Paisley", "Scotland", 40, munich);
        userProfileRepository.save(user2);

        UserProfile user3 = new UserProfile("Maggie Amin", "jamanji.png", "Pyramid City", "Egypt", 28, edinburgh);
        userProfileRepository.save(user3);

        UserProfile user4 = new UserProfile("Gareth Evans", "sheep.png", "Aberdeen", "Scotland", 30, berlin);
        userProfileRepository.save(user4);

        // Events
        Event event1 = new Event("Oktoberfest", "17:00", "5 hours", "World famous beer festival", munich, "17-03-2023");
        eventRepository.save(event1);

        Event event2 = new Event("Bayern Munich v Union Berlin", "15:00", "2.5 hours", "FOOTBALL", munich, "18-03-2023");
        eventRepository.save(event2);

        Event event3 = new Event("KitKat Club", "23:00", "12 hours", "Don't forget your latex ;)", berlin, "20-03-2023");
        eventRepository.save(event3);

        Event event4 = new Event("Pub Crawl", "20:00", "3 hours", "A famous tour across the Grassmarket and Cowgate", edinburgh, "19-03-2023");
        eventRepository.save(event4);

        // Sign Ups
        SignUp signUp1 = new SignUp(user1, event1);
        signUpRepository.save(signUp1);

        SignUp signUp2 = new SignUp(user2, event1);
        signUpRepository.save(signUp2);

        SignUp signUp3 = new SignUp(user1, event2);
        signUpRepository.save(signUp3);

        SignUp signUp4 = new SignUp(user2, event2);
        signUpRepository.save(signUp4);

        SignUp signUp5 = new SignUp(user3, event3);
        signUpRepository.save(signUp5);

        SignUp signUp6 = new SignUp(user4, event4);
        signUpRepository.save(signUp6);
    }

}
