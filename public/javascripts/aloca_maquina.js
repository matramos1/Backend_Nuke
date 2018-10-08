let aloca_maq= function (pc) {

    let txt= '';

    let maquina= {
        setor: "A definir",
        cpu: pc.cpu,
        gpu: pc.gpu,
        ram: pc.ram,
        disco: pc.disco
    };

    let setor3D = {
        cpu: 16,
        gpu: 3,
        ram: 32,
        disco: 480
    };

    let setorDev = {
        cpu: 4,
        gpu: 0,
        ram: 8,
        disco: 120
    };

    let setorAnim = {
        cpu: 8,
        gpu: 2,
        ram: 16,
        disco: 240
    };

    let setorAdm = {
        cpu: 1,
        gpu: 0,
        ram: 4,
        disco: 120
    };

    let setorDesign = {
        cpu: 6,
        gpu: 1,
        ram: 8,
        disco: 240
    };

    let compara = function () {

        if ((maquina.cpu > setor3D.cpu) && (maquina.gpu > setor3D.gpu) && (maquina.ram > setor3D.ram) && (maquina.disco > setor3D.disco)) {
            maquina.setor= "3D";
        } else {
            if ((maquina.cpu > setorAnim.cpu) && (maquina.gpu > setorAnim.gpu) && (maquina.ram > setorAnim.ram) && (maquina.disco > setorAnim.disco)) {
                maquina.setor= "Animação";
            } else {
                if ((maquina.cpu > setorDesign.cpu) && (maquina.gpu > setorDesign.gpu) && (maquina.ram > setorDesign.ram) && (maquina.disco > setorDesign.disco)) {
                    maquina.setor= "Design";
                } else {
                    if ((maquina.cpu > setorDev.cpu) && (maquina.gpu > setorDev.gpu) && (maquina.ram > setorDev.ram) && (maquina.disco > setorDev.disco)) {
                        maquina.setor= "Desenvolvimento";
                    } else {
                        if ((maquina.cpu > setorAdm.cpu) && (maquina.gpu > setorAdm.gpu) && (maquina.ram > setorAdm.ram) && (maquina.disco > setorAdm.disco)) {
                            maquina.setor= "Administração";
                        } else {
                            maquina.setor = "Nenhum";
                        }
                    }

                }

            }

        }

    }

    compara();

    console.log(maquina);

    let insere = require('./insere_dados');
    insere(maquina.setor, maquina.cpu, maquina.gpu, maquina.ram, maquina.disco);



    if (maquina.setor === 'Nenhum'){
        //console.log('Não se adequa a nenhum setor');
        txt = 'Não se adequa a nenhum setor';
    } else {
        //console.log(maquina);
        txt = 'Cadastro efetuado!';
    }

    return txt;

}

module.exports = aloca_maq;