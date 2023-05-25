var cronometro = (function (){
    let temporizador = document.getElementById("temporizador")
    let btnIniciar = document.getElementById("btnIniciar")
    let btnPausar = document.getElementById("btnPausar")
    let btnZerar = document.getElementById("btnZerar")

    btnIniciar.addEventListener('click', (e) => {
        e.preventDefault()
        Iniciar()
    })
    btnPausar.addEventListener('click', (e) => {
        e.preventDefault()
        parar()
    })
    btnZerar.addEventListener('click', (e) => {
        e.preventDefault()
        parar()
        ss = 0
        mm = 0
        hh = 0
        atualizarTempo()
    })

    let ss = 0
    let mm = 0
    let hh = 0
    let cron
    function Iniciar(){
        cron = setInterval(() => {
            timer()
        }, 1000)
    }
    function parar(){
        clearInterval(cron)
    }
    function timer(){
        ss++
        if(ss == 60){
            mm++
            ss = 0
        }
        else if (mm == 60){
            hh++
            mm = 0
        }
        atualizarTempo()
    }
    function retornarTempoAtualizado(){
        var segundos = (ss < 10 ) ? "0" + ss : ss
        var minutos = (mm < 10 ) ? "0" + mm : mm
        var horas = (hh < 10 ) ? "0" + hh : hh

        return `${horas}:${minutos}:${segundos}`
    }
    function atualizarTempo(){
        temporizador.textContent = retornarTempoAtualizado()
    }

})()



