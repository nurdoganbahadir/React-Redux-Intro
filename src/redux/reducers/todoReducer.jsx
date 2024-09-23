const initial = {
  gorevler: [
    { id: 0, yazi: "Redux çalışıyoruz", completed: false },
    { id: 1, yazi: "Köpekleri gezdir", completed: true },
  ],
};

const todoReducer = (state = initial, { type, payload }) => {
  switch (type) {
    case "EKLE":

    case "KALDIR":

    case "COMPLETED":

    default:
      return state;
  }
};

export default todoReducer;
