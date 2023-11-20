import { useRouter } from "next/router";

import { FaServer } from "react-icons/fa";
import { FaEthereum } from "react-icons/fa";

export const BannerComponent = () => {
  const router = useRouter();

  return (
    <>
      <div className="banner">
        <h6>Bem-vindo!</h6>
        <h2>Melhores hospedagens e servidores do Brasil.</h2>
        <p>
          Adquira um de nosso serviços e alavanque a velocidade de seu negócio.
        </p>
        <button
          onClick={() =>
            router.push("https://twinshost.com.br/client/register.php")
          }
        >
          <FaEthereum /> Começe agora
        </button>
        <FaServer />
      </div>
    </>
  );
};
