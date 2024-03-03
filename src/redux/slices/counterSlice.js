/*hem reducerları hem aksiyonları farklı bir dosyada oluşturmaj yeribe createSlice method yardımıyla tek bşr noktada tanımlayacağoz

?slice oluşturma 

import{ createSlice}
gerekli parametre tanımla
-name:slice ismi > string
-initialState:başlangıc state i > object
-reducers:aks görevlerini tanımladığımız fojnksitonlaru


*/ 
import { createSlice } from "@reduxjs/toolkit"
const counterSlice=createSlice({
    name:"counter",
    initialState:{count:0,isDarkTheme:true},
    // state in nasıl değişeceğine kadar veren fonskiyonlar
    reducers:{
        increase:(state,action)=>{
            state.count++;
        },
        decrease:(state,action)=>{
            state.count--;
        },
        setCount:(state,action)=>{
            state.count=action.payload;
        },
        toggleTheme:(state)=>{
            state.isDarkTheme=!state.isDarkTheme;
        }
    },
})

console.log(counterSlice)
console.log(counterSlice.actions.increase)
//counter sliceın olusturduğu reducurı store da kullanmak için export et.
export default counterSlice.reducer

//conter slice oluşturduğu aksiyon fonksiyonları bileşenlerde kullnamak için export ediyoruz
export const{decrease,increase,setCount,toggleTheme}=counterSlice.actions;