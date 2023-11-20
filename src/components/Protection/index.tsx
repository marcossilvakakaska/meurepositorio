export const ProtectionComponent = () => {
  return (
    <>
      <div className="protection">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <img
              onDragStart={(e) => e.preventDefault()}
              src="/protection.svg"
              className="img-fluid"
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <h3>Proteção</h3>
            <p>
              Temos uma das melhores proteções do mercado brasileiro, chegando a
              ter capacidade de mitigar ataques de até 1Tbps em menos de 60
              segundos. Nossa proteção consegue checar qualquer tipo de ataque
              contra o seu projeto rapidamente para que ele seja mitigado e o
              tráfego fique limpo em poucos segundos. Conseguimos bloquear
              ataques como Layer 4 e Layer 7* com base TCP (SYN, ACK, HTTP) que
              utilizam falhas de aplicações e vunerabilidades para passar pelo
              Firewall e chegar até o servidor, causando o esgotamento de
              recursos ou rede. Nossa rede é protegida internamente e
              externamente, localizados em um dos maiores datacenters da América
              do Norte, nossa proteção vai muito além do virtual.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
