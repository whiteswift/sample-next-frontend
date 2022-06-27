import Head from 'next/head'
import styles from '../../styles/Home.module.css'

const SubmitReportPage = () => {
  const handleSubmit = async (event) => {
    event.preventDefault()

    const data = {
      metric_id: event.target.metric_id.value,
      type: event.target.type.value,
      description: event.target.description.value,
      value: event.target.value.value,
    }

    const JSONdata = JSON.stringify(data)
    // TODO put this in ENVs file
    const endpoint = 'http://localhost:3000/report'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    }

    const response = await fetch(endpoint, options)
    const result = await response.status;

    // TODO surface an informative message to the user
    console.log({ result });
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Submit Report</title>
        <meta name="description" content="Reporter - Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Submit Report
        </h1>
        <div className={styles.grid}>
          <form onSubmit={handleSubmit}>
            <label htmlFor="metric_id">metric_id</label>
            <input type="text" id="metric_id" name="metric_id" required />
            <label htmlFor="type">type</label>

            {/* TODO need more validation for this client and server side to enforce this */}
            {/* storing type as text was a workaround for perf and complexity reasons */}
            <select id="type" name='type' required>
              <option value='text'>text</option>
              <option value='boolean'>boolean</option>
            </select>

            <label htmlFor="description">description</label>
            <input type="text" id="description" name="description" required />
            <label htmlFor="value">value</label>
            <input type="text" id="value" name="value" required />
            <button type="submit">Submit</button>
          </form>
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default SubmitReportPage;
