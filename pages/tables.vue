<template>
  <div> 
   <div v-if="!auth">
  <div class="formauth">
    <input placeholder="Введите имя" class="submiti" v-model="authlogin"/>
    <input placeholder="Введите пароль" class="submiti" v-model="authpassword"/>
    <br>
    <input type="button" class="submit" value="Войти" @click="reg()"/>
  </div>
  
  
  </div>
  <div v-if="auth" class="tables"> 
    <div class="imgwrapper">
      <div class="close" @click="hidemodal()">x</div>  
    <img class="imgotts imgottsdnone" :src="activeimg" @click="showott()">
    </div>
 
    <div class="wrapper" v-if="getell.length">
      <div
        v-for="(item, index) in user"
        :key="index"
        :class="item == activeMark ? 'mark active' : 'mark'"
        @click="changeMark"
        :id="item"
      >
        {{ item }}
      </div>
      <div
        v-for="(item, index) in arr"
        :key="index"
        :class="item == activeMark ? 'mark active' : 'mark'"
        @click="changeMark"
        :id="item"
      >
        {{ item }}
      </div>
    </div>

    <table class="table" v-if="getell.length">
      <tbody>
        <tr class="dnone">
          <th colspan="5" style="background-color: #bdd0d0 !important">
            Резерв неоплаченных остатков держится 14 календарных дней
          </th>
        </tr>
        <tr class="dnone" style="background-color: #bdd0d0 !important">
          <th>Чертежи необходимо обязательно согласовать с Пашей</th>
          <th colspan="4">проведена инвентаризация 25.01.2023г</th>
        </tr>
        <tr style="background-color: #bdd0d0 !important">
          <th></th>
          <th>Менеджер</th>
          <th>Дата</th>
          <th>Cтойка</th>
          <th>Статус</th>
          <th>Комментарий</th>
          <th>Оттенок</th>
          <th>Удалить</th>
        </tr>
        <tr style="background-color: #bdd0d0 !important">
          <th>Цвет</th>
          <th>Размер</th>
          <th colspan="3">Внутр. обозначение</th>
          <th></th>
          <th></th>
          <th></th>
        </tr>

        <tr 
          v-for="(item, index) in getell"
          :key="index"
          :class="[
            index % 2 != 0 ? 'bgcolor' : 'bgc',
            item.id != activeMark ? 'dnone' : '',
          ]"
        > 
        <td class="value wrapp" v-if="item.id == activeMark">
            <input
              :placeholder="item.name"
              v-model="item.name"
              @input="edit(item.idx, 'name')"
              class="input inputs"
            />
          </td>
          <td class="value" v-if="item.id == activeMark">
            <input
              :placeholder="item.nameMen"
              v-model="item.nameMen"
              @input="edit(item.idx, 'nameMen')"
              class="input inputs"
            />
          </td>
          <td class="value" v-if="item.id == activeMark">
            <input
              :placeholder="item.desk"
              v-model="item.desk"
              @input="edit(item.idx, 'desk')"
              class="input inputs"
            />
          </td>
          <td class="value" v-if="item.id == activeMark">
            <input
              :placeholder="item.data"
              v-model="item.data"
              @input="edit(item.idx, 'data')"
              class="input inputs"
            />
          </td>
          <td class="value" v-if="item.id == activeMark">
            <input
              :placeholder="item.statusEls"
              v-model="item.statusEls"
              @input="edit(item.idx, 'statusEls')"
              class="input inputs"
            />
          </td>
          <td class="value" v-if="item.id == activeMark">
            <input
              :placeholder="item.comments"
              v-model="item.comments"
              @input="edit(item.idx, 'comments')"
              class="input inputs"
            />
          </td>
          <td class="value" v-if="item.id == activeMark">
            <input
              v-if="item.ott == '0'"
              type="text"
              class="input inputlinck"
              placeholder="Введите ссылку"
              @input="edit(item.idx, 'ott')"
            />
            <img v-if="item.ott != '0'" :src="item.ott" class="imgott" @click="showott()"/>
          </td>
          <td class="value dellicon" v-if="item.id == activeMark">
            <input
              type="button"
              value="🗑"
              :id="index"
              class="btn btninput"
              @click="delbd(item.idx)"
            />
          </td>
         
        </tr>
      </tbody>
    </table>
    <div class="wrappbtn">
      <input
        type="button"
        class="addbtn"
        v-if="getell.length"
        value="+"
        @click="addElls"
      />
    </div>
    <p>
      <input
        placeholder="Наименование вкладки"
        v-model="nameMark"
        class="input"
      />
      <input
        type="button"
        value="Добавить вкладку"
        class="btn"
        @click="addMark"
      />
    </p>
  </div>
  </div>
