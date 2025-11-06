import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
        crossOrigin="anonymous"
      />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Alameda Web Design",
  keywords: [
    "Alameda web design",
    "web design Alameda",
    "Alameda web design company",
    "web design Alameda ca",
    "Alameda website design",
    "Alameda web designer",
    "Alameda web development",
    "Alameda web designers",
    "Alameda website designer",
    "san leandro web design",
    "Alameda wordpress web design",
    "Alameda web design firm",
    "sf Alameda web design",
    "accessibility",
    "accessible websites",
    "inclusive website designer",
    "inclusive web design",
    "inclusive web design Alameda",
    "custom WordPress",
    "UI UX design",
    "SEO",
    "API integrations",
    "payment processing",
  ],
  description:
    "Alameda Web Design is a web design agency located in the Alameda California. We build custom websites from scratch with a focus on performance, design, and user experience UI/UX. We helped hundreds of clients all over the world reach their goal of having the best quality website for their business.",
};

export default Meta;
