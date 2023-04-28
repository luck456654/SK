<template>
    <div>
      <div class="wrapper">
        <div v-for="(item, index) in user"
                  :key="index" class="mark" @click="changeMark" :id="item">        
                 {{ item }}
       </div>
       <div v-for="(item, index) in arr"
                  :key="index" class="mark" @click="changeMark" :id="item">        
        {{ item }}
       </div>
    </div>
     
    <table class="table">
        <tbody>
            <tr><th colspan="5" style="background-color: #bdd0d0!important;">Резерв неоплаченных остатков держится 14 календарных дней</th></tr>
            <tr style="background-color: #bdd0d0!important;"><th>Чертежи необходимо обязательно согласовать с Пашей</th><th colspan="4">проведена инвентаризация 25.01.2023г</th></tr>
            <tr style="background-color: #bdd0d0!important;"><th>Пистолет записывается с нижнего угла по часовой стрелке</th><th>Менеджер</th><th>Дата</th><th>Статус</th><th>Комментарий</th></tr>
            <tr style="background-color: #bdd0d0!important;"><th>Цвет</th><th>Размер</th><th colspan="3">Внутр. обозначение</th></tr>
          
             <tr v-for="(item, index) in getell"  
                  :key="index" :class = "(index % 2 != 0)?'bgcolor':'bgc'">
                  <td class="value wrapp"   v-if="item.id==activeMark"><input :placeholder="item.name" v-model="item.name" class="input inputs"/><input type="button" value="🗑" :id="index" class="btn btninput" @click="delbd(item.idx)"/></td>
                  <td class="value"  v-if="item.id==activeMark"><input :placeholder="item.nameMen" v-model="item.nameMen" class="input inputs"/></td>
                  <td class="value"  v-if="item.id==activeMark"><input :placeholder="item.data" v-model="item.data" class="input inputs"/></td>
                  <td  class="value" v-if="item.id==activeMark"><input :placeholder="item.statusEls" v-model="item.statusEls" class="input inputs"/></td>
                  <td class="value"  v-if="item.id==activeMark"><input :placeholder="item.comments" v-model="item.comments" class="input inputs"/></td>
                
                </tr>
  
            <tr v-for="(item, index) in arrElls"  
                  :key="index">
                  <td class="value wrapp"  v-if="item.id==activeMark"><input :placeholder="item.name" v-model="item.name" class="input"/></td>
                  <td class="value"  v-if="item.id==activeMark"><input :placeholder="item.nameMen" v-model="item.nameMen" class="input"/></td>
                  <td class="value"  v-if="item.id==activeMark"><input :placeholder="item.data" v-model="item.data" class="input"/></td>
                  <td  class="value" v-if="item.id==activeMark"><input :placeholder="item.statusEls" v-model="item.statusEls" class="input"/></td>
                  <td class="value"  v-if="item.id==activeMark"><input :placeholder="item.comments" v-model="item.comments" class="input"/></td>
            </tr>
          
        </tbody>    
    </table>
    <p><input placeholder="Наименование вкладки"  v-model="nameMark" class="input"/>
    <input type="button" value="Добавить вкладку" class="btn" @click="addMark">
    </p> 
   
    <p>
    <input placeholder="Цвет"  v-model="name" class="input"/>
    <input placeholder="Менеджер"  v-model="nameMen" class="input"/>
    <input placeholder="Дата"  v-model="data" class="input"/>
    <input placeholder="Статус"  v-model="statusEls" class="input"/>
    <input placeholder="Комментарий"  v-model="info" class="input"/>
    </p>
    <p>
    <input type="button" value="Добавить эллемент таблицы" class="btn" @click="addElls">
    </p>
    
  </div>
  </template>
  
  <script>
  export default {
  name: "Table",
  data() {
    return {
     activeMark:"Акрил", 
     nameMark:"",
     name:"",
     nameMen:"",
     data:"",
     statusEls:"",
     info:"",
     idx:0,
     arrElls:[],
     arr:[],
     temp:[],
     temp2:'',
     user:[],
     getell:[],
     num:0,
     };
  },
  mounted() {
  this.$nextTick(function () {
    this.getdata()
    
  })
  },
  methods: {
   async delbd(index){
    const del = await this.$axios
          .$post("https://стильный-камень.рф/api/components/saveTable.php",{
            action: 'delete',
            idx:index,
            id:this.activeMark,
            })
          .then((data) => {
            console.log(del);
            this.temp=data
            })
          .catch((err) => {
            console.log(err);
            });
    },
    async getdata(){
      const user = await this.$axios
          .$post("https://стильный-камень.рф/api/components/saveTable.php",{
            action: 'getting',            
          })
          .then((data) => {
            console.log(data);
            this.getell=data;
            this.user = data;
            this.temp2 = data;
            this.num=this.user.length
            this.gettabs();
            })
          .catch((err) => {
            console.log(err);
            });
    },
    addMark(){
      this.arr.push(this.nameMark)
      },
    gettabs(){
      for (let i=0; i<this.user.length; i++) {
        this.temp.push(this.user[i].id)
      }
      this.user=this.temp
      this.user = new Set(this.user);
      this.user = this.user 
    },
     addElls(evt){
     this.arrElls.push(
        {
          id:this.activeMark,
          name:this.name,
          nameMen:this.nameMen,
          data:this.data,
          statusEls:this.statusEls,
          comments:this.info,
          }
        )
        this.addbd()      
    }, 
    async addbd(evt){ 
      const data = await this.$axios
        .$post("https://стильный-камень.рф/api/components/saveTable.php", {
            arr: this.arrElls,
            action: 'save',
            id:this.activeMark,
            name:this.name,
            nameMen:this.nameMen,
            data:this.data,
            statusEls:this.statusEls,
            comments:this.info,
           })
          .then((data) => {
             this.temp2 = data
             })
          .catch((err) => {
            console.log(err);
          });
    },   
    changeMark(ev){
      this.activeMark=ev.target.id
    }
  }
  };
  </script>
  <style scoped>
  .table{
    border: 1px solid black;
    border-collapse: collapse; 
  }
  .input{
    border: 1px solid black;
    height: 2.7vw;
    }
  .btn{
    background-color: #c8601b;
    color: white;
  }  
  .wrapper{
    display: flex;
    flex-direction: row;
    margin-bottom: 3vw;
  }
  .mark{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: none;
    padding: 1vw;
    background:  #F0F0F0;
    color:  black;
    margin-right: 0.5vw;
    cursor: pointer;
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 5px 10px;
    font-family: Arial;
    font-size: 1vw;
  } 
  .mark:hover{
  background: #c8601b;
  color: #fff ;
  }
  .value{
  font-weight: 400;
  } 
  .wrapp{
  display: flex;
  flex-direction: row;
  }
  .btninput {
    border-radius: 50px;
    width: 1vw;
    height: 2vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: #c8601b;
  }
  .inputs{
  background-color: unset;
    border: none;
    outline: none;
    color: black;
  }
  tbody{
  background-color: #BDD0D0;
  }
  th{
  padding: 1vw;
  font-size: 1vw; 
  }
  tr:hover{
  background-color: #E3AF8D;
  } 
  .bgcolor{
  background-color: #FFFFFF;
  }
  .bgc{
  background-color: #EEEEEE;
  }   
  </style>