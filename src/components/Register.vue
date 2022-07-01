<template>
    <p v-if="error.length" class="text-left">
        <ul>
            <li v-for="(issue , index ) in error" :key="index">{{ issue }}</li>
        </ul>
    </p>
    <form @submit.prevent="register" class="justify-center items-center w-full bg-white px-6 flex flex-col lg:w-1/2 xl:w-1/3 m-auto">
        <h2 class="text-2xl mb-4 mt-[20px]">Đăng ký</h2>
        <div class="w-full p-2 justify-start flex flex-col">
            <div class="my-2 flex flex-row">
                <span class="z-highest rounded-l-lg w-10 h-10 flex justify-center items-center text-2xl text-gray-400 border border-r-0 border-blue" mode="render" block="">
                    <font-awesome-icon class="text-[18px] text-blue" :icon="['fa','user']" />
                </span>
                <input v-model="inputUser" class="border border-blue rounded-r-lg outline-none focus:ring-1 ring-blue-400 w-full pl-3 shadow-0" id="username" name="" placeholder="Nhập username">
            </div>
            
            <div class="my-2 flex flex-row">
                <span class="z-highest rounded-l-lg w-10 h-10 flex justify-center items-center text-2xl text-gray-400 border border-r-0 border-blue" mode="render" block="">
                   <font-awesome-icon class="text-[18px] text-blue" :icon="['fa','key']" />
                </span>
                <input v-model="inputPassword"  type="password" class="h-10 border border-blue rounded-r-lg outline-none focus:ring-1 ring-blue-300 w-full pl-3 shadow-0" id="password" name="" placeholder="Nhập password">
            </div>
            <div class="my-2 flex flex-row">
                <span class="z-highest rounded-l-lg w-10 h-10 flex justify-center items-center text-2xl text-gray-400 border border-r-0 border-blue" mode="render" block="">
                   <font-awesome-icon class="text-[18px] text-blue" :icon="['fa','key']" />
                </span>
                <input v-model="inputPasswordRe" type="password"  class="h-10 border border-blue rounded-r-lg outline-none focus:ring-1 ring-blue-300 w-full pl-3 shadow-0" id="repassword" name="" placeholder="Nhập lại password">
            </div>
            <div class="my-4 flex items-center">
                <button value="submit" class="px-4 py-2 rounded bg-blue text-white flex-1 mr-2">Đăng ký</button>
                <p class="block text-left ml-auto text-[12px] m-0 text-blue" @click="showComponentsLogin(true)">
                    <span class="cursor-pointer">
                        Đã có tài khoản ? Đăng nhập
                    </span>
                </p>
            </div>
        </div>

       
    </form>
    
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                inputUser: '',
                inputPassword: '',
                inputPasswordRe: '' ,
                error : []
            }
        },
        methods: {
            showComponentsLogin(item){
                this.$emit('showComponentsLogin' , item )
            },  
            validEmail: function (email) {
                var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            },
            register() {
                this.error = [] ; 
                const registerInfo = {
                    name : this.inputUser,
                    password : this.inputPassword
                }

                !this.inputUser ? this.error.push('Vui long nhap Username !')
                    : !this.validEmail(this.inputUser) ?  this.error.push('Username khong hop le !') 
                        : !this.inputPassword ?  this.error.push('Vui long nhap password !') 
                            : !this.inputPasswordRe ? this.error.push( ' Vui long nhap lai password !')
                                : this.inputPassword != this.inputPasswordRe ? this.error.push('Password khong khop ')  
                                : '' ;

    
                if(this.error.length == 0 ) {
                    axios.post('http://localhost:3000/users' , registerInfo)
                    .then(
                        console.log('success')
                    ).catch(
                        err => {
                            console.log(err)
                        }
                    )
                } else {
                   return ; 
                }
                
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>