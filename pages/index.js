import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home = () => {

  const submitReport = (data) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({})
    };

    fetch('localhost:3000/report', requestOptions)
      .then(response => response.json())
      .then(data => setPostId(data.id));
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Reporter</title>
        <meta name="description" content="Reporter - Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Reporter!
        </h1>
        <div className={styles.grid}>
          <Link href="/submit-report">
            <a className={styles.card}>Submit Report</a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home;
