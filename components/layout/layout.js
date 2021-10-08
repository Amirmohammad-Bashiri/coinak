import Head from "next/head";

import Navbar from "../navbar/navbar";

function layout({ children }) {
  return (
    <div>
      <Head>
        <title>Coinak | Get Latest Crypto Info</title>
      </Head>
      <Navbar />
      {children}
    </div>
  );
}

export default layout;
