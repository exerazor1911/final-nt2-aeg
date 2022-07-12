import Vue from 'vue'

Vue.directive('cambioColor', function(el,binding) {

    el.style.color = binding.value
})

Vue.directive('cambioColorFondo', function(el,binding) {

    el.style.backgroundColor = binding.value
})

Vue.directive('tamanio', function(el,binding) {

    el.style.fontSize = binding.value
})