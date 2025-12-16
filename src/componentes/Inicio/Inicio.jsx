import './Inicio.css'
import BotonesInicio from '../BotonesInicio/BotonesInicio'

const Inicio = () => {
  return (
    <div>
      <p className="intro">
        En Dermofit nos especializamos en ofrecer soluciones integrales para el cuidado de la piel, combinando tecnología, cosmética profesional y un enfoque personalizado en cada tratamiento. Nuestro objetivo es brindar una experiencia de bienestar confiable, segura y accesible, respaldada por profesionales capacitados y productos seleccionados por su calidad y eficacia.
      </p>
      <br></br>
      <p className="intro2">
        Trabajamos para que cada persona encuentre el equilibrio entre estética y salud, ofreciendo tratamientos orientados a realzar la belleza natural y rutinas de skincare diseñadas para potenciar resultados en casa. En cada visita priorizamos la atención personalizada, la transparencia en los procesos y la búsqueda constante de mejoras que garanticen una experiencia de alto nivel.
      </p>
      <br></br>
      <p className="cierre">
        En Dermofit, tu piel es nuestra prioridad. Te acompañamos a descubrir lo mejor de vos con soluciones reales, modernas y pensadas para tu bienestar.
      </p>
      <div className="banner-container">
        <video
          src='/Servicios.mp4'
          autoPlay
          loop
          muted
          playsInline
          className="banner-video"
        />

      </div>

      <BotonesInicio />
    </div>
  )
}

export default Inicio