</template>

  <script>
export default {
  name: "Table",
  data() {
    return {
      activeMark: "Акрил",
      nameMark: "",
      name: "",
      nameMen: "",
      data: "",
      statusEls: "",
      info: "",
      idx: 0,
      arrElls: [],
      arr: [],
      temp: [],
      temp2: "",
      user: [],
      getell: [],
      num: 0,
      auth:false,
      authlogin:'',
      authpassword:'',
      authlog:'',
      authpass:'',
      activeimg:'',
      desk:''
        
    };
  },
  mounted() {
    this.$nextTick(function () {
      this.getdata();
      console.log(this.$route);
    let checkout=localStorage.getItem('auth')
      if(checkout){
       this.auth=true
     }
     });
  },
  methods: {
    hidemodal(){
      let img=document.querySelector(".imgotts")
      let imgwrapper=document.querySelector(".imgwrapper")
      img.style="display:none"; 
      imgwrapper.style="display:none";     
    },
    showott(){
      let img=document.querySelector(".imgotts")
      img.style="display:flex!important;"
      this.activeimg=event.target.src
      console.log(this.activeimg)
      let imgwrapper=document.querySelector(".imgwrapper")
      imgwrapper.style="display:flex!important";        
    },
    reg(){      
      this.authlog=this.authlogin;
      this.authpass=this.authpassword;
      if( this.authlog=='test' && this.authpass=='125777'){
      localStorage.setItem('name', this.authlog);
      localStorage.setItem('pass', this.authpass);
      localStorage.setItem('auth', this.auth);
      this.auth=true
      }
    },
    async edit(index, nval) {
      const edit = await this.$axios
        .$post("https://стильный-камень.рф/api/components/saveTable.php", {
          action: "edit",
          idx: index,
          value: event.target.value,
          nameval: nval,
        })
        .then((data) => {
          this.temp = edit;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async delbd(index) {
      const del = await this.$axios
        .$post("https://стильный-камень.рф/api/components/saveTable.php", {
          action: "delete",
          idx: index,
          id: this.activeMark,
        })
        .then((data) => {
          console.log(del);
          this.temp = data;
          this.getdata("del");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async getdata(ins) {
      const user = await this.$axios
        .$post("https://стильный-камень.рф/api/components/saveTable.php", {
          action: "getting",
        })
        .then((data) => {
          console.log(data);
          this.getell = data;
          //this.getell.sort((a, b) => a.id > b.id ? 1 : -1);
          //this.activeMark = ev.target.number;
          let k=0
          for ( var item in this.getell) {
            if(k==0){
            this.activeMark=this.getell[item].id
            }
            k++
          }
          if (!ins) {
            this.user = data;
            this.temp2 = data;
            this.num = this.user.length;
            this.gettabs();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    addMark() {
      this.arr.push(this.nameMark);
      this.addElls2();
    },
    gettabs() {
      for (let i = 0; i < this.user.length; i++) {
        this.temp.push(this.user[i].id);
      }
      this.user = this.temp;
      this.user = new Set(this.user);
      this.user = this.user;
    },
    async addElls2() {
      const data = await this.$axios
        .$post("https://стильный-камень.рф/api/components/saveTable.php", {
          action: "add",
          id: this.nameMark,
        })
        .then((data) => {
          this.temp = data;
          this.getdata("insert");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async addElls() {
      const data = await this.$axios
        .$post("https://стильный-камень.рф/api/components/saveTable.php", {
          action: "add",
          id: this.activeMark,
        })
        .then((data) => {
          this.temp = data;
          this.getdata("insert");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    changeMark(ev) {
      this.activeMark = ev.target.id;
    },
  },
};
</script>
  <style scoped>
.table {
  border-collapse: collapse;
  display: table;
  table-layout: fixed;
}
.input {
  border: 1px solid black;
  height: 53px;
  padding: 10px;
}
.btn {
  background-color: #c8601b;
  color: white;
}
.wrapper {
  display: flex;
  flex-direction: row;
  margin-bottom: 3vw;
}
.mark {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: none;
  padding: 1vw;
  background: #f0f0f0;
  color: black;
  margin-right: 0.5vw;
  cursor: pointer;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 5px 10px;
  font-family: Arial;
  font-size: 14px;
}
.mark:hover,
.mark.active {
  background: #c8601b;
  color: #fff;
}
.value {
  font-weight: 400;
}
.wrapp {
  display: flex;
  flex-direction: row;
  border: none;
}
.btninput {
  border-radius: 50px;
  width: 10px;
  height: 26px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #c8601b;
}
.inputs {
  background-color: unset;
  border: none;
  outline: none;
  color: black;
  font-size: 18px;
}
tbody {
  background-color: #bdd0d0;
  flex-wrap: wrap;
  max-width: 100%;
  display: flex;
  table-layout: fixed;
  box-sizing: border-box;
  table-layout: fixed;
  /*border: 1px solid black;*/
  box-shadow: 0 0px 12px rgb(0 0 0 / 99%);
}
th {
  padding: 10px;
  font-size: 20px;
  padding: 5px;
  font-size: 13px;
}
tr:hover {
  background-color: #e3af8d;
}
.bgcolor {
  background-color: #ffffff;
}
.bgc {
  background-color: #eeeeee;
}
.dnone {
  display: none !important;
}
.left-menu {
  display: none;
}
.tables {
  /*margin-left: -51%;
    padding: 5vw;*/
  margin-left: 0;
  padding: 15px;
  width: 100%;
  max-width: 100%;
}
.tables tr {
  width: 100%;
  max-width: 100%;
  border: 1px solid black;
  border-bottom: none;
  display: flex;
}
.tables tr:last-child {
  border-bottom: 1px solid black;
}
.tables tr td,
.tables th {
  width: 14.28%;
  max-width: 14.28%;
  border-top: none;
  border-bottom: none;
  border-left: none;
  border-right: 1px solid black;
}
.tables th.wide-3l {
  width: 42.84%;
  max-width: 42.84%;
}
.tables tr td:last-child,
.tables th:last-child,
.tables .not-right-line {
  border-bottom: none;
  border-right: none;
}
.dellicon {
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: none;
}
.wrappbtn {
  display: flex;
  flex-direction: row;
}
.addbtn,
.delbtn {
  border-radius: 50px;
  width: 55px;
  height: 55px;
  font-size: 49px;
  margin-right: 10px;
  cursor: pointer;
}
.addbtn:hover,
.delbtn:hover {
  background-color: #c8601b;
  color: white;
}
.inputlinck {
  margin-left: 0;
  padding: 5px;
  font-size: 12px;
  margin-right: 12px;
  margin-bottom: 0;
  margin-top: 0;
  width: 100%;
}
.imgott {
  /*width: 287px;
    height: 54px;**/
  width: 100%;
  height: auto;
}
td .btninput {
  margin: auto;
}
.formauth{
  width: 50%;
  height: 284px;
  border: 1px solid black;
  margin-left: auto;
  margin-right: auto;
}
.submiti{
  margin-left: 9%;
  margin-right: 2%;
  margin-top: 5%;
  padding: 2%;
}
.imgotts{
  width: 67%;
  position: absolute;
  margin-left: 13%;
}
.imgottsdnone{
  display: none;
}
.submit{
  margin-left: 9%;
  margin-right: 2%;
  margin-top: 5%;
  padding: 2%;
  border-radius: 5px;
}

@media (max-width: 500px) {
  .tables tr td,
  .tables th {
    overflow: hidden;
    font-size: 9px;
    word-wrap: break-word;
  }
  .inputs {
    overflow: hidden;
    font-size: 10px;
    word-wrap: break-word;
  }
  .input {
    height: unset;
    padding: 0;
    word-wrap: break-word;
  }
}
.imgwrapper{
    background-color: white;
    display: none;
    height: 403px;
    position: absolute;
    width: 100%;
}
.close{
font-size: 40px;
margin-left: 6%;
cursor: pointer;
}
</style>
