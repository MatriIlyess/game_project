document.addEventListener("DOMContentLoaded", (e) => {
  console.log(e);
  cardGenerator();
});

const cardGenerator = () => {
  //We generate the object
  let cardData = [
    { imgSrc: "./images/beatles.jpeg", id: 1, name: "beatles" },
    { imgSrc: "./images/hand.jpg", id: 2, name: "hand" },
    { imgSrc: "./images/fkatwigs.jpeg", id: 3, name: "fka twigs" },
    { imgSrc: "./images/fleetwood.jpeg", id: 4, name: "fleetwood" },
    { imgSrc: "./images/joy-division.jpeg", id: 5, name: "joy division" },
    { imgSrc: "./images/ledzep.jpeg", id: 6, name: "led zeppelin" },
    { imgSrc: "./images/metallica.jpeg", id: 7, name: "metallica" },
    { imgSrc: "./images/pinkfloyd.jpeg", id: 8, name: "pink floyd" },
    { imgSrc: "./images/beatles.jpeg", id: 9, name: "beatles" },
    { imgSrc: "./images/hand.jpg", id: 10, name: "hand" },
    { imgSrc: "./images/fkatwigs.jpeg", id: 11, name: "fka twigs" },
    { imgSrc: "./images/fleetwood.jpeg", id: 12, name: "fleetwood" },
    { imgSrc: "./images/joy-division.jpeg", id: 13, name: "joy division" },
    { imgSrc: "./images/ledzep.jpeg", id: 14, name: "led zeppelin" },
    { imgSrc: "./images/metallica.jpeg", id: 15, name: "metallica" },
    { imgSrc: "./images/pinkfloyd.jpeg", id: 16, name: "pink floyd" },
  ];

  //We need to shuffle the cards
  cardData.sort(() => Math.random() - 0.5);


  let hasFlippedCard = false;
  let firstCard = null, secondCard = null;

  const section = document.querySelector("section");

  //We generate the cards ♣️
  cardData.forEach((item) => {
    let card = document.createElement("div");
    card.classList = "card";

    card.setAttribute("id", "c-" + item.id);
    card.setAttribute("name", item.name);

    let face = document.createElement("img");
    face.classList = "face";
    face.src = item.imgSrc;
    face.setAttribute("id", "f-" + item.id);


    const back = document.createElement("div");
    back.classList = "back";
    back.setAttribute("id", item.id);
    back.setAttribute("name", item.name);


    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);


    const flipCard = (e) => {
      console.log("event", e.target)

      let card = document.getElementById("c-" + e.target.id);
      let face = document.getElementById("f-" + e.target.id);
      console.log("in flipcard, card is now:", card.getAttribute('name'))

        //Run our flip animation
        face.classList.toggle("toggleCard");
        card.classList.toggle("toggleCard");

        card.removeEventListener('click', flipCard)


        if (hasFlippedCard === false && firstCard === null && secondCard === null) {
          console.log("first click", card, face)
            firstCard = {face, card}
            hasFlippedCard = true

        } else if (hasFlippedCard === true && firstCard !== null && secondCard === null) {

          hasFlippedCard = false

          secondCard = {face, card}

          console.log("second click")

          console.log("first click", firstCard)
          console.log("second click", secondCard)

          console.log("first card: ", firstCard.card.getAttribute('name'))
          console.log("second card: ", secondCard.card.getAttribute('name'))

          if (firstCard.card.getAttribute('name') === secondCard.card.getAttribute('name')) {
            console.log("KIFkIFFFF!!!!!!!!!!!!!!!!")
            // firstCard.card.removeEventListener('click', flipCard)
            // secondCard.card.removeEventListener('click', flipCard)

                        firstCard = null
                        secondCard = null
                        hasFlippedCard = false

          } else {


            setTimeout(() => {
              console.log("toggling 2 cards...")
              firstCard.card.classList.toggle("toggleCard");
              firstCard.face.classList.toggle("toggleCard");
              secondCard.card.classList.toggle("toggleCard");
              secondCard.face.classList.toggle("toggleCard");

              firstCard.card.addEventListener('click', flipCard)
              secondCard.card.addEventListener('click', flipCard)

                          firstCard = null
                          secondCard = null
                          hasFlippedCard = false
            }, 1000)


          }





        }

    }



    card.addEventListener("click", flipCard);


  });

  //
};
