function Page({ data }) {
  // Render data ...
}

// This gets called on every request
export async function getServerSideProps({ req, res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  return {
    props: {},
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: {} }
    ],
    fallback: true
  }
}

export default Page