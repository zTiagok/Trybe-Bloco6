// EXERCÍCIO
// 1 - Adicione um evento click no elemento a que possui o id href. Na função do evento, implemente o método .preventDefault() para previnir o comportamento padrão do elemento. Ou seja, ao clicar no link, nada deve acontecer.
// 2 - Adicione um evento click no elemento checkbox que possui o id input-checkbox . Na função do evento, implemente o método .preventDefault() para previnir o comportamento padrão do elemento. Ou seja, ao clicar na caixinha, nada deve acontecer.
// 3 - Adicione um evento keypress no elemento input type="text" que possui o id input-text . Na função do evento, implemente o método .preventDefault() de forma que somente o caractere a (letra 'a' minúscula) possa ser digitado na caixinha. ( dica: para capturar a tecla digitada, utilize o event.key )



// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function hrefPreventDefault(origin)
{

  origin.preventDefault()
}

function checkboxPreventDefault(origin)
{

  origin.preventDefault()
}

function inputPreventDefault(origin)
{

  if (origin.key !== 'a')
  {

    origin.preventDefault()
  }
  // let lower = origin.charCode

  // if (lower != 0)
  // {
  //   if (lower < 97 || lower > 122)
  //   {

  //     origin.preventDefault()
  //   }
  // }
}

HREF_LINK.addEventListener('click', hrefPreventDefault)
INPUT_CHECKBOX.addEventListener('click', checkboxPreventDefault)
INPUT_TEXT.addEventListener('keypress', inputPreventDefault)