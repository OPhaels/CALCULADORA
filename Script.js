   <script>
        function insert(num) /*função da inserção dos números*/ {
            var numero = document.getElementById('resultado').innerHTML;
            document.getElementById('resultado').innerHTML = numero + num;
        }

        function clean() /*função de limpar a caixa de resultado*/ {
            document.getElementById('resultado').innerHTML = "";
        }

        function back() /*função de voltar*/ {
            var resultado = document.getElementById('resultado').innerHTML;
            document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1)
        }

        function calcular() {
            var resultado = document.getElementById('resultado').innerHTML;
            if (resultado) {
                document.getElementById('resultado').innerHTML = eval(resultado)
            }
        }
    </script>
