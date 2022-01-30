/* Lesson 4 */

/* DATA */
// Step 1: Declare a new variable to hold information about yourself
let information = {
// Step 2: Inside of the object, add a property named name with a value of your name as a string
    name: 'Tyrone Garcia',
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
    photo: 'images/photo.jpg',
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
    favoriteFoods: ['Pizza', 'Hamburger', 'Chinese Rise' ],
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
    hobbies: [ 'Watch Tv', 'Play with my kids']
};

// Step 6: Add another property named placesLived with a value of an empty array
information.placesLived = [
// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
// Step 8: For each property, add appropriate values as strings
// Step 9: Add additional objects with the same properties for each place you've lived
    {
        place: 'Caracas',
        length: '2 years'
    },
    {
        place: 'Puerto la Cruz',
        length: '4 years'
    },
    {
        place: 'Maracay',
        length: '1 year'
    }
]


/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.querySelector('#name').textContent = information.name;
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.querySelector('#photo').setAttribute('src', information.photo);
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.querySelector('#photo').setAttribute('alt', information.name);
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
information.favoriteFoods.forEach((food) => {
    let VarFood = document.createElement('li');
    VarFood.textContent = food;
document.querySelector('#favorite-foods').appendChild(VarFood);
});



// Step 6: Repeat Step 4 for each hobby in the hobbies property
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
information.hobbies.forEach((hobbi) => {
    let VarHobbies = document.createElement('li');
    VarHobbies.textContent = hobbi;
document.querySelector('#hobbies').appendChild(VarHobbies);
});

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived

information.placesLived.forEach((places) => {
    let VarPlaces = document.createElement('dt');
    VarPlaces.textContent = places.place;
    
    let varYears = document.createElement('dd');
    varYears.textContent = places.length;
    
    // Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
    document.querySelector('#places-lived').appendChild(VarPlaces);
    document.querySelector('#places-lived').appendChild(varYears);
})