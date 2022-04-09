const Example = () => (
  <>
    <h2>Título</h2>

    <div className="ofertas">

      <div className="uno">
        <i className="fab fa-wpforms fa-4x" style={{ marginLeft: '85px', paddingTop: '-10px' }} />
        <p style={{ fontSize: '18px' }}> Texto1</p>
      </div>
      <div className="dos">
        <i
          className="far fa-paper-plane fa-4x"
          style={{ marginLeft: '85px', paddingTop: '-10px' }}
        />
        <p
          style={{ fontSize: '18px' }}
        >
          Texto2.
        </p>

      </div>

      <div className="tres">
        <i
          className="fas fa-phone-volume fa-4x"
          style={{ marginLeft: '90px', paddingTop: '-10px' }}
        />
        <p style={{ fontSize: '18px' }}> texto3 </p>
      </div>

      {/* <div class="boton"><a href="#formulario" class="btnblanco">
      ¡Quiero mi oferta!</a></div> */}
    </div>
  </>
);

export default Example;
