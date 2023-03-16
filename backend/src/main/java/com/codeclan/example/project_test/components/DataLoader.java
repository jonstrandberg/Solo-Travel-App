package com.codeclan.example.project_test.components;

import com.codeclan.example.project_test.models.Event;
import com.codeclan.example.project_test.models.Country;
import com.codeclan.example.project_test.models.Location;
import com.codeclan.example.project_test.models.SignUp;
import com.codeclan.example.project_test.models.UserProfile;
import com.codeclan.example.project_test.models.*;
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

        Country portugal = new Country("Portugal");
        countryRepository.save(portugal);

        Country austria = new Country("Austria");
        countryRepository.save(austria);

        Country italy = new Country("Italy");
        countryRepository.save(italy);

        Country sweden = new Country("Sweden");
        countryRepository.save(sweden);

//      Locations
        Location edinburgh = new Location("Edinburgh", scotland, "Edinburgh is the capital city of Scotland and home to many historical landmarks, including Edinburgh Castle and the Royal Mile. It is also known for its festivals, including the Edinburgh Fringe Festival and the Hogmanay celebrations.");
        locationRepository.save(edinburgh);

        Location berlin = new Location("Berlin", germany, "Berlin is the capital city of Germany and is known for its rich history, culture, and nightlife. It is home to many world-famous landmarks, such as the Berlin Wall and the Brandenburg Gate.");
        locationRepository.save(berlin);

        Location munich = new Location("Munich", germany, "Munich is the capital city of Bavaria in Germany and is known for its beautiful architecture, beer gardens, and museums. It is also the home of the world-famous Oktoberfest.");
        locationRepository.save(munich);

        Location porto = new Location("Porto", portugal, "Porto is a coastal city in Portugal and is known for its historic center, which is a UNESCO World Heritage Site. It is also famous for its port wine, which is produced in the Douro Valley.");
        locationRepository.save(porto);

        Location lisbon = new Location("Lisbon", portugal, "Lisbon is the capital city of Portugal and is known for its stunning architecture, beaches, and vibrant culture. It is home to many historical landmarks, including the Belem Tower and the Jeronimos Monastery.");
        locationRepository.save(lisbon);

        Location vienna = new Location("Vienna", austria, "Vienna is the capital city of Austria and is known for its stunning architecture, music, and art. It is home to many world-famous landmarks, such as the Hofburg Palace and St. Stephen's Cathedral.");
        locationRepository.save(vienna);

        Location cairo = new Location("Cairo", egypt, "Cairo is the capital city of Egypt and is known for its ancient history, including the Pyramids of Giza and the Sphinx. It is also a vibrant city, with a bustling market, delicious food, and a rich culture.");
        locationRepository.save(cairo);

        Location stockholm = new Location("Stockholm", sweden, "Stockholm is the capital city of Sweden and is known for its beautiful architecture, parks, and museums. It is situated on a group of islands, which makes it a unique and picturesque city to explore.");
        locationRepository.save(stockholm);

        Location rome = new Location("Rome", italy, "Rome is the capital city of Italy and is known for its rich history, stunning architecture, and delicious food. It is home to many world-famous landmarks, such as the Colosseum and the Vatican City.");
        locationRepository.save(rome);

        Location milan = new Location("Milan", italy, "Milan is a stylish city in northern Italy, famous for its fashion industry and landmarks such as the Gothic Cathedral and La Scala opera house. Its rich artistic heritage and delicious cuisine make it a popular destination for tourists.");
        locationRepository.save(milan);


        // Users
        UserProfile user1 = new UserProfile("Johnny Sweden", "https://xsgames.co/randomusers/assets/avatars/male/1.jpg", "Gothernberg, Sweden", "Scotland", 37, munich);
        userProfileRepository.save(user1);

        UserProfile user2 = new UserProfile("Ben Barlow", "https://xsgames.co/randomusers/assets/avatars/male/2.jpg", "Paisley, Scotland", "Scotland", 40, munich);
        userProfileRepository.save(user2);

        UserProfile user3 = new UserProfile("Maggie Amin", "https://xsgames.co/randomusers/assets/avatars/female/53.jpg", "Cairo, Egypt", "Egypt", 28, edinburgh);
        userProfileRepository.save(user3);

        UserProfile user4 = new UserProfile("Gareth Evans", "https://xsgames.co/randomusers/assets/avatars/male/4.jpg", "Lossiemouth, Scotland", "Scotland", 30, berlin);
        userProfileRepository.save(user4);

        UserProfile user5 = new UserProfile("The Almighty Creator", "https://xsgames.co/randomusers/assets/avatars/male/5.jpg", "Heaven", "Godly", 30, munich);
        userProfileRepository.save(user5);

        // Events
        Event event1 = new Event("Oktoberfest", "17:00", "5 hours", "World famous beer festival", munich, "17-03-2023", user5, 10);
        eventRepository.save(event1);

        Event event2 = new Event("Bayern Munich v Union Berlin", "15:00", "2.5 hours", "FOOTBALL", munich, "18-03-2023", user5, 6);
        eventRepository.save(event2);

        Event event3 = new Event("KitKat Club", "23:00", "12 hours", "Don't forget your latex ;)", berlin, "20-03-2023", user5, 3);
        eventRepository.save(event3);

        Event event4 = new Event("Pub Crawl", "20:00", "3 hours", "A famous tour across the Grassmarket and Cowgate", edinburgh, "19-03-2023", user5, 15);
        eventRepository.save(event4);

        Event event5 = new Event("Carnaval de Lisboa", "14:00", "6 hours", "A colorful celebration of Portuguese culture", lisbon, "21-03-2023", user5, 14);
        eventRepository.save(event5);

        Event event6 = new Event("Vienna Ball Season", "19:00", "8 hours", "A formal event featuring ballroom dancing and live music", vienna, "22-03-2023", user5, 8);
        eventRepository.save(event6);

        Event event7 = new Event("Pyramids of Giza Sound and Light Show", "19:00", "2 hours", "Experience the history of the pyramids through a unique light and sound show", cairo, "23-03-2023", user5, 5);
        eventRepository.save(event7);

        Event event8 = new Event("Stockholm Marathon", "09:00", "6 hours", "A scenic run through the streets of Stockholm", stockholm, "24-03-2023", user5, 4);
        eventRepository.save(event8);

        Event event9 = new Event("Rome International Film Festival", "18:00", "4 hours", "A showcase of international films in the heart of Rome", rome, "25-03-2023", user5,20);
        eventRepository.save(event9);

        Event event10 = new Event("Porto Wine Festival", "12:00", "8 hours", "Sample the famous port wine of Porto while enjoying live music and entertainment", porto, "26-03-2023", user5, 10);
        eventRepository.save(event10);

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
