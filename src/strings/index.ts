export default {
  colour: {
    getFavourite: {
      favourite: "You favourite is: %s",
      noFavourite: "You haven't selected your favourite colour."
    },
    setFavourite: {
      colours: [
        "Black",
        "Blue",
        "Brown",
        "Gold",
        "Green",
        "Orange",
        "Purple",
        "Red",
        "Silver",
        "White",
        "Yellow"
      ],
      prompt: "Which is your favourite color?",
      retryPrompt:
        "Sorry I didn’t understand. Please choose an option from the list by either entering the number or colour name.",
      selection: "You selected: %s"
    }
  },
  default: {
    message: "Sorry, I did not understand. Type 'help' if you need assistance."
  },
  global: {
    help: {
      message:
        "You can ask me things about:\n\n * Get favourite colour\n\n * Set favourite colour"
    }
  },
  greetings: {
    firstRun: {
      message:
        "Hi! I'm a Bot. Try asking me things like 'Get favourite colour', 'Set favourite colour' or 'help' for more assistance."
    },
    hello: {
      message: "Welcome back!"
    }
  }
};
