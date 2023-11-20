import Head from "next/head";

import { RiErrorWarningLine } from "react-icons/ri";

function Error({ statusCode }) {
  return (
    <>
      <Head>
        <title>TwinsHost — Um problema ocorreu</title>
      </Head>
      <div className="error">
        <div className="status">
          <RiErrorWarningLine />
          <h2>Erro {statusCode}</h2>
          <p>
            {statusCode
              ? `Ocorreu um erro ${statusCode} no servidor.`
              : "Ocorreu um erro no cliente"}
          </p>
        </div>
      </div>
    </>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
