import { useRouter } from "next/router";

export const FooterComponent = () => {
  const router = useRouter();

  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-3 col-lg-3">
              <a onClick={() => router.push("/")}>
                <img onDragStart={(e) => e.preventDefault()} src="/logo.png" />
              </a>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3">
              <h4>Produtos</h4>
              <ul>
                <li>
                  <a onClick={() => router.push("/hosting/web")}>
                    Hospedagem de Site
                  </a>
                </li>
                <li>
                  <a onClick={() => router.push("/hosting/mtasa")}>
                    Hospedagem de MTA:SA
                  </a>
                </li>
                <li>
                  <a onClick={() => router.push("/resellers/web")}>
                    Revenda de Hospedagem
                  </a>
                </li>
                <li>
                  <a onClick={() => router.push("/servers/vps")}>
                    Servidores VPS
                  </a>
                </li>
                <li>
                  <a onClick={() => router.push("/servers/dedicated")}>
                    Servidores Dedicados
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3">
              <h4>Suporte</h4>
              <ul>
                <li>
                  <a onClick={() => router.push("/")}>Chat de atendimento</a>
                </li>
                <li>
                  <a onClick={() => router.push("/")}>Base de conhecimento</a>
                </li>
                <li>
                  <a onClick={() => router.push("/")}>Abrir um ticket</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3">
              <h4>Empresa</h4>
              <ul>
                <li>
                  <a onClick={() => router.push("/")}>Status da rede</a>
                </li>
                <li>
                  <a onClick={() => router.push("/")}>Sobre nós</a>
                </li>
                <li>
                  <a onClick={() => router.push("/")}>Blog</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright">
        <p>
          2019 - 2021 © <b>TwinsHost</b> - Todos direitos reservados.
          <span className="credits">
            Developed by{" "}
            <a href="https://moonkode.com" target="_blank">
              Moonkode.
            </a>
          </span>
        </p>
      </div>
    </>
  );
};
