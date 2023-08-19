const logout = () => {
    localStorage.clear();
    location.href = "login.html"
}
// getUserData()
window.logout = logout


// new api////////////////
const celebrityData = [
    {
        name: "Ronaldo",
        occupation: "Sportsman",
        age: 40,
        nationality: "Portugal",
        image:"https://img.rasset.ie/000b7c36-800.jpg",
        socialMedia: {
            twitter: "@johnsmith",
            instagram: "@johnsmith_official",
            facebook: "JohnSmithOfficial"
        },
        bio: "Cristiano Ronaldo dos Santos Aveiro GOIH ComM is a Portuguese professional footballer who plays as a forward for and captains both Saudi Pro League club Al Nassr and the Portugal national team. Widely regarded as one of the greatest players of all time, "
    },
    {
        name: "AUDI",
        occupation: "AUdi",
        age: 1,
        nationality: "",
        image: "https://th.bing.com/th/id/OIP.y346cQPx9kFq432_bsG8VgHaE4?w=246&h=180&c=7&r=0&o=5&pid=1.7" ,
        socialMedia: {
            twitter: "@emilymusic",
            instagram: "@emily_music",
            facebook: "EmilyJohnsonMusic"
        },
        bio: "Audi AG is a German automotive manufacturer of luxury vehicles headquartered in Ingolstadt, Bavaria, Germany. As a subsidiary of its parent company, the Volkswagen Group, Audi produces vehicles in nine production facilities worldwide"
    },
    // ... Repeat for other celebrities
    {
        name: "Honda Civic",
        occupation: "Athlete",
        age: 28,
        nationality: "Spanish",
        image: "data:image/jpeg;base64,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",
        socialMedia: {
            twitter: "@michaelrodriguez",
            instagram: "@michael_rodriguez",
            facebook: "MichaelRodriguezOfficial"
        },
        bio: "The Honda Civic is a series of automobiles manufactured by Honda since 1972. Since 2000, the Civic has been categorized as a compact car, while previously ..."
    },

    // {
    //     name: "Alex Johnson",
    //     party: "Progressive Party",
    //     age: 52,
    //     nationality: "American",
    //     image: "imeges/Alex Johnson.jpg",
    //     socialMedia: {
    //         twitter: "@alexjohnson",
    //         facebook: "AlexJohnsonOfficial"
    //     },
    //     bio: "Alex Johnson is a dedicated politician known for their commitment to social progress and equality. Born in the bustling city of Washington, they embarked on a political journey..."
    // },
    // {
    //     name: "Sophia Lee",
    //     party: "Liberty Alliance",
    //     age: 45,
    //     nationality: "British",
    //     image: "imeges/Sophia Lee.jpg",
    //     socialMedia: {
    //         twitter: "@sophialee",
    //         facebook: "SophiaLeeOfficial"
    //     },
    //     bio: "Sophia Lee is a charismatic politician who has advocated for personal freedoms and individual rights. Hailing from London, she entered the world of politics with a vision of..."
    // },
    // {
    //     name: "Rajesh Patel",
    //     party: "United Front",
    //     age: 60,
    //     nationality: "Indian",
    //     image: "imeges/Rajesh Patel.jpg",
    //     socialMedia: {
    //         twitter: "@rajeshpatel",
    //         facebook: "RajeshPatelOfficial"
    //     },
    //     bio: "Rajesh Patel is a respected politician who has worked tirelessly to bridge cultural divides and foster unity in his nation. Born and raised in Mumbai, he has led initiatives..."
    // }
];

celebrityData.forEach(celebrity => {
    // console.log(`Name: ${celebrity.name}`);
    // console.log(`Occupation: ${celebrity.occupation}`);
    // console.log(`Age: ${celebrity.age}`);
    // console.log(`Nationality: ${celebrity.nationality}`);
    // console.log(`Image: ${celebrity.image}`);
    // console.log(`Twitter: ${celebrity.socialMedia.twitter}`);
    // console.log(`Instagram: ${celebrity.socialMedia.instagram}`);
    // console.log(`Facebook: ${celebrity.socialMedia.facebook}`);
    // console.log(`Bio: ${celebrity.bio}`);
    // console.log('-----------------------------------');

    const main = document.getElementById("main");
    const newPost = `
        <div class="card">
            <div class="row">
                <div class="col-md-7 px-3 " >
                    <div class="card-block px-6">
                        <h4 class="card-title">Name: ${celebrity.name}</h4>
                        <p class="card-text">Bio: ${celebrity.bio}</p>
                        <a href="#" class="mt-auto btn btn-primary">Read More</a>
                    </div>
                </div>
                <!-- Carousel start -->
                <div class="col-md-5">
                    <div id="CarouselTest" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img class="d-block" width="300px" src="${celebrity.image}" alt="Celebrity Image">
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End of carousel -->
            </div>
        </div>`;

    // Append the new post HTML to the existing content
    main.innerHTML += newPost;
});

