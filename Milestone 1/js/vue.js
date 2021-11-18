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
//   selectChat:false,
  index:0,
  newMessage: '',
  boot : false,
  newChat: '',
  allName:[],
  

    
  
    
  },

  mounted(){
    console.log('last message',this.contacts[this.choosenChat].messages[this.contacts[this.choosenChat].messages.length - 1].message),

    console.log('array messages', this.contacts[0].messages)
    // [this.contacts[this.choosenChat].messages.length - 1].message

    console.log('last date',this.contacts[this.choosenChat].messages[this.contacts[this.choosenChat].messages.length - 1].date);

    // console.log('array nomi',this.contact[0].name)
    
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
   },
 

   addMessage(index){
       if(this.newMessage.length > 0 && this.newMessage != ' '){
           this.contacts[index].messages.push({
        date: this.newDate(),
        message: this.newMessage,
        status: 'sent'
    }),
    this.newMessage = '';
    boot = true

    if(boot = true){
        setTimeout( () => {

           const newBootMessage = {
              date: this.newDate(),
              message: 'Ok',
              status: 'received'
           };

           this.contacts[index].messages.push(newBootMessage);

        }, 1000);
       }
    
    }

   
   }, 


    newDate(){
        let today = new Date();
        let dd = String(today.getDate())
        let mm = String(today.getMonth() + 1)
        let yyyy = today.getFullYear();

        let ora = today.getHours();
        let minuti= today.getMinutes();
        let secondi= today.getSeconds();

        if(minuti < 10) minuti="0"+minuti;
        if(secondi < 10) secondi="0"+secondi;
        if(ora <10) ora="0"+ora;    

        

        return today = mm + '/' + dd + '/' + yyyy +' '+ora +':'+ minuti +':'+secondi;
    },

    // showElement(el,array,myVar){
    //     if(array.includes(el)){
    //         myVar=true
    //     }else{
    //         myVar=false
    //     }
    // }

   

    showElement(index){

        this.contacts.forEach(function (contatto) {
            let nameChat = contatto.name;
            console.log(nameChat);











            
         })
        
        if((this.contacts[index].name).toUpperCase().includes((this.newChat).toUpperCase())){
            this.contacts[index].visible = true;
        }else{
            this.contacts[index].visible = false;
        }

        console.log('visible',this.contacts[index].visible)
        console.log('name',this.contacts[index].name)
        console.log(this.newChat)

    }
        
   
  }



})