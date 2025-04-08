const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

const createPet = function (name, species) {
  const pet = {
    name: name,
    species: species,
    isTired: 5,
    sleep: function () {
      console.log(`${this.name} needs a nap. Zzz...`);
      this.isTired = 1;
    },
    play: function () {
      if (this.isTired === 10) {
        console.log("Too tired to play.");
        this.sleep();
      } else {
        console.log(`Yay! ${this.name} loves to play!`);
        this.isTired += 1;
      }
    },
  };
  return pet;
};

const sora = createPet("Sora", "cat");
const clover = createPet("Clover", "rabbit");
const baxter = createPet("Baxter", "hamster");
const cleo = createPet("Cleo", "dog");
const francine = createPet("Francine", "turtle");

clover.isTired = 8;
francine.isTired = 9;

const allPets = [sora, clover, baxter, cleo, francine];

const showPets = function (petArray) {
  pets.innerHTML = "";
  for (let item of petArray) {
    let status = "ready to play!";
    if (item.isTired >= 7) {
      status = "sleeping"
    };
    let li = document.createElement("li");
    li.innerHTML = `<span class="pet-name">${item.name}</span> the ${item.species} is ${status}.`;
    pets.append(li);
  };
};

statusButton.addEventListener("click", function (){
  showPets(allPets);
});


