export default (id, e) => {
  if (e) {
    e.preventDefault()
  }
  const el = document.getElementById(id)
  const y = el.getBoundingClientRect().top + window.scrollY
  window.scrollTo({
    top: y,
    behavior: 'smooth'
  })
}
