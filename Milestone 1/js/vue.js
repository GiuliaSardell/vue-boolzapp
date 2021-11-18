const app = new Vue({
  el: '#app',
  data:{
      user:{
        name: 'Nome Utente',
        avatar: '_io',
      },
    contacts: [
      {
          name: 'Michele',
          avatar: '_1',
          visible: true,
          messages: [{
              date: '10/01/2020 15:30:55',
              message: 'Hai portato a spasso il cane?',
              status: 'sent'
          },
              {
                  date: '10/01/2020 15:50:00',
                  message: 'Ricordati di dargli da mangiare',
                  status: 'sent'
              },
              {
                  date: '10/01/2020 16:15:22',
                  message: 'Tutto fatto!',
                  status: 'received'
              }
          ],
      },
      {
          name: 'Fabio',
          avatar: '_2',
          visible: true,
          messages: [{
              date: '20/03/2020 16:30:00',
              message: 'Ciao come stai?',
              status: 'sent'
          },
              {
                  date: '20/03/2020 16:30:55',
                  message: 'Bene grazie! Stasera ci vediamo?',
                  status: 'received'
              },
              {
                  date: '20/03/2020 16:35:00',
                  message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                  status: 'sent'
              }
          ],
      },
      {
          name: 'Samuele',
          avatar: '_3',
          visible: true,
          messages: [{
              date: '28/03/2020 10:10:40',
              message: 'La Marianna va in campagna',
              status: 'received'
          },
              {
                  date: '28/03/2020 10:20:10',
                  message: 'Sicuro di non aver sbagliato chat?',
                  status: 'sent'
              },
              {
                  date: '28/03/2020 16:15:22',
                  message: 'Ah scusa!',
                  status: 'received'
              }
          ],
      },
      {
          name: 'Luisa',
          avatar: '_4',
          visible: true,
          messages: [{
              date: '10/01/2020 15:30:55',
              message: 'Lo sai che ha aperto una nuova pizzeria?',
              status: 'sent'
          },
              {
                  date: '10/01/2020 15:50:00',
                  message: 'Si, ma preferirei andare al cinema',
                  status: 'received'
              }
          ],
      },
  ],

  choosenChat:0,
  index:0,
  newMessage: '',
  boot : false,
  newChat: '',

  },

  mounted(){
    console.log('last message',this.contacts[this.choosenChat].messages[this.contacts[this.choosenChat].messages.length - 1].message),

    console.log('array messages', this.contacts[0].messages)

    console.log('last date',this.contacts[this.choosenChat].messages[this.contacts[this.choosenChat].messages.length - 1].date);

    
  },

  methods:{
  
   getLastMessage(index){

       // inizializzo l'ultimo messaggio di ogni conversazione
       let lastMessage = this.contacts[index].messages[this.contacts[index].messages.length - 1].message;

       // se il messaggio è più lungo di 30 caratteri visualizza '...'
       if (lastMessage.length > 30){
           lastMessage = lastMessage.slice(0,30) +'...'
       }

       return lastMessage;

   },

   getLastDate(index){
      // inizializzo la data dell'ultimo messaggio di ogni conversazione
      let lastDate = this.contacts[index].messages[this.contacts[index].messages.length - 1].date;
      return lastDate;
   },
 

   addMessage(index){
       // stampo il nuovo messaggio solo se digito più di un carattere escluso lo spazio
       if(this.newMessage.length > 0 && this.newMessage != ' '){
            this.contacts[index].messages.push({
                date: this.newDate(),
                message: this.newMessage,
                status: 'sent'
            }),

        // cancello i caratteri nella barra di input una volta inviati
        this.newMessage = '';

        // se il nuovo messaggio viene stampato la variabile boot (inizializzata nei data come false) diventa true
        boot = true;

        //se la variabile boot = true genero un messaggio automatico di risposta dopo 1 secondo con setTimeOut e lo pusho dentro l'array message di ogni elemento
        if(boot = true){
            setTimeout( () => {

            const newBootMessage = {
                date: this.newDate(),
                message: 'Ok',
                status: 'received'
            };

           this.contacts[index].messages.push(newBootMessage);

        }, 1000);

       };
    
    }

   
   }, 

    // genero la data di oggi
    newDate(){
        let today = new Date();
        let dd = String(today.getDate());
        let mm = String(today.getMonth() + 1); //perchè parte da 0
        let yyyy = today.getFullYear();

        let ora = today.getHours();
        let minuti= today.getMinutes();
        let secondi= today.getSeconds();

        if(minuti < 10) minuti = "0"+minuti;
        if(secondi < 10) secondi = "0"+secondi;
        if(ora <10) ora = "0"+ora;    

        

        return today = dd + '/' + mm + '/' + yyyy +' '+ora +':'+ minuti +':'+secondi;
    },

   
    //mostro solo gli elementi con nel nome le lettere che digito nell'input
    showElement(){
        // faccio un ciclo per prendere i nomi di ogni contatto
        for(let contact of this.contacts){
            let nome= contact.name; 
            let visible= contact.visible;

            if((nome).toUpperCase().includes((this.newChat).toUpperCase())){
                contact.visible = true;

            }else{
                contact.visible = false;
            }


            console.log('visible',visible)
            console.log('name',nome)
            console.log(this.newChat)
            
        }

    }
        

   
  }



})



// dayjs.extend(window.dayjs_plugin_customParseFormat)
// let time = dayjs().format('DD/MM/YYYY HH:mm:ss')

// console.log(time)