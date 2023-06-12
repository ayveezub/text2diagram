window.onload = () => {
  const form = document.getElementById('text2diagram__form')
  const imageContainer = document.getElementById('text2diagram__image')

  form.addEventListener('submit', async (event) => {
    event.preventDefault()

    const diagramSource = document.getElementById('text2diagram__source').value
    const diagramType = document.getElementById('text2diagram__diagram-type').value
    const outputFormat = 'png'

    const response = await fetch('https://kroki.io/', {
      method: 'POST',
      body: JSON.stringify({
        diagram_source: diagramSource,
        diagram_type: diagramType,
        output_format: outputFormat,
      }),
    })

    const blob = await response.blob()
    const imageUrl = URL.createObjectURL(blob)

    const image = new Image()
    image.src = imageUrl

    imageContainer.innerHTML = ''
    imageContainer.appendChild(image)
  })
}
