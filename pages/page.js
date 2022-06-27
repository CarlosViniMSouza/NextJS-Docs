function Page({ data }) {
  // Render data ...
}

// This gets called on every request
export async function getServerSideProps() {

  // Fetch data from external API
  const res = await fetch(`https://localhost:3000/data`)
  const data = await res.json()

  return { props: { data } }
}

export default Page