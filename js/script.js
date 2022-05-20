const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

const createPet = function (name, species) {
  const pet = {
    pet: name,
    species: species,
    isTired: 5,
    sleep: function () {
      console.log(`${this.pet} needs a nap. Zzz...`);
      this.isTired = 1;
    },
    play: function () {
      if (this.isTired === 10) {
        console.log("Too tired to play.");
        this.sleep();
      } else {
        console.log(`Yay! ${this.pet} loves to play!`);
        this.isTired += 1;
      }
    }
  };
  return pet;
};

const sora = createPet("Sora", "ferret");
const clover = createPet("Clover", "rabbit");
const baxter = createPet("Baxter", "hampster");
const cleo = createPet("Cleo", "rat");
const francine = createPet("Francine", "turtle");

clover.isTired = 8;
francine.isTired = 9;

const allPets = [sora, clover, baxter, cleo, francine];
//console.log(allPets);

const showPets = function (petArray) {
  pets.innerHTML = "";
  for (let animal of petArray) {
    let status = "ready to play!";
    if (animal.isTired >= 7) {
      status = "sleeping";
    }
    let li = document.createElement("li");
    li.innerHTML = `<span class = "pet-name">${animal.pet}</span> the ${animal.species} is ${status}.`;
    pets.append(li);
  }
};

statusButton.addEventListener("click", function () {
  if (pets.innerHTML !== "") {
    pets.innerHTML = "";
    statusButton.innerText = "SHOW PET STATUS";
  } else {
    showPets(allPets);
    statusButton.innerText = "HIDE";
  }
});
