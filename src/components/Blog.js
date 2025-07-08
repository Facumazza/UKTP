import React from 'react';

const posts = [
  {
    title: 'Primer Post',
    image: 'https://source.unsplash.com/random/400x200?tech',
    text: 'Este es el primer post del blog. Aquí puedes compartir novedades, tutoriales y mucho más.',
  },
  {
    title: 'Segundo Post',
    image: 'https://source.unsplash.com/random/400x200?web',
    text: 'Comparte tus experiencias y conocimientos sobre desarrollo web y diseño responsivo.',
  },
  {
    title: 'Tercer Post',
    image: 'https://source.unsplash.com/random/400x200?mobile',
    text: 'Descubre las mejores prácticas para crear aplicaciones multiplataforma modernas.',
  },
];

function Blog() {
  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Blog</h2>
      <div className="row">
        {posts.map((post, idx) => (
          <div className="col-md-4 mb-4" key={idx}>
            <div className="card h-100 shadow-sm">
              <img src={post.image} className="card-img-top" alt={post.title} />
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog; 