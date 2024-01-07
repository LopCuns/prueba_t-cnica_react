import '../../public/Film.css'

export default function Film ({ title, year, poster }) {
  return (
    <article>
      <h1>{title}</h1>
      <h2>{year}</h2>
      <img src={poster} alt={`Poster of ${title} ${year}`} />
    </article>
  )
}
