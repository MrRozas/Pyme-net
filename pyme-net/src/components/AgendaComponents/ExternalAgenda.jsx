import React from "react";

const ExternalAgenda = () => { /* Componente de la agenda externa */
    return (
        <iframe /* Iframe donde se obtiene la agenda externa */
            src="https://communitybs7.site.agendapro.com/cl/sucursal/87421" /* Link de la agenda externa */
            title="AgendaPro"  /* Titulo de la agenda externa */
            width="100%" height="1300px"  /* Tamaño de la agenda externa */
            style={{marginTop: '7rem'}}/> /* Estilo de la agenda externa */
    )
}

export default ExternalAgenda;