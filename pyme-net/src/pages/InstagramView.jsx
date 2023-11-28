import React from 'react';

export const InstagramView = () =>{
    const iframeStyle = {
        width: '100%',
        height: `calc(100vh - 20px)`, // Resta 20px para tener en cuenta posibles barras de desplazamiento
        border: 'none',
        overflow: 'hidden',
    };
    return (
        <div className="instagram-profile">
            <iframe
                src="https://www.instagram.com/usuario/embed/"
                title="Perfil de Instagram"
                frameBorder="0"
                scrolling="no"
                allowtransparency="true"
                style={iframeStyle}
            ></iframe>
        </div>
    );

}
export default InstagramView;

