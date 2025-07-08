import React from 'react';
import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-light">
      <h1 className="mb-4">¡Bienvenido al Blog Multiplataforma!</h1>
      <p className="mb-4">Explora artículos interesantes y aprende más sobre tecnología, diseño y desarrollo web.</p>
      <Link to="/blog" className="btn btn-primary btn-lg">Ingresar al Blog</Link>
    </div>
  );
}

export default Welcome; 