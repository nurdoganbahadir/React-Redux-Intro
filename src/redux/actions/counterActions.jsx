//arttır, azalt, sıfırla

export const arttir = () => ({
  type: "ARTTIR",
  payload: "ARTTIRILDI",
});

export const sifirla = () => ({
  type: "SIFIRLA",
  payload: "SIFIRLANDI",
});

export const azalt = () => ({
  type: "AZALT",
  payload: "AZALTILDI",
});
