import Head from "next/head";

function layout({ children }) {
  return (
    <div>
      <Head>
        <title>Coinak | Get Latest Crypto Info</title>
      </Head>
      {children}
    </div>
  );
}

export default layout;
