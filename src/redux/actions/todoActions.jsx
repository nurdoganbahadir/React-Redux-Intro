export const sil = (id) => ({
  type: "SİL",
  payload: id,
});

export const ekle = (todo) => ({
  type: "EKLE",
  payload: todo,
});

export const update = (id) => ({
  type: "COMPLETE",
  payload: id,
});
