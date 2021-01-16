const figure = document.getElementById("figure")

figure.onmouseover = function (){
  figure.classList.remove('squqred')
  figure.classList.add('rounded')
}

figure.onmouseout = function (){
  figure.classList.remove('rounded')
  figure.classList.add('squared')
}