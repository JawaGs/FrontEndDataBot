Vue.component( 'chat', {
    template: `
        <div class="chat-container">
                
            <div class="chat-header">
                <img src="assets/pp@2x.png" alt="logo" class="logo">
                <div class="titulo">Julieta</div>
                <img src="./assets/Sin título-1@2x.png" alt="close-button" class="close-button">
            </div>

            <div class="chat-body">
                <ul>
                    <li :class="{ message2: ! ( message.messageId%2===0 ) }" v-for="message in messages">
                        <span class="message-label">
                            {{ message.messenger }}
                        </span>
                        <p>
                            {{ message.message }}
                        </p>
                    </li>
                </ul>
            </div>
            
            <span class="chat-label">Usamos Databot.cl</span>
            <div class="chat-footer">
                <input type="text" placeholder="Escribe un mensaje">
                <button><img src="./assets/81799blanco@2x.png" alt="enviar"></button>
            </div>
        </div>
    `,
    data(){
        return{
            messages:[
                {
                    messageId:0,
                    messenger: 'Julia',
                    message: 'Bienvenido a Databot, estoy disponible, cuéntame en que puedo ayudarte?'
                },
                {
                    messageId:1,
                    messenger: 'Tu',
                    message: 'Hola Julia, quiero cotizar un chatbot personalizado'
                },
                {
                    messageId:2,
                    messenger: 'Julia',
                    message: 'Bienvenido a Databot, estoy disponible, cuéntame en que puedo ayudarte?'
                }
            ]
        }
    }
} )

let app = new Vue({
    el:'#app'
})
