import { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Simple Landing Page</title>
        <meta name='description' content='A simple landing page with navigation and search.' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <nav className={styles.navbar}>
        <ul>
          <li><a href='#home'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
      </nav>

      <main className={styles.main}>
        <div className={styles.searchContainer}>
          <input type='text' placeholder='Search...' className={styles.searchInput} style={{ borderRadius: '15px' }} />
        </div>
      </main>

      <footer className={styles.footer}>
        Powered by <a href='https://vercel.com' target='_blank' rel='noopener noreferrer'>Vercel</a>
      </footer>
    </div>
  );
}