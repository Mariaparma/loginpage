"use client"

import styles from "../../styles/Conteudo.module.css";
import { useState } from "react";


export default function Conteudo() {

    return (
        <div className={styles.container}>
            <div className={styles.conteudo}>
                <h3>Welcome to My Profile</h3>
                <h4>I am Maria Eduarda Parma</h4>
                <img src="/foto.png" alt="Foto"></img>
                    
            </div>
            <div className={styles.sobremim}>
                <h1>Sobre mim</h1>
                <p>Me chamo Maria Eduarda Parma, tenho 17 anos e hoje estou estudando na Rede Sesi e Senai em Valinhos - SP. NA rede Sesi estou no 3° ano do Ensino Médio, no meu último ano. Na Rede Senai estou no técnino de Desenvolvimento de Sistemas.</p>
            </div>
                <div className={styles.gostos}>
                <h1>Gostos</h1>
                <p> Eu gosto de sair com as minhas amigas, com a minha familia, ir para shows, escutar musicas, viajar para lugares novos e sempre dispostas a ter gostos novos</p>
                </div>
            <div className={styles.footer}>
                <h4>© 2025 Option Monster By Maria Eduarda Parma</h4>
            </div>
            <div className={styles.info}>
                <p>Thank you for visiting My Profile <a href="/signin">To go back</a></p>
            </div>
        </div>
    );
}