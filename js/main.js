const traduccion = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};

const enc = document.querySelector("#enc");
const des = document.querySelector("#des");
const copy = document.querySelector("#copiar");

enc.addEventListener("click", () => encriptar(traduccion));
des.addEventListener("click", () => desencriptar(traduccion));
copy.addEventListener("click", clipboard);

function encriptar(traduccion) {
  const texto = document.querySelector("#texto").value.trim();
  const texto_out = document.querySelector("#texto_out");
  const area_default = document.querySelector("#default");
  const area_result = document.querySelector("#result");

  if (!/^[a-z\s]*$/.test(texto)) {
    const warning = document.querySelector("#warning");
    warning.style.color = "black";
    warning.style.fontSize = "18px";
    return;
  }

  if (texto.length === 0 || /^\s+$/.test(texto)) {
    area_default.classList.remove("invisible");
    area_result.classList.add("invisible");
    return;
  }

  let out = texto
    .split("")
    .map((char) => traduccion[char] || char)
    .join("");

  area_default.classList.add("invisible");
  area_result.classList.remove("invisible");
  texto_out.innerHTML = out;
}

function desencriptar(traduccion) {
  const texto = document.querySelector("#texto").value.trim();
  const texto_out = document.querySelector("#texto_out");
  const area_default = document.querySelector("#default");
  const area_result = document.querySelector("#result");

  if (!/^[a-z\s]*$/.test(texto)) {
    const warning = document.querySelector("#warning");
    warning.style.color = "black";
    warning.style.fontSize = "18px";
    return;
  }

  if (texto.length === 0 || /^\s+$/.test(texto)) {
    area_default.classList.remove("invisible");
    area_result.classList.add("invisible");
    return;
  }

  let out = texto;
  for (const key in traduccion) {
    if (Object.hasOwnProperty.call(traduccion, key)) {
      out = out.split(traduccion[key]).join(key);
    }
  }

  area_default.classList.add("invisible");
  area_result.classList.remove("invisible");
  texto_out.innerHTML = out;
}

function clipboard() {
  const texto_out = document.querySelector("#texto_out");
  navigator.clipboard.writeText(texto_out.value);
}
  
  