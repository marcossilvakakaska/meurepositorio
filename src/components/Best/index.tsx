import { useRouter } from "next/router";

export const BestComponent = () => {
  const router = useRouter();

  return (
    <>
      <div className="best">
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4">
            <h2>
              Teste gratuitamente uma de nossos planos <br />
              de Hospedagens
            </h2>
          </div>
          <div className="col-sm-12 col-md-8 col-lg-8 mt-2">
            <p>
              Ganhe até 3 dias gratuitamente de um de nossos planos hospedagens
              disponíveis em nosso site, abra um ticket em nossa Área do Cliente
              e diga a nós quantos dias gratuitos você deseja é informe a razão
              ao qual você que testar a Hospedagem.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
