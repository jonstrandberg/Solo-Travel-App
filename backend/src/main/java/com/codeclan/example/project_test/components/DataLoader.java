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
@Component
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
        if(countryRepository.findAll().size() > 0) {
            return;
        }
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
        Location edinburgh = new Location("Edinburgh", scotland, "Edinburgh is the capital city of Scotland and home to many historical landmarks, including Edinburgh Castle and the Royal Mile. It is also known for its festivals, including the Edinburgh Fringe Festival and the Hogmanay celebrations.", "https://www.planetware.com/photos-large/SCO/scotland-edinburgh-castle-day.jpg");
        locationRepository.save(edinburgh);

        Location berlin = new Location("Berlin", germany, "Berlin is the capital city of Germany and is known for its rich history, culture, and nightlife. It is home to many world-famous landmarks, such as the Berlin Wall and the Brandenburg Gate.", "https://media.timeout.com/images/105303515/image.jpg");
        locationRepository.save(berlin);

        Location munich = new Location("Munich", germany, "Munich is the capital city of Bavaria in Germany and is known for its beautiful architecture, beer gardens, and museums. It is also the home of the world-famous Oktoberfest.", "https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/10/01/17/munich-hero.jpg?width=1200");
        locationRepository.save(munich);

        Location porto = new Location("Porto", portugal, "Porto is a coastal city in Portugal and is known for its historic center, which is a UNESCO World Heritage Site. It is also famous for its port wine, which is produced in the Douro Valley.", "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/06/26/18/porto-main.jpg?quality=75&width=1200&auto=webp");
        locationRepository.save(porto);

        Location lisbon = new Location("Lisbon", portugal, "Lisbon is the capital city of Portugal and is known for its stunning architecture, beaches, and vibrant culture. It is home to many historical landmarks, including the Belem Tower and the Jeronimos Monastery.", "https://www.winetraveler.com/wp-content/uploads/2018/11/10-best-unique-things-to-do-in-lisbon-portugal-experiences.jpg");
        locationRepository.save(lisbon);

        Location vienna = new Location("Vienna", austria, "Vienna is the capital city of Austria and is known for its stunning architecture, music, and art. It is home to many world-famous landmarks, such as the Hofburg Palace and St. Stephen's Cathedral.", "https://www.telegraph.co.uk/content/dam/travel/2022/12/12/TELEMMGLPICT000319480847_trans_NvBQzQNjv4BqfzOMAl0Xij9hZ3C3ekNETVUo7BdMuH_4WL_JvvDwfJI.jpeg");
        locationRepository.save(vienna);

        Location cairo = new Location("Cairo", egypt, "Cairo is the capital city of Egypt and is known for its ancient history, including the Pyramids of Giza and the Sphinx. It is also a vibrant city, with a bustling market, delicious food, and a rich culture.", "https://mediacloud.theweek.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1658846189/theweek/2022/July/Giza-Necropolis-Great-Sphinx-pyramids-Cairo-Egypt-Alamy-2HAJ78M.jpg");
        locationRepository.save(cairo);

        Location stockholm = new Location("Stockholm", sweden, "Stockholm is the capital city of Sweden and is known for its beautiful architecture, parks, and museums. It is situated on a group of islands, which makes it a unique and picturesque city to explore.", "https://www.lifeinnorway.net/wp-content/uploads/2022/06/waterside-view-of-stockholm-in-sweden.jpg");
        locationRepository.save(stockholm);

        Location rome = new Location("Rome", italy, "Rome is the capital city of Italy and is known for its rich history, stunning architecture, and delicious food. It is home to many world-famous landmarks, such as the Colosseum and the Vatican City.", "https://www.roadaffair.com/wp-content/uploads/2017/09/colosseum-rome-italy-shutterstock_433413835.jpg");
        locationRepository.save(rome);

        Location milan = new Location("Milan", italy, "Milan is a stylish city in northern Italy, famous for its fashion industry and landmarks such as the Gothic Cathedral and La Scala opera house. Its rich artistic heritage and delicious cuisine make it a popular destination for tourists.", "https://a.cdn-hotels.com/gdcs/production68/d1314/b12f79e7-bcce-4cac-96f8-33f98b9bfb88.jpg?impolicy=fcrop&w=800&h=533&q=medium");
        locationRepository.save(milan);

        // Users
        UserProfile user1 = new UserProfile("Johnny Sweden", "https://ca.slack-edge.com/T0TN401HD-U049AFWFYBD-6aa802517482-512", "Gothernberg, Sweden", "Scotland", 37, munich, "Ice Hockey, Meatballs, Going to IKEA with the missus", "Vxj1gKvrTFOQBkqv2nQnduRp8Xl1");
        userProfileRepository.save(user1);

        UserProfile user2 = new UserProfile("Ben Barlow", "https://ca.slack-edge.com/T0TN401HD-U049AJUBB34-93680e4cc47f-512", "Paisley, Scotland", "Scotland", 39, munich, "Pizza, Football, Darwin Nunez", "gAjsUXk75pg0JZ3PQLnPywR1Hro1");

        userProfileRepository.save(user2);

        UserProfile user3 = new UserProfile("Maggie Amin", "https://ca.slack-edge.com/T0TN401HD-U049P8B5HU1-5520e1f8828b-512", "Cairo, Egypt", "Egypt", 28, berlin, "Puppies, Long walks on the beach, Architecture", "sTVxexzZ6hhytl8tPWHF5H2k46n2");
        userProfileRepository.save(user3);

        UserProfile user4 = new UserProfile("Gareth Evans", "https://ca.slack-edge.com/T0TN401HD-U049D2VFCJY-a61e16c3db6f-512", "Lossiemouth, Scotland", "Scotland", 30, edinburgh, "Football, Sobriety, Puns", "dButkBOV7xcHqWs0DmwZd4f9Uyq1");
        userProfileRepository.save(user4);

        UserProfile user5 = new UserProfile("The Almighty Creator", "https://xsgames.co/randomusers/assets/avatars/male/5.jpg", "Heaven", "Godly", 30, null, "Church, Resurrection, Smiting", "Wkdd3oJeZlWMA8xktKyszQgnB4g1");
        userProfileRepository.save(user5);

        UserProfile user6 = new UserProfile("Sally Cinnamon", "https://xsgames.co/randomusers/assets/avatars/female/4.jpg", "Manchester, England", "England", 30, stockholm, "Music, Gigs, Pub", "rfsdfajt");
        userProfileRepository.save(user6);

        UserProfile user7 = new UserProfile("Fraser Jubb", "https://media.licdn.com/dms/image/C4D03AQGH9R6IEZOpSA/profile-displayphoto-shrink_800_800/0/1618099535038?e=1684972800&v=beta&t=2gp2t3e-LFq3nMda_kwWD8oULARkJ_wsDC9mSZmstQI", "Edinburgh, Scotland", "Scotland", 30, edinburgh, "Gaming, Comedy, Coding", "sghetahjt");
        userProfileRepository.save(user7);

        UserProfile user8 = new UserProfile("Samantha Elliott", "https://media.licdn.com/dms/image/D4E03AQHbiKkQZU812Q/profile-displayphoto-shrink_800_800/0/1678205452590?e=1684972800&v=beta&t=XpS0XJxVsYu14Vg-WppjsUBD2s96_CF2s0QVvUKU0sc", "London, England", "England", 30, edinburgh, "Travel, Hinge, Architecture", "ewytkjt");
        userProfileRepository.save(user8);

        UserProfile user9 = new UserProfile("Daniel Salvatori", "https://media.licdn.com/dms/image/C4E03AQGewW9qYtNwIA/profile-displayphoto-shrink_800_800/0/1627986476192?e=1684972800&v=beta&t=R4BfsTq0Kdcx2sUw5l1ckMSvQ8JVOxZwpeoaWhKFVT0", "Kent, England", "England", 30, edinburgh, "Photography, Space, Baking", "koethsa");
        userProfileRepository.save(user9);

        UserProfile user10 = new UserProfile("Lucy Kimmich", "https://xsgames.co/randomusers/assets/avatars/female/9.jpg", "Munich, Germany", "Germany", 30, cairo, "Fashion, Cooking, Learning Languages", "gfjskskr");
        userProfileRepository.save(user10);

        UserProfile user11 = new UserProfile("Maximilian Schmidt", "https://xsgames.co/randomusers/assets/avatars/male/12.jpg", "Berlin, Germany", "Germany", 28, berlin, "Technology, Music, Football", "mxhyfrt");
        userProfileRepository.save(user11);

        UserProfile user12 = new UserProfile("Sophia Gomez", "https://xsgames.co/randomusers/assets/avatars/female/9.jpg", "Madrid, Spain", "Spain", 25, lisbon, "Dancing, Literature, History", "gzmphs");
        userProfileRepository.save(user12);

        UserProfile user13 = new UserProfile("Luca Rossi", "https://xsgames.co/randomusers/assets/avatars/male/32.jpg", "Rome, Italy", "Italy", 31, rome, "Art, Nature, Cooking", "lcmvr74");
        userProfileRepository.save(user13);

        UserProfile user14 = new UserProfile("Hanna Olsson", "https://xsgames.co/randomusers/assets/avatars/female/2.jpg", "Stockholm, Sweden", "Sweden", 27, stockholm, "Yoga, Hiking, Photography", "hnasl39");
        userProfileRepository.save(user14);

        UserProfile user15 = new UserProfile("Karim Abdel Nour", "https://xsgames.co/randomusers/assets/avatars/male/23.jpg", "Cairo, Egypt", "Egypt", 29, cairo, "Reading, Astronomy, Tennis", "krnbd98");
        userProfileRepository.save(user15);

        UserProfile user16 = new UserProfile("Maria Rodriguez", "https://xsgames.co/randomusers/assets/avatars/female/6.jpg", "Barcelona, Spain", "Spain", 26, edinburgh, "Hiking, Travel, Music", "mrdrgh7");
        userProfileRepository.save(user16);

        UserProfile user17 = new UserProfile("Lena Fischer", "https://xsgames.co/randomusers/assets/avatars/female/3.jpg", "Munich, Germany", "Germany", 28, munich, "Art, Cycling, Literature", "lfschr2");
        userProfileRepository.save(user17);

        UserProfile user18 = new UserProfile("Alessandra Conti", "https://xsgames.co/randomusers/assets/avatars/female/1.jpg", "Milan, Italy", "Italy", 30, milan, "Fashion, Food, Architecture", "alscn79");
        userProfileRepository.save(user18);

        UserProfile user19 = new UserProfile("Isaac Wong", "https://xsgames.co/randomusers/assets/avatars/male/19.jpg", "Hong Kong, China", "China", 25, munich, "Basketball, Traveling, Photography", "iwcng5");
        userProfileRepository.save(user19);

        UserProfile user20 = new UserProfile("Anna Ivanova", "https://xsgames.co/randomusers/assets/avatars/female/11.jpg", "Moscow, Russia", "Russia", 27, milan, "Reading, Ballet, Coffee", "annivn3");
        userProfileRepository.save(user20);

        UserProfile user21 = new UserProfile("Sebastian Fernandez", "https://xsgames.co/randomusers/assets/avatars/male/15.jpg", "Buenos Aires, Argentina", "Argentina", 29, rome, "Soccer, Music, Cooking", "sebfrndz7");
        userProfileRepository.save(user21);

        UserProfile user22 = new UserProfile("Mila Kowalski", "https://xsgames.co/randomusers/assets/avatars/female/5.jpg", "Krakow, Poland", "Poland", 28, stockholm, "Hiking, Yoga, Painting", "mlkwlsk2");
        userProfileRepository.save(user22);

        UserProfile user23 = new UserProfile("Khaled Elsayed", "https://xsgames.co/randomusers/assets/avatars/male/4.jpg", "Alexandria, Egypt", "Egypt", 31, cairo, "Soccer, Politics, History", "khlsyd1");
        userProfileRepository.save(user23);

        UserProfile user24 = new UserProfile("Eva Torres", "https://xsgames.co/randomusers/assets/avatars/female/3.jpg", "Barcelona, Spain", "Spain", 24, vienna, "Dancing, Literature, Travel", "evtrrs8");
        userProfileRepository.save(user24);

        UserProfile user25 = new UserProfile("Tomasz Nowak", "https://xsgames.co/randomusers/assets/avatars/male/27.jpg", "Gdansk, Poland", "Poland", 26, lisbon, "Cycling, Photography, Beer", "tmnszk5");
        userProfileRepository.save(user25);

        UserProfile user26 = new UserProfile("Amina Kadirov", "https://xsgames.co/randomusers/assets/avatars/female/19.jpg", "Baku, Azerbaijan", "Azerbaijan", 29, lisbon, "Cooking, Traveling, Art", "amnkdrv2");
        userProfileRepository.save(user26);

        UserProfile user27 = new UserProfile("Janek Novak", "https://xsgames.co/randomusers/assets/avatars/male/29.jpg", "Prague, Czech Republic", "Czech Republic", 30, porto, "Beer, Football, History", "jnnvk7");
        userProfileRepository.save(user27);

        UserProfile user28 = new UserProfile("Karolina Szewczyk", "https://xsgames.co/randomusers/assets/avatars/female/8.jpg", "Warsaw, Poland", "Poland", 27, porto, "Art, Fashion, Literature", "krlszw3");
        userProfileRepository.save(user28);

        UserProfile user29 = new UserProfile("Fernando Perez", "https://xsgames.co/randomusers/assets/avatars/male/9.jpg", "Mexico City, Mexico", "Mexico", 32, berlin, "Soccer, Music, Travel", "frnpz10");
        userProfileRepository.save(user29);

        // Events
        Event event1 = new Event("Oktoberfest", "17:00 PM", "05hr(s) 0mins", "World famous beer festival", munich, "03 April 2023", user1, 10, "In front of the Bavaria statue");
        eventRepository.save(event1);

        Event event2 = new Event("Bayern Munich v Union Berlin", "15:00 PM", "02hr(s) 30mins", "FOOTBALL", munich, "30 March 2023", user2, 6, "Meeting at Marienplatz, then walking to the stadium");
        eventRepository.save(event2);

        Event event3 = new Event("River Spree Boat Tour", "11:00 AM", "12hr(s) 00mins", "View Berlin from a different perspective", berlin, "29 March 2023", user5, 6, "Nikolaiviertel Pier");
        eventRepository.save(event3);

        Event event4 = new Event("Pub Crawl", "20:00 PM", "03hr(s) 00mins", "A famous tour across the Grassmarket and Cowgate", edinburgh, "25 March 2023", user5, 15, "Meeting outside The Last Drop pub, 74-78 Grassmarket");
        eventRepository.save(event4);

        Event event5 = new Event("Carnaval de Lisboa", "14:00 PM", "06hr(s) 00mins", "A colorful celebration of Portuguese culture", lisbon, "03 April 2023", user5, 14, "Meeting at Praça da Figueira, in front of the statue of King John I");
        eventRepository.save(event5);

        Event event6 = new Event("Vienna Ball Season", "19:00 PM", "08hr(s) 00mins", "A formal event featuring ballroom dancing and live music", vienna, "04 April 2023", user5, 8, "Meeting at the entrance of the Hofburg Palace, next to the guard");
        eventRepository.save(event6);

        Event event7 = new Event("Pyramids of Giza Sound and Light Show", "19:00 PM", "02hr(s) 00mins", "Experience the history of the pyramids through a unique light and sound show", cairo, "01 April 2023", user5, 5, "Meeting at the entrance of the Pyramid of Khafre");
        eventRepository.save(event7);

        Event event8 = new Event("Stockholm Marathon", "09:00 AM", "06hr(s) 00mins", "A scenic run through the streets of Stockholm", stockholm, "27 March 2023", user5, 4, "Meeting at the start line, located at Lidingövägen 30");
        eventRepository.save(event8);

        Event event9 = new Event("Rome International Film Festival", "18:00 PM", "04hr(s) 00mins", "A showcase of international films in the heart of Rome", rome, "28 March 2023", user5,20, "Meeting at the entrance of Auditorium Parco della Musica, near the giant harp sculpture");
        eventRepository.save(event9);

        Event event10 = new Event("Porto Wine Festival", "12:00 PM", "08hr(s) 00mins", "Sample the famous port wine of Porto while enjoying live music and entertainment", porto, "02 April 2023", user5, 10, "Meeting at the entrance of Palácio da Bolsa, next to the statue of King Pedro IV");
        eventRepository.save(event10);

        Event event11 = new Event("Porto Street Art Tour", "14:00 PM", "02hr(s) 00mins", "Explore the vibrant street art scene of Porto with a knowledgeable guide", porto, "05 April 2023", user5, 8, "Meeting at Praça dos Poveiros, next to the fountain");
        eventRepository.save(event11);

        Event event12 = new Event("The Edinburgh Dungeon", "13:00 PM", "01hr(s) 00mins", "A thrilling tour through Scotland's darkest history", edinburgh, "04 April 2023", user6, 15, "Meeting at the entrance of the Edinburgh Dungeon on Market Street");
        eventRepository.save(event12);

        Event event13 = new Event("Milan Fashion Week", "16:00 PM", "02hr(s) 00mins", "A showcase of the latest fashion trends and designs", milan, "23 September 2023", user5, 25, "Meeting at the entrance of Palazzo Giureconsulti");
        eventRepository.save(event13);

        Event event14 = new Event("Bavarian Food Tour", "11:00 AM", "04hr(s) 00mins", "Explore the best of Bavarian cuisine with a local guide", munich, "08 April 2023", user5, 8, "Meeting at Marienplatz, in front of the Glockenspiel");
        eventRepository.save(event14);

        Event event15 = new Event("Rome Colosseum Tour", "10:00 AM", "02hr(s) 00mins", "A guided tour of the iconic Colosseum", rome, "19 April 2023", user5, 15, "Meeting at the entrance of the Colosseum");
        eventRepository.save(event15);

        Event event16 = new Event("Berlin Wall Tour", "14:00 PM", "03hr(s) 00mins", "A tour of the remaining sections of the Berlin Wall", berlin, "28 May 2023", user5, 10, "Meeting at the East Side Gallery, near the Trabant car");
        eventRepository.save(event16);

        Event event17 = new Event("Stockholm Pride Parade", "12:00 PM", "03hr(s) 00mins", "A colorful celebration of LGBTQ+ rights and equality", stockholm, "29 July 2023", user5, 25, "Meeting at Tantolunden Park, near the rainbow arch");
        eventRepository.save(event17);

        Event event18 = new Event("Lisbon Street Art Tour", "14:00 PM", "02hr(s) 00mins", "Discover the vibrant street art scene of Lisbon", lisbon, "07 April 2023", user5, 12, "Meeting at Praça Luís de Camões, next to the statue");
        eventRepository.save(event18);

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

        SignUp signUp7 = new SignUp(user1, event11);
        signUpRepository.save(signUp7);

        SignUp signUp8 = new SignUp(user2, event11);
        signUpRepository.save(signUp8);

        SignUp signUp9 = new SignUp(user7, event4);
        signUpRepository.save(signUp9);

        SignUp signUp10 = new SignUp(user8, event4);
        signUpRepository.save(signUp10);

        SignUp signUp11 = new SignUp(user9, event4);
        signUpRepository.save(signUp11);

        SignUp signUp12 = new SignUp(user16, event4);
        signUpRepository.save(signUp12);

        SignUp signUp13 = new SignUp(user29, event9);
        signUpRepository.save(signUp13);

        SignUp signUp14 = new SignUp(user28, event8);
        signUpRepository.save(signUp14);

        SignUp signUp15 = new SignUp(user27, event7);
        signUpRepository.save(signUp15);

        SignUp signUp16 = new SignUp(user26, event6);
        signUpRepository.save(signUp16);

        SignUp signUp17 = new SignUp(user25, event5);
        signUpRepository.save(signUp17);

        SignUp signUp18 = new SignUp(user24, event10);
        signUpRepository.save(signUp18);

        SignUp signUp19 = new SignUp(user23, event12);
        signUpRepository.save(signUp19);

        SignUp signUp20 = new SignUp(user22, event13);
        signUpRepository.save(signUp20);

        SignUp signUp21 = new SignUp(user21, event14);
        signUpRepository.save(signUp21);

        SignUp signUp22 = new SignUp(user20, event15);
        signUpRepository.save(signUp22);

        SignUp signUp23 = new SignUp(user19, event16);
        signUpRepository.save(signUp23);

        SignUp signUp24 = new SignUp(user18, event17);
        signUpRepository.save(signUp24);

        SignUp signUp25 = new SignUp(user17, event18);
        signUpRepository.save(signUp25);

        SignUp signUp26 = new SignUp(user16, event4);
        signUpRepository.save(signUp26);

        SignUp signUp27 = new SignUp(user15, event13);
        signUpRepository.save(signUp27);

        SignUp signUp28 = new SignUp(user14, event5);
        signUpRepository.save(signUp28);

        SignUp signUp29 = new SignUp(user13, event6);
        signUpRepository.save(signUp29);

        SignUp signUp30 = new SignUp(user12, event7);
        signUpRepository.save(signUp30);

        SignUp signUp31 = new SignUp(user11, event11);
        signUpRepository.save(signUp31);

        SignUp signUp32 = new SignUp(user10, event12);
        signUpRepository.save(signUp32);

        SignUp signUp33 = new SignUp(user5, event5);
        signUpRepository.save(signUp33);

        SignUp signUp34 = new SignUp(user6, event14);
        signUpRepository.save(signUp34);

        SignUp signUp35 = new SignUp(user27, event6);
        signUpRepository.save(signUp35);
    }

}
