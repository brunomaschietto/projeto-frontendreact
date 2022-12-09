import React from "react";
import iconeInsta from "../Fotos/iconeInsta.svg";
import iconeGit from "../Fotos/iconeGit.svg";
import iconeLinkedIn from "../Fotos/iconeLinkedIn.svg";
import { DivPai } from "./styles";

export default function Footer() {
  return (
    <DivPai>
      <p>Projeto criado por Bruno Maschietto</p>
      <div>
        <a href="https://www.instagram.com/brunomaschietto/" target="_blank">
          <img src={iconeInsta} />
        </a>
        <a href="https://github.com/brunomaschietto" target="_blank">
          <img src={iconeGit} />
        </a>
        <a href="https://www.linkedin.com/in/bruno-maschietto/" target="_blank">
          <img src={iconeLinkedIn} />
        </a>
      </div>
    </DivPai>
  );
}
