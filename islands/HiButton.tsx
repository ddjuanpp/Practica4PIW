import { IS_BROWSER } from "$fresh/runtime.ts";
import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";
import { useState } from "preact/hooks";

const HiButton: FunctionComponent<
  { type?: string; children?: any }
> = (
  { type, children },
) => {

  const [saludo, setSaludo] = useState("");
  const audio = IS_BROWSER ? new Audio("./hihihi.mp3") : null;

  const handleClick = (e) => {
    e.preventDefault();
    const nombre = e.target.form.elements.nombre.value + " " + e.target.form.elements.apellido.value;
    setSaludo(nombre);
    if (audio && audio.paused) {
      audio.play();
    } else if (audio) {
      audio.pause();
    }
  }

  return (
    <>
    <button
      class="trippyBackgroundAnimated"
      type={type}
      onClick={handleClick}>
      {children}
    </button>
    <p>{saludo}</p>
    </>
  );
};

export default HiButton;