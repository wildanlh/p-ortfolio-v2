import Head from "next/head";

interface titleProps {
  pageTitle: string;
}

export default function Header({ pageTitle }: titleProps) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="Wildan's Portfolio" />
        <meta name="keywords" content="Portfolio" />
        <meta name="author" content="Wildan Luqmanul Hakim" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
}
