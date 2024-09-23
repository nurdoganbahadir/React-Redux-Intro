const initial = {
  gorevler: [
    { id: 0, yazi: "Redux çalışıyoruz", completed: false },
    { id: 1, yazi: "Köpekleri gezdir", completed: true },
  ],
};

const todoReducer = (state = initial, { type, payload }) => {
  switch (type) {
    case "EKLE":
      return {
        gorevler: [
          ...state.gorevler,
          { id: 3, yazi: payload, completed: false },
        ],
      };
    case "SİL":
      return { gorevler: state.gorevler.filter((a) => a.id !== payload) };
    case "COMPLETE":
      return {
        gorevler: state.gorevler.map((a) =>
          a.id === payload ? { ...a, completed: !a.completed } : a
        ),
      };
    default:
      return state;
  }
};

export default todoReducer;
