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
  // counter: 0,
  choosenChat:0,
  selectChat:false,
  index:0
    
  
    
  },

  mounted(){
    console.log('last message',this.contacts[this.choosenChat].messages[this.contacts[this.choosenChat].messages.length - 1].message),
    // [this.contacts[this.choosenChat].messages.length - 1].message

    console.log('last date',this.contacts[this.choosenChat].messages[this.contacts[this.choosenChat].messages.length - 1].date);
  },

  methods:{
   
   getLastMessage(index){
       let lastMessage = this.contacts[index].messages[this.contacts[index].messages.length - 1].message;

       if (lastMessage.length > 30){
           lastMessage = lastMessage.slice(0,30) +'...'
       }

       return lastMessage

   },

   getLastDate(index){
      let lastDate = this.contacts[index].messages[this.contacts[index].messages.length - 1].date;
      return lastDate

   }
  }
  


})