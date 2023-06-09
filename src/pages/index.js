import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";
import Footer from "../components/Footer";

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      {/* Header */}
      <Header />

      <div className="bg-gray-100">
        <main className="max-w-screen-2xl mx-auto">
          {/* Banner  */}
          <Banner />

          {/* ProductFeed  */}
          <ProductFeed products={products} />

        </main>
      </div>

      {/* Footer  */}
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return { 
    props: {
      products,
    }, 
  };
}