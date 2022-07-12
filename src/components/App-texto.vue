<template>

  <section class="src-components-app-texto">
    <div>
      <h2>Primera Parte</h2>
      <label for="color">Color</label>
      <input type="text" name="color" id="" v-model="colorIngresado">
      <label for="fondo">Fondo</label>
      <input type="text" name="fondo" id="" v-model="colorFondoIngresado">
      <label for="size">Size</label>
      <input type="text" name="size" v-model="tamanioIngresado" id="">
    </div>
    <div>
      <span>Texto:</span>
      <input type="text" v-cambioColor="this.colorIngresado" v-cambioColorFondo="this.colorFondoIngresado" v-tamanio="this.tamanioIngresado" v-model="textoIngresado">
    </div>
    <div>
      <p name="cantidad">Cantidad de palabras: {{calcularPalabras}}</p>
    </div>
    <div id="centrado">
      <h2>Segunda Parte</h2>
      <table>
      <tr>
        <th>Numero de pregunta</th>
        <th>Respuesta</th>
      </tr>
      <tr>
        <td>1</td>
        <td>B</td>
      </tr>
       <tr>
        <td>2</td>
        <td>C</td>
      </tr>
       <tr>
        <td>3</td>
        <td>B</td>
      </tr>
       <tr>
        <td>4</td>
        <td>D</td>
      </tr>
       <tr>
        <td>5</td>
        <td>D</td>
      </tr>
    </table>
    </div>
  </section>

</template>

<script>

  export default  {
    name: 'src-components-app-texto',
    props: [],
    mounted () {

    },
    data () {
      return {
        textoIngresado: '',
        colorIngresado: '',
        colorFondoIngresado: '',
        tamanioIngresado: ''
      }
    },
    methods: {

    },
    computed: {
      calcularPalabras() {
        let array = Array.from(this.textoIngresado.trim())
        let contador = 0
        for (let i = 0 ; i < array.length ; i++) {
          if (array[i] == ' ') {
            if (contador == 0) {
              contador = 2
            } else {
              contador = contador + 1
            }
          }
        }
        return contador
      }
    }
}


</script>

<style scoped lang="css">
  .src-components-app-texto {

  }

 table {
    margin: 0 auto; /* or margin: 0 auto 0 auto */
  }
</style>
