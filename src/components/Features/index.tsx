import { FaStar, FaShieldAlt, FaFingerprint, FaHeadset } from "react-icons/fa";

export const FeatureComponent = () => {
  return (
    <>
      <div className="features">
        <div className="row">
          <div className="col-sm-12 col-md-3 col-lg-3 mb-3">
            <div className="feature">
              <FaStar />
              <h4>Qualidade</h4>
              <p>
                A nossa prioridade é oferecer a qualidade que todos os clientes
                precisam para manter seu negócio livre de lentidão.
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-3 col-lg-3 mb-3">
            <div className="feature">
              <FaFingerprint />
              <h4>Segurança</h4>
              <p>
                Temos uma segurança de ponta para evitar que seus dados sejam
                vazados, conosco seus dados estão seguros.
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-3 col-lg-3 mb-3">
            <div className="feature">
              <FaHeadset />
              <h4>Suporte</h4>
              <p>
                Nossa equipe especializada está sempre disponível para retirar
                suas dúvidas e te ajudar nas suas dificuldades.
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-3 col-lg-3 ">
            <div className="feature">
              <FaShieldAlt />
              <h4>Proteção</h4>
              <p>
                Temos uma das melhores proteções do brasil, temos capacidade de
                mitigar ataques de até 1Tbps em 60 segundos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
