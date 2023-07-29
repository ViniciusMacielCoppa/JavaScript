    
    // Agradecimentos ao Floricultor por ajudar na estruturação do código e ensinamentos
    

    let userNick = document.querySelector("#userName");
    let userFace = document.querySelector("#rostoCareta");
    let userSize = document.querySelector("#tamanhoSize");
    let userHead = document.querySelector("#cabecaSo");
    let ImgAvatar = document.querySelector("#imagemAvatar");
    let LinkAvatar = document.querySelector("#linkAvatar");

    window.addEventListener("load", atualizarAvatar);
    userNick.addEventListener("input", atualizarAvatar);
    userFace.addEventListener("click", atualizarAvatar);
    userSize.addEventListener("click", atualizarAvatar);
    userHead.addEventListener("click", atualizarAvatar);

    const Obtervalores = () => {
        return{
            nick: userNick.value,
            rosto: userFace.value,
            tamanho: userSize.value,
            cabeca: userHead.value,
        }
    }

    let DirecaoCabeca = 4;
    
    const atualizarCabeca = {
        Direita() {
            if(DirecaoCabeca <= 0){
                DirecaoCabeca = 7;
            }else{
                DirecaoCabeca--;
            }
            atualizarAvatar();
        },
        Esquerda() {
            if(DirecaoCabeca >= 7){
                DirecaoCabeca = 0;
            }else{
                DirecaoCabeca++;
            }  
            atualizarAvatar();
        },
        EventoClick() {
            document.querySelector("#btn-direita1").addEventListener("click", this.Direita);
            document.querySelector("#btn-esquerda1").addEventListener("click", this.Esquerda);
        }
    }

    atualizarCabeca.EventoClick();

    let DirecaoCorpo = 4;

    const atualizarCorpo = {
        Direita() {
            if(DirecaoCorpo <= 0){
                DirecaoCorpo = 7;
            }else{
                DirecaoCorpo--;
            }
            atualizarAvatar();
        },
        Esquerda() {
            if(DirecaoCorpo >= 7){
                DirecaoCabeca = 0;
            }else{
                DirecaoCorpo++;
            }  
            atualizarAvatar();
        },
        EventoClick() {
            document.querySelector("#btn-direita2").addEventListener("click", this.Direita);
            document.querySelector("#btn-esquerda2").addEventListener("click", this.Esquerda);
        }
    }

    atualizarCorpo.EventoClick();

    function atualizarAvatar() {
        const {nick, rosto, tamanho, cabeca} = Obtervalores();

        if(cabeca == "cabecaSim"){
            ImgAvatar.src = `https://habblive.in/imager.php?user=${nick}&action=wav&size=${tamanho}&head_direction=${DirecaoCabeca}&direction=${DirecaoCorpo}&gesture=${rosto}&headonly=1`
            LinkAvatar.href = `https://habblive.in/imager.php?user=${nick}&action=wav&size=${tamanho}&head_direction=${DirecaoCabeca}&direction=${DirecaoCorpo}&gesture=${rosto}&headonly=1`
            return;
        }
        ImgAvatar.src = `https://habblive.in/imager.php?user=${nick}&action=wav&size=${tamanho}&head_direction=${DirecaoCabeca}&direction=${DirecaoCorpo}&gesture=${rosto}`
        LinkAvatar.href = `https://habblive.in/imager.php?user=${nick}&action=wav&size=${tamanho}&head_direction=${DirecaoCabeca}&direction=${DirecaoCorpo}&gesture=${rosto}`
    }